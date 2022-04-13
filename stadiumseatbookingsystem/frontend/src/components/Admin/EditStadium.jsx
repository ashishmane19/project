import React, { Component } from 'react';
import StadiumService from '../../services/StadiumService';

class EditStadium extends Component {
    constructor(props){
        super(props);
        this.state={
            op1:this.props.match.params.id,
            stadium_id :'',
            stadium_name :'',
            stadium_city :'',
            manager_contact:'',
            manager_name:''
        }

    }
    componentDidMount(){
       StadiumService.getByStadiumId(this.state.op1).then((response)=>{
        let stadiumob=response.data;
        this.setState({stadium_id:stadiumob.stadiumId,
            stadium_name:stadiumob.stadiumName,
            stadium_city:stadiumob.stadiumCity,
            manager_name:stadiumob.managerName,
            manager_contact:stadiumob.managerContact
           });
    })
       
    }
    editStadium=(e)=>{
        e.preventDefault();
        console.log(this.state);
        let stadium={
            stadiumId:this.state.stadium_id,
            stadiumName:this.state.stadium_name,
            stadiumCity:this.state.stadium_city,
            managerName:this.state.manager_name,
            managerContact:this.state.manager_contact

        }
        console.log((JSON.stringify(stadium)));
        StadiumService.editStadium(stadium);
        console.log("Stadium details updated succesfully");

        this.props.history.push('/StadiumList');

    }
    changeStadiumIdHandler=(event)=>{this.setState({stadium_id:event.target.value});}
    changeStadiumNameHandler=(event)=>{this.setState({stadium_name:event.target.value});}
    changeStadiumCityHandler=(event)=>{this.setState({stadium_city:event.target.value});}
    changeManagerContactHandler=(event)=>{this.setState({manager_contact:event.target.value});}
    changeManagerNameHandler=(event)=>{this.setState({manager_name:event.target.value});}
    
    render() {
        return (
            <section>
  <div class="custom-container">
    
    <form  onSubmit={this.editStadium}>
      <div class="form-row">
        <div class="form-group">
            <h1> Edit Stadium Details</h1>
            <br></br>
            <div class="input-data">
            <input
              type="text"
              class="form-control"
              formControlName="stadiumId"
              required
            
              value={this.state.stadium_id} 
              onChange={this.changeStadiumIdHandler}
            />
            <div class="underline"></div>
            <label for="">Stadium Id</label>
          </div>
          <br></br>
          <div class="input-data">
            <input
              type="text"
              class="form-control"
              formControlName="stadiumName"
              required
            
              value={this.state.stadium_name} 
              onChange={this.changeStadiumNameHandler}
            />
            <div class="underline"></div>
            <label for="">Stadium Name</label>
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
                formControlName="stadiumCity"
                required
                
              value={this.state.stadium_city} 
              onChange={this.changeStadiumCityHandler}
              />
              <div class="underline"></div>
              <label for="">Stadium City</label>
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
                formControlName="managerName"
                required
                
              value={this.state.manager_name} 
              onChange={this.changeManagerNameHandler}
              />
              <div class="underline"></div>
              <label for="">Manager Name</label>
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
                formControlName="managerContact"
                required
                
              value={this.state.manager_contact} 
              onChange={this.changeManagerContactHandler}
              />
              <div class="underline"></div>
              <label for="">Manager Contact</label>
            </div>
          </div>
        </div>
      </div>
      <div class="button">
        <button type="submit" class="btn btn-primary">Update Stadium</button>
      </div>
    </form>
  </div>
</section>
        );
    }
}

export default EditStadium;