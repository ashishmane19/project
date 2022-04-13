import React, { Component } from 'react';
import MatchService from '../../services/MatchService';

class EditMatch extends Component {
    constructor(props){
        super(props)
        this.state={
            op:this.props.match.params.id,
            match_Id:'',
            match_name:'',
            match_genre:'',
            match_language:'',
            match_hours:'',
            match_rating:'',
            match_description:'',
            match_date:''
        }
    }
    componentDidMount(){
        MatchService.getByMatchId(this.state.op).then((response)=>{
            let matchob=response.data;
            this.setState({match_Id:matchob.matchId,
                match_name:matchob.matchName,
                match_genre:matchob.matchGenre,
                match_lanuage:matchob.matchLanguage,
                match_hours:matchob.matchHours,
                match_rating:matchob.matchRating,
                match_description:matchob.matchDescription,
                match_date:matchob.matchDate });
        })
       
    }

    editMatch=(e)=>{
        e.preventDefault();
        console.log(this.state);
        let match={ matchId:this.state.match_Id,
            matchName:this.state.match_name,
            matchGenre:this.state.match_genre,
            matchLanguage:this.state.match_language,
            matchHours:this.state.match_hours,
            matchRating:this.state.match_rating,
            matchDescription:this.state.match_description,
            matchDate:this.state.match_date}
           console.log((JSON.stringify(match)));
           MatchService.editMatch(match);
           console.log("match details updated succesfully");

           this.props.history.push('/Admin');
    }
    
    
    changeMatchNameHandler=(event)=>{this.setState({match_name:event.target.value});}
    changeMatchGenreHandler=(event)=>{this.setState({match_genre:event.target.value});}
    changeMatchLanguageHandler=(event)=>{this.setState({match_language:event.target.value});}
    changeMatchHoursHandler=(event)=>{this.setState({match_hours:event.target.value});}
    changeMatchRatingHandler=(event)=>{this.setState({match_rating:event.target.value});}
    changeMatchDescriptionHandler=(event)=>{this.setState({match_description:event.target.value});}
    changeMatchDateHandler=(event)=>{this.setState({match_date:event.target.value});}
    changeMatchIdHandler=(event)=>{this.setState({match_Id:event.target.value});}


    render() {
        return (
            <section>
            <div class="custom-container">
              
              <form onSubmit={this.editMatch} style={{background:'white'}}>
                <div class="col-lg-6 text-center text-lg-left" >
                  <div class="section-title">
                    <h1>Edit Match Details</h1>
                  </div>
                </div>
                <hr />
                <div class="form-row">
                  <div class="form-group">
                    <div class="input-data">
                      <input
                        type="text"
                        class="form-control"
                        formControlName="matchId"
                        name='match_Id'
                        id='match_Id'
                        required
                        value={this.state.match_Id} 
                        onChange={this.changeMatchIdHandler}
          
                      />
                      <div class="underline"></div>
                      <label for="">Match Id</label>
                    </div>
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group">
                    <div class="input-data">
                      <input
                        type="text"
                        class="form-control"
                        formControlName="matchName"
                        name='match_name'
                        id='match_name'
                        required
                        value={this.state.match_name} 
                        onChange={this.changeMatchNameHandler}
          
                      />
                      <div class="underline"></div>
                      <label for="">Match Name</label>
                    </div>
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group">
                    <div class="row">
                      <div class="col input-data">
                        <input
                          type="text"
                          class="form-control"
                          formControlName="matchGenre"
                          name='match_genre'
                          id='match_genre'
                          value={this.state.match_genre} 
                        onChange={this.changeMatchGenreHandler}
          
                          required
                        />
                        <div class="underline"></div>
                        <label for="">Match Genre</label>
                      </div>
                      <div class="col input-data">
                        <input
                          type="text"
                          class="form-control"
                          formControlName="matchLanguage"
                          name='match_language'
                          id='match_language'
                          value={this.state.match_language} 
                        onChange={this.changeMatchLanguageHandler}
                          required
                        />
                        <div class="underline"></div>
                        <label for="">Match Language</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group">
                    <div class="row">
                      <div class="col input-data">
                        <input
                          type="text"
                          class="form-control"
                          formControlName="matchHours"
                          name='match_hours'
                          id='match-hours'
                          value={this.state.match_hours} 
                        onChange={this.changeMatchHoursHandler}
                          required
                        />
                        <div class="underline"></div>
                        <label for="">Match Hours</label>
                      </div>
                      <div class="col input-data">
                        <input
                          type="number"
                          class="form-control"
                          formControlName="matchRating"
                          name='match_rating'
                          id='match_rating'
                          value={this.state.match_rating} 
                        onChange={this.changeMatchRatingHandler}
                          required
                        />
                        <div class="underline"></div>
                        <label for="">Match Rating</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <div class="form-row">
                    <div class="input-data textarea">
                      <textarea
                        rows="8"
                        cols="80"
                        formControlName="matchDescription"
                        name='match_description'
                        id='match_description'
                        value={this.state.match_description} 
                        onChange={this.changeMatchDescriptionHandler}
                        required
                      ></textarea>
                      <div class="underline"></div>
                      <label for="">Match Description</label>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="date">
                      <input
                        type="date"
                        class="form-control"
                        placeholder="Enter Match Date"
                        formControlName="matchDate"
                        name='match_date'
                        id='match_date'
                        value={this.state.match_date} 
                        onChange={this.changeMatchDateHandler}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    class="btn btn-primary"
                    
                  >
                    update changes
                  </button>
                </div>
              </form>
            </div>
          </section>
        );
    }
}

export default EditMatch;