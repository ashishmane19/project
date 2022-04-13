import React, { Component } from 'react';

import LoginService from '../services/LoginService';
import UserService from '../services/UserService';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userid: '',
      username: '',
      password: '',
      role: '',
      customerid:''

    }

    this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
    this.changepasswordHandler = this.changepasswordHandler.bind(this);


  }


  // componentDidMount() {

  //   console.log("in LoginComponentDidMount method " + this.state.username + " and " + this.state.password);


  //   //to send get request to webservice and get the object which matches with id
  //   UserService.getByrole(this.state.username, this.state.password).then((response) => {
  //     let userOb = response.data;
  //     this.setState({ role: userOb.role });
  //   })



  // }


  Loginuser = (u) => {
    u.preventDefault();

    //to send get request to webservice and get the object which matches with id
    UserService.getByrole(this.state.username, this.state.password).then((response) => {
      let userOb = response.data;

      if(userOb.role==="customer"){
      this.setState({ userid: userOb.userid, role: userOb.role, customerid: userOb.customer.customerId });
      }

      else if(userOb.role==="ADMIN"){
        this.setState({ userid: userOb.userid, role: userOb.role });
        }

    })

    // var user;
    // console.log(this.state);
    // if(this.state.role==="customer"){
     let user = {userid: this.state.userid, username: this.state.username, password: this.state.password , role: this.state.role, customer: this.state.customerid};
    // }

    // else if(this.state.role==="ADMIN"){
    //   user = {userid: this.state.userid, username: this.state.username, password: this.state.password , role: this.state.role};
    // }



    console.log((JSON.stringify(user)));
    // console.log((JSON.stringify(user)));
    if (this.state.role === "customer") {
      LoginService.login(user)


        .then(response => {

          console.log('user loggedIn successfully', response.data);

          sessionStorage.setItem("uid",this.state.userid);
          sessionStorage.setItem("name",this.state.username);
          sessionStorage.setItem("password",this.state.password);
          sessionStorage.setItem("role",this.state.role);
          sessionStorage.setItem("custId",this.state.customerid);
          
          this.props.history.push('/Customer');
        });
    }

    else if(this.state.role === "ADMIN"){
      LoginService.login(user)

        .then(response => {

          console.log('user loggedIn successfully', response.data);

          sessionStorage.setItem("name",this.state.username);
          sessionStorage.setItem("password",this.state.password);
          sessionStorage.setItem("role",this.state.role);
          
          this.props.history.push('/Admin');
        });

    }

    else {

    }


  }

  changeUserNameHandler = (event) => { this.setState({ username: event.target.value }); }
  changepasswordHandler = (event) => { this.setState({ password: event.target.value }); }

  render() {
    return (
      <div>

        <form onSubmit={this.Loginuser}>
          <div class="d-flex justify-content-center h-100">
            <div class="card">
              <div class="card-header ">
                <h3>Sign In</h3>
                <div class="d-flex justify-content-end social_icon"></div>
              </div>
              <div class="card-body">
                <div class="input-group form-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text"
                    ><i class="fas fa-user"></i
                    ></span>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    formControlName="username"
                    placeholder="Username"
                    required
                    value={this.state.username}
                    onChange={this.changeUserNameHandler}
                  />
                </div>
                <div class="input-group form-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fas fa-key"></i></span>
                  </div>
                  <input
                    type="password"
                    class="form-control"
                    formControlName="password"
                    placeholder="Password"
                    required
                    value={this.state.password} onChange={this.changepasswordHandler}
                  />
                </div>

                <div class="form-group">
                  <button type='submit' name='btn' id='btn'>Login</button>
                </div>
              </div>
              <hr />
              <div class="card-footer">
                <div class="d-flex justify-content-center links">
                  Don't have an account?<a href='./Registration' >signIn</a>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;