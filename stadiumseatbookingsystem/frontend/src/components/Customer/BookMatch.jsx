import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import MatchService from '../../services/MatchService';

class BookMatch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            op: this.props.match.params.id,
            matcharr: []
            // match_Id: '',
            // match_name: '',
            // match_genre: '',
            // match_language: '',
            // match_hours: '',
            // match_rating: '',
            // match_description: '',
            // match_date: ''
        }
    }

    componentDidMount() {
        MatchService.getByMatchId(this.state.op).then((response) => {
            console.log("in did mount");
            this.setState({ matcharr: response.data })
            console.log(this.state.matcharr)
            // let matchob = response.data;
            // this.setState({
            //     match_Id: matchob.matchId,
            //     match_name: matchob.matchName,
            //     match_genre: matchob.matchGenre,
            //     match_lanuage: matchob.matchLanguage,
            //     match_hours: matchob.matchHours,
            //     match_rating: matchob.matchRating,
            //     match_description: matchob.matchDescription,
            //     match_date: matchob.matchDate
            // });


        })

    }

    // editMatch = (e) => {
    //     e.preventDefault();
    //     console.log(this.state);
    //     let match = {
    //         matchId: this.state.match_Id,
    //         matchName: this.state.match_name,
    //         matchGenre: this.state.match_genre,
    //         matchLanguage: this.state.match_language,
    //         matchHours: this.state.match_hours,
    //         matchRating: this.state.match_rating,
    //         matchDescription: this.state.match_description,
    //         matchDate: this.state.match_date
    //     }
    //     console.log((JSON.stringify(match)));
    //     MatchService.editMatch(match);
    //     console.log("match details updated succesfully");

    //     this.props.history.push('/Admin');
    // }


    // changeMatchNameHandler = (event) => { this.setState({ match_name: event.target.value }); }
    // changeMatchGenreHandler = (event) => { this.setState({ match_genre: event.target.value }); }
    // changeMatchLanguageHandler = (event) => { this.setState({ match_language: event.target.value }); }
    // changeMatchHoursHandler = (event) => { this.setState({ match_hours: event.target.value }); }
    // changeMatchRatingHandler = (event) => { this.setState({ match_rating: event.target.value }); }
    // changeMatchDescriptionHandler = (event) => { this.setState({ match_description: event.target.value }); }
    // changeMatchDateHandler = (event) => { this.setState({ match_date: event.target.value }); }
    // changeMatchIdHandler = (event) => { this.setState({ match_Id: event.target.value }); }


    render() {
        return (
            <div>

                <h2 className="text-center">Match Details</h2>
                <div className='row'>
                    <table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>Match Id</th>
                                <th> Match Name</th>
                                <th>Match Genre</th>
                                <th> Match Hours</th>
                                <th> Match Language</th>
                                <th> Match Description</th>
                                <th> Match  Rating</th>
                                <th> Show Id</th>



                            </tr>

                        </thead>
                        <tbody>
                            {
                               
                                    <tr key={this.state.matcharr.showId}>

                                        <td>{this.state.matcharr.matchId}</td>
                                        <td>{this.state.matcharr.matchName}</td>
                                        <td>{this.state.matcharr.matchGenre}</td>
                                        <td>{this.state.matcharr.matchHours}</td>
                                        <td>{this.state.matcharr.matchLanguage}</td>
                                        <td>{this.state.matcharr.matchDescription}</td>
                                        <td>{this.state.matcharr.matchRating}</td>
                                        <td>{this.state.matcharr.showId}</td>

                                        {/* <td>
                                    <button className="btn btn-success" onClick={()=>this.editStadium(stadium.stadiumId)}>edit</button> </td>
                                    <td>  <button className="btn btn-danger" onClick={()=>this.deleteStadium(stadium.stadiumId)}>delete</button></td>
                                    <td> <button className="btn btn-success" onClick={()=>this.addScreen(stadium.stadiumId)}>Add Screen</button>
                                </td> */}
                                    </tr>
                            }
                        </tbody>
                    </table>

                </div>



            </div>
        );
    }
}

export default BookMatch;