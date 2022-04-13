import React, { Component } from 'react';
import axios from 'axios';

import StadiumService from '../../services/StadiumService';

class AddScreen extends Component {
 
  constructor(props){
    super(props);
    this.state={
      op:this.props.match.params.id,
      stadium_id:'',
      screen_name:'',
      rows:'',
      columns:''
    }
    this.changeStadiumIdHandler=this.changeStadiumIdHandler.bind(this);
    this.changeScreenNameHandler=this.changeScreenNameHandler.bind(this);
    this.changeRowsHandler=this.changeRowsHandler.bind(this);
    this.changeColumnsHandler=this.changeColumnsHandler.bind(this);
    this.changeStadiumIdHandler=this.changeStadiumIdHandler.bind(this);
    this.addScreen=this.addScreen.bind(this);

  }
  
  componentDidMount(){
    StadiumService.getByStadiumId(this.state.op).then((response)=>{
     let stadiumob=response.data;
     this.setState({stadium_id:stadiumob.stadiumId });
 })
}
addScreen=(u)=>{
  u.preventDefault();
  console.log("in addscreen method");
  let screen={
    stadiumId:this.state.stadium_id,
    screenName:this.state.screen_name,
    rows:this.state.rows,
    columns:this.state.columns
  }
  console.log((JSON.stringify(screen,this.state.op)));
  axios.post(`http://localhost:8000/screens/add/${this.state.stadium_id}`,screen)
  .then(response => {
   console.log('Screen Added successfully', response.data);
   this.props.history.push("/Admin/ScreenDashBoard");
});
}

  changeScreenNameHandler=(event)=>{this.setState({screen_name:event.target.value});}
  changeRowsHandler=(event)=>{this.setState({rows:event.target.value});}
  changeColumnsHandler=(event)=>{this.setState({columns:event.target.value});}
  changeStadiumIdHandler=(event)=>{this.setState({stadium_id:event.target.value});}
  
    render() {
        return (
            <section>
               
  <div class="custom-container">
    
    <form  onSubmit={this.addScreen} >
    <div> <h3 > Enter Screen Details</h3></div> 
    <div class="form-row">
        <div class="form-group">
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
            <label for="">StadiumId</label>
          </div>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <div class="input-data">
            <input
              type="text"
              class="form-control"
              formControlName="screenName"
              required
              value={this.state.screen_name}
              onChange={this.changeScreenNameHandler}
              
            />
            <div class="underline"></div>
            <label for="">Screen Name</label>
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
                formControlName="rows"
                required
                value={this.state.rows}
                onChange={this.changeRowsHandler}
              />
              <div class="underline"></div>
              <label for="">Rows</label>
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
                formControlName="columns"
                required
                value={this.state.columns}
                onChange={this.changeColumnsHandler}
                
              />
              <div class="underline"></div>
              <label for="">Columns</label>
            </div>
           
          </div>
        </div>
      </div>
        
      <div class="button">
        <button
          type="submit"
          class="btn btn-primary"
          
        >
          Add Screen
        </button>
      </div>
    </form>
  </div>
</section>
        );
    }
}

export default AddScreen;