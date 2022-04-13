import React, { Component } from 'react';
import StadiumService from '../../services/StadiumService';
import './AddStadium.css';

class AddStadium extends Component {
    constructor(){
        super();
        this.state={
            stadium_name :'',
            stadium_city :'',
            manager_contact:'',
            manager_name:''

        }
        this.changeStadiumNameHandler=this.changeStadiumNameHandler.bind(this);
        this.changeStadiumCityHandler=this.changeStadiumCityHandler.bind(this);
        this.changeManagerContactHandler=this.changeManagerContactHandler.bind(this);
        this.changeManagerNameHandler=this.changeManagerNameHandler.bind(this);
        this.addStadium=this.addStadium.bind(this);


    }
    addStadium=(u)=>{
        u.preventDefault();
        let stadium={stadiumName:this.state.stadium_name,
                     stadiumCity:this.state.stadium_city,
                     managerName:this.state.manager_name,
                     managerContact:this.state.manager_contact}
                     console.log((JSON.stringify(stadium)));
                     StadiumService.stadiumAdd(stadium)
                     .then(response => {
                        console.log('Stadium Added successfully', response.data);
                        this.props.history.push('/StadiumList');
                    });
    }
    changeStadiumNameHandler=(event)=>{this.setState({stadium_name:event.target.value});}
    changeStadiumCityHandler=(event)=>{this.setState({stadium_city:event.target.value});}
    changeManagerContactHandler=(event)=>{this.setState({manager_contact:event.target.value});}
    changeManagerNameHandler=(event)=>{this.setState({manager_name:event.target.value});}

    render() {
        return (
            <section>
  <div class="custom-container">
    
    <form  onSubmit={this.addStadium}>
      <div class="form-row">
        <div class="form-group">
            <h1>Stadium Details</h1>
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
        <button type="submit" class="btn btn-primary">Add Stadium</button>
      </div>
    </form>
  </div>
</section>
        );
    }
}

export default AddStadium;