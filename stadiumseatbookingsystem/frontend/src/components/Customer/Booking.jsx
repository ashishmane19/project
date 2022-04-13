import React, { Component } from 'react';
import BookingService from '../../services/BookingService';
import CustomerService from '../../services/CustomerService';
// import './Booking.css';


class Booking extends Component {

    constructor(props) {
        super(props)
        this.state = {
            custid: this.props.match.params.cid,
            showid: this.props.match.params.shid,
            custarr: [],
            // customerId:'',
            // customerName:'',
            bookingid:'',
            transactionmode: '',
            bookingdate: ''
            

        }
        this.changeBookingDateHandler = this.changeBookingDateHandler.bind(this);
        this.onChangeValue = this.onChangeValue.bind(this);

    }


    componentDidMount() {
        console.log("in Booking DidMount");
    
    
    
        console.log(sessionStorage.getItem("name"));
        console.log(sessionStorage.getItem("password"));
        console.log(sessionStorage.getItem("role"));
    
        // var data = sessionStorage.getItem("name");
        // console.log("Name: " + data);
    
    
        CustomerService. getCustomerById(this.state.custid).then((response) => {
           let custobj=response.data; 
          this.setState({ custarr: custobj })
          console.log(this.state.custarr)
          
            this.setState({ customerId: custobj.customerId }); 
            this.setState({ customerName: custobj.customerName });
            this.setState({ address: custobj.address });
            this.setState({ mobileNumber: custobj.mobileNumber });
            this.setState({ email: custobj.email });
            this.setState({ password: custobj.password });
    
        })
      
    }


    insertBooking = (b) => {
        b.preventDefault();
        let booking = {
            bookingDate: this.state.bookingdate,
            transactionMode: this.state.transactionmode,
            customer: this.state.custarr
        }
        
        console.log((JSON.stringify(booking)));
        BookingService.addBooking(booking, this.state.custid, this.state.showid)
            .then(response => {
                this.setState({ bookingid: response.data.transactionId })
                console.log('booking id is',this.state.bookingid);
                // console.log(this.state.bookingid);
                console.log('Booking Inserted Successfully', response.data);
                this.props.history.push(`/Customer/Seat/${this.state.bookingid}`)
            });
    }


    onChangeValue = (event) => {
        this.setState({ transactionmode: event.target.value });

    }

    changeBookingDateHandler = (event) => { this.setState({ bookingdate: event.target.value }); }


    render() {
        return (
            <section id="booking">
                <div class="custom-container">

                    <form onSubmit={this.insertBooking} >
                        <label for="">Transaction Mode</label>
                        <div class="radio">

                            <input
                                type="radio"
                                id="online"
                                name="mode"
                                value="online"
                                formControlName="mode"
                                class="radio"

                                checked={this.state.transactionmode === "online"}
                                onChange={this.onChangeValue}
                            />
                            <label class="radioName" for="male">Online</label><br />

                            <input
                                type="radio"
                                id="offline"
                                name="mode"
                                value="offline"
                                formControlName="mode"
                                class="radio"

                                checked={this.state.transactionmode === "offline"}
                                onChange={this.onChangeValue}
                            />
                            <label class="radioName" for="female">Offline</label><br />
                        </div>


                        <br></br>


                        <div class="form-group">
                            <div class="form-row">
                                <div class="date">
                                    <input
                                        type="date"
                                        class="form-control"
                                        formControlName="bookingDate"
                                        onChange={this.changeBookingDateHandler}
                                    />
                                </div>
                            </div>
                        </div>


                        <div>
                            <button type="submit" class="btn btn-danger">
                                Cancel
                            </button>
                            <button type="submit" class="btn btn-primary">
                                Proceed <i class="icofont-long-arrow-right"></i>
                            </button>
                        </div>
                    </form>
                </div >
            </section >




        );
    }
}


export default Booking;