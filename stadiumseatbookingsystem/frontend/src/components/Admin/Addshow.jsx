import React, { Component } from 'react';
import './Addshow.css';
import axios from 'axios';

class Addshow extends Component {
    constructor(props){
        super(props);
        this.state={
            op1:this.props.match.params.stadiumId,
            op2:this.props.match.params.screenId,
            show_name:'',
            show_date:'',
            show_startTime:'',
            show_endTime:''
        }
        this.changeShowNameHandler=this.changeShowNameHandler.bind(this);
        this.changeShowDateHandler=this.changeShowDateHandler.bind(this);
        this.changeShowStartTimeHandler=this.changeShowStartTimeHandler.bind(this);
        this.changeShowEndTimeHandler=this.changeShowEndTimeHandler.bind(this);
        this.addShow=this.addShow.bind(this);

    }
    addShow=(e)=>{
        e.preventDefault();
        let show={
            showName:this.state.show_name,
            showDate:this.state.show_date,
            showStartTime:this.state.show_startTime,
            showEndTime:this.state.show_endTime
        }
        console.log((JSON.stringify(show)));
        axios.post(`http://localhost:8000/shows/add/${this.state.op1}/${this.state.op2}`,show)
        .then(response => {
            console.log('Show Added successfully', response.data);
            this.props.history.push(`/Admin/ShowDashBoard/${this.state.op2}`);
         });
    }
    changeShowNameHandler=(event)=>{this.setState({show_name:event.target.value})};
    changeShowDateHandler=(event)=>{this.setState({show_date:event.target.value})};
    changeShowStartTimeHandler=(event)=>{this.setState({show_startTime:event.target.value})};
    changeShowEndTimeHandler=(event)=>{this.setState({show_endTime:event.target.value})};
    render() {
        return (
            
                <section>
  <div class="custom-container">
    
     <h3>CREATE SHOW</h3> 
    <form  onSubmit={this.addShow}>
      <div class="form-row">
        <div class="form-group">
          <div class="input-data">
            <input
              type="text"
              class="form-control"
              formControlName="showName"
              required
              value={this.state.show_name}
              onChange={this.changeShowNameHandler}
            />
            <div class="underline"></div>
            <label for="">Show Name</label>
          </div>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <div class="row">
            <div class="col input-data">
              <input
                type="date"
                class="form-control"
                formControlName="showDate"
                required
                value={this.state.show_date}
                onChange={this.changeShowDateHandler}
              />
              <div class="underline"></div>
               <label for="">Show Date</label>
            </div>
          </div>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <div class="row">
            <div class="col input-data">
              <input
                type="datetime"
                class="form-control"
                formControlName="showStartTime"
                required
                value={this.state.show_startTime}
                onChange={this.changeShowStartTimeHandler}
              />
              <div class="underline"></div>
               <label for="">Show Start Time</label> 
            </div>
          </div>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <div class="row">
            <div class="col input-data">
              <input
                type="datetime"
                class="form-control"
                formControlName="showEndTime"
                required
                value={this.state.show_endTime}
                onChange={this.changeShowEndTimeHandler}
              />
              <div class="underline"></div>
              <label for="">Show End Time</label> 
            </div>
          </div>
        </div>
      </div>
      <div>
        <button
          type="submit"
          class="btn btn-primary"
          
          
        >
          Add Show
        </button>
      </div>
    </form>
  </div>
</section>

            
        );
    }
}

export default Addshow;