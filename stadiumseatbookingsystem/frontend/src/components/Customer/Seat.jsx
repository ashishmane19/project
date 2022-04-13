import React, { Component } from 'react';
import BookingService from '../../services/BookingService';
import SeatService from '../../services/SeatService';
// import './Booking.css';


class Seat extends Component {

    constructor(props) {
        super(props)
        this.state = {
            bookingid: this.props.match.params.bid,
            nofseats: '',

            seatarr: [],
            bookseat: []


        }
        this.changeNofSeatHandler = this.changeNofSeatHandler.bind(this);
        // this.selectSeat = this.selectSeat.bind(this);
        // this.onChangeValue = this.onChangeValue.bind(this);

    }


    componentDidMount() {
        console.log("in Seat DidMount");


        SeatService.getAllSeats().then((response) => {
            this.setState({ seatarr: response.data })
            console.log(this.state.seatarr)






            // console.log(sessionStorage.getItem("name"));
            // console.log(sessionStorage.getItem("password"));
            // console.log(sessionStorage.getItem("role"));

            // var data = sessionStorage.getItem("name");
            // console.log("Name: " + data);


            // CustomerService.getCustomerById(this.state.custid).then((response) => {
            //     let custobj = response.data;
            //     this.setState({ custarr: custobj })
            //     console.log(this.state.custarr)

            //     this.setState({ customerId: custobj.customerId });
            //     this.setState({ customerName: custobj.customerName });
            //     this.setState({ address: custobj.address });
            //     this.setState({ mobileNumber: custobj.mobileNumber });
            //     this.setState({ email: custobj.email });
            //     this.setState({ password: custobj.password });

        })

    }


    // insertBooking = (b) => {
    //     b.preventDefault();
    //     let booking = {
    //         bookingDate: this.state.bookingdate,
    //         transactionMode: this.state.transactionmode,
    //         customer: this.state.custarr
    //     }

    //     console.log((JSON.stringify(booking)));
    //     BookingService.addBooking(booking, this.state.custid, this.state.showid)
    //         .then(response => {
    //             this.setState({ bookingid: response.data.transactionId })
    //             console.log('booking id is', this.state.bookingid);
    //             // console.log(this.state.bookingid);
    //             console.log('Booking Inserted Successfully', response.data);
    //             this.props.history.push(`/Customer/Seat/${this.state.bookingid}`)
    //         });
    // }


    selectSeat = (seat) => {
        // seat.preventDefault();
        console.log("in select seat")
        // let selectedseat = {
        //     seatId: seat.seatId,
        //     seatNumber: seat.seatNumber,
        //     type: seat.type,
        //     price: seat.price,
        //     status: seat.status
        // }


        // console.log((JSON.stringify(selectedseat)));
        // console.log("in select seat")
        SeatService.bookSeat(seat)
            .then(response => {
                // this.setState({ bookseat: response.data })
                this.bookseat.push(seat);
                console.log(this.state.bookseat);
                // console.log(this.state.bookingid);
                // console.log('Booking Inserted Successfully', response.data);
                // this.props.history.push(`/Customer/Seat/${this.state.bookingid}`)
            });
    }


    viewBooking = (bid) => {
        // bid.preventDefault();
        console.log("in view Booking ")
        // sessionStorage.setItem("mid", matchId)
        this.props.history.push(`/Customer/ViewBooking/${bid}`)
      }


    // onChangeValue = (event) => {
    //     this.setState({ transactionmode: event.target.value });

    // }

    changeNofSeatHandler = (event) => { this.setState({ nofseats: event.target.value }); }


    render() {
        return (
            <section id="ticket">
                <div class="custom-container">

                    <form >
                        
                        <div >
                            <div class="form-group">
                                <label for=""> No of Seats</label>
                                <div class="input-data">

                                    <input
                                        type="number"
                                        class="form-control"
                                        formControlName="noOfSeats"
                                        onChange={this.changeNofSeatHandler}
                                    />
                                    <div class="underline"></div>

                                </div>
                            </div>
                            <br></br>

                            <div>Choose Seats</div>

                            <div className='row'>
                                <table striped bordered hover variant="dark">
                                    <thead>
                                        <tr>
                                            <th>Seat ID</th>
                                            <th>Seat Number</th>
                                            <th>Seat Type</th>
                                            <th>Seat Price</th>
                                            <th>Seat Status</th>


                                        </tr>

                                    </thead>
                                    <tbody>
                                        {
                                            this.state.seatarr.map((seat) =>
                                                <tr key={seat.seatId}>
                                                    <td>{seat.seatId}</td>
                                                    <td>{seat.seatNumber}</td>
                                                    <td>{seat.type}</td>
                                                    <td>{seat.price}</td>
                                                    <td>{seat.status}</td>
                                                    <td>
                                                        <button className="btn btn-success" onClick={() => this.selectSeat(seat)}>Select Seat</button>
                                                    </td>

                                                </tr>)
                                        }
                                    </tbody>
                                </table>

                            </div>
                            <button type="submit" class="btn btn-primary" onClick={() => this.viewBooking(this.state.bookingid)}>Get Ticket</button>
                        </div>
                    </form>
                </div>
            </section>





        );
    }
}


export default Seat;