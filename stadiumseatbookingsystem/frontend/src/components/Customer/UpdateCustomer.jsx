import React, { Component } from 'react';
import './UpdateCustomer.css';
import CustomerService from '../../services/CustomerService';
import { Navbar, Nav, Container } from 'react-bootstrap';


class UpdateCustomer extends Component {
  constructor(props) {
    super(props);
    this.state = {

      address: '',
      customername:'' ,
      email: '',
      mobilenumber: '',
      // password: '',
      // username: sessionStorage.getItem("name"),
      // role: sessionStorage.getItem("role"),
      password: sessionStorage.getItem("password"),
      
      custid: sessionStorage.getItem("custId")

    }
    this.changeAddressHandler = this.changeAddressHandler.bind(this);
    this.changeCustomerNameHandler = this.changeCustomerNameHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changeMobileNumberHandler = this.changeMobileNumberHandler.bind(this);
    this.changePasswordHandler = this.changePasswordHandler.bind(this);
  }
  updateCustomer = (u) => {
    u.preventDefault();
    let customer = {

      customerId:this.state.custid,
      customerName: this.state.customername,
      address: this.state.address,
      mobileNumber: this.state.mobilenumber,
      email: this.state.email,
      password: this.state.password
      

    }
    console.log((JSON.stringify(customer)));
    CustomerService.updateCustomer(customer)
      .then(response => {
        console.log('Cutomer Details Updated', response.data);
        this.props.history.push('/Customer');
      });


  }
  changeAddressHandler = (event) => { this.setState({ address: event.target.value }); }
  changeCustomerNameHandler = (event) => { this.setState({ customername: event.target.value }); }
  changeEmailHandler = (event) => { this.setState({ email: event.target.value }); }
  changeMobileNumberHandler = (event) => { this.setState({ mobilenumber: event.target.value }); }
  changePasswordHandler = (event) => { this.setState({ password: event.target.value }); }

  render() {
    return (



      <section>
        <div class="custom-container">


          <form onSubmit={this.updateCustomer} style={{ background: 'white' }}>
            <div class="col-lg-10 text-center text-lg-left" style={{ background: 'blue' }}>
              <div class="section-title">
                <h1>Update Customer Details</h1>
              </div>
            </div>
            <hr />
            <div class="form-row">
              <div class="form-group">
                <div class="input-data">
                  <input
                    type="text"
                    class="form-control"
                    formControlName="customerName"
                    name='customer_name'
                    id='customer_name'
                    required
                    value={this.state.customername}
                    onChange={this.changeCustomerNameHandler}

                  />
                  <div class="underline"></div>
                  <label for="">Customer Name</label>
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
                      formControlName="customerEmail"
                      name='email'
                      id='email'
                      value={this.state.email}
                      onChange={this.changeEmailHandler}

                      required
                    />
                    <div class="underline"></div>
                    <label for="">Email</label>
                  </div>
                  <div class="col input-data">
                    <input
                      type="text"
                      class="form-control"
                      formControlName="customerMobileNumber"
                      name='mobile_number'
                      id='mobile_number'
                      value={this.state.mobilenumber}
                      onChange={this.changeMobileNumberHandler}
                      required
                    />
                    <div class="underline"></div>
                    <label for="">Mobile Number</label>
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
                      formControlName="customerAddress"
                      name='address'
                      id='address'
                      value={this.state.address}
                      onChange={this.changeAddressHandler}
                      required
                    />
                    <div class="underline"></div>
                    <label for="">Address</label>
                  </div>
                  <div class="col input-data">
                    <input
                      type="text"
                      class="form-control"
                      formControlName="customerPassword"
                      name='password'
                      id='password'
                      value={this.state.password}
                      onChange={this.changePasswordHandler}
                      required
                    />
                    <div class="underline"></div>
                    <label for="">Password</label>
                  </div>
                </div>
              </div>
            </div>



            <div>
              <button
                type="submit"
                class="btn btn-primary"
              >
                Update Details
              </button>
            </div>
          </form>
        </div>
      </section>

    );
  }
}

export default UpdateCustomer;