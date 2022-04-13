import React, { Component } from 'react';
import UserService from '../services/UserService';


class Registration extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      role: ''


    }
    this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
    this.changepasswordHandler = this.changepasswordHandler.bind(this);
    this.onChangeValue = this.onChangeValue.bind(this);
    this.createNewUser = this.createNewUser.bind(this);
  }

  createNewUser = (u) => {
    u.preventDefault();
    let user = { username: this.state.username, password: this.state.password, role: this.state.role };
    console.log((JSON.stringify(user)));
    UserService.createUser(user)
      .then(response => {
        console.log('user data added successfully', response.data);
        this.props.history.push('/Login');
      });

  }
  onChangeValue = (event) => {
    this.setState({ role: event.target.value });

  }




  changeUserNameHandler = (event) => { this.setState({ username: event.target.value }); }
  changepasswordHandler = (event) => { this.setState({ password: event.target.value }); }





  render() {
    return (
      <div>
        <form onSubmit={this.createNewUser}>

          <h3>Sign Up</h3>

          <div class="card-body">
            <div class="input-group form-group">
              <div class="input-group-prepend">
                <span class="input-group-text"
                ><i class="fas fa-user"></i
                ></span>
              </div>
              Username:
              <input
                type="text"
                class="form-control"
                formControlName="username"
                name="userName"
                id="userName"
                placeholder="Enter UserName"
                required
                value={this.state.username}
                onChange={this.changeUserNameHandler}

              />
            </div>
          </div>

          <div class="input-group form-group">
            <div class="input-group-prepend">
              <span class="input-group-text"><i class="fas fa-key"></i></span>
            </div>Password :
            <input
              type="password"
              class="form-control"
              formControlName="password"
              name="password"
              id="password"
              placeholder="Enter suitable password"
              required
              value={this.state.password} onChange={this.changepasswordHandler}

            />
          </div>


          <div class="radio">
            <input
              type="radio"
              id="ADMIN"
              name="role"
              value="ADMIN"
              formControlName="role"
              class="radio"
              checked={this.state.role === "ADMIN"}
              onChange={this.onChangeValue}
            />
            <label class="radioName" for="male">Admin</label><br />
            <input
              type="radio"
              id="customer"
              name="role"
              value="customer"
              formControlName="role"
              class="radio"
              checked={this.state.role === "customer"}
              onChange={this.onChangeValue}
            />
            <label class="radioName" for="female">Customer</label><br />
          </div>
          {/* <button type="submit" className="btn btn-primary btn-block" >Sign Up</button> */}
          <button type="submit" class="btn btn-outline-success" >SUBMIT</button>
          <div class="d-flex justify-content-left links">
            Login?<a href='./Login'>signin here</a>
          </div>
        </form>
      </div>
    );
  }
}


export default Registration;