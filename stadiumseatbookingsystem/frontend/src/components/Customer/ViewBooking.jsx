import React, { Component } from 'react';
import axios from 'axios';

class ViewBooking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            op: this.props.match.params.bid,
            bookingOb: [],
            transactionMode: '',
           
            transactionStatus: 'Completed',

            showDate: '',
            showStartTime: '',

            matchName: '',
            

            customerId: sessionStorage.getItem("custId")

        }

    }
    componentDidMount() {
        console.log("in component didmount of view match");
        console.log(this.state.customerId);
        axios.get(`http://localhost:8000/booking/viewbooking/${this.state.op}`)
            .then((response) => {
                let booking = response.data;

                this.setState({ bookingOb: booking });
                console.log(this.state.bookingOb);
                console.log("printing Booking");
                
                    this.setState({ transactionMode: booking.transactionMode });

                    console.log(booking.transactionId, booking.bookingDate, booking.transactionMode);

                    
                        let show1= booking.show;
                        this.setState({ showDate: show1.showDate });
                        this.setState({ showStartTime: show1.showStartTime });

                        console.log(show1.showId, show1.showStartTime, show1.showEndTime, show1.showName, show1.showDate);

                        
                           let match1=show1.match;
                            this.setState({ matchName: match1.matchName });


                            console.log(match1.matchId, match1.matchName, match1.matchGenre, match1.matchHours,match1.matchLanguage,match1.matchDescription,match1.matchRating, match1.matchDate);
                        




            })
    }


 


    render() {
        return (
            <div>
                <div>
                    <div className="text-center" ><h4> Booking Details:</h4></div>
                    <table className='table table-bordered table-striped'>
                        <thead className="thead-dark">
                            <tr>

                                <th>Match</th>
                                <th>Show Date</th>
                                <th>Show Start Time</th>
                                <th>Transaction Mode</th>
                                <th>Transaction Status</th>


                            </tr>


                        </thead>
                        <tbody>
                            {
                                <tr >
                                    <td>{this.state.matchName}</td>
                                    <td>{this.state.showDate}</td>
                                    <td>{this.state.showStartTime}</td>
                                    <td>{this.state.transactionMode}</td>
                                    <td>{this.state.transactionStatus}</td>

                                </tr>
                            }
                        </tbody>


                    </table>
                </div>
                
            </div>
        );
    }
}
// 

export default ViewBooking;