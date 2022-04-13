import React, { Component } from 'react';
import AdminDashBoard from './AdminDashBoard';
import { Card } from 'react-bootstrap';
import adminBg from './images/AdminBg.png';
import MatchService from '../services/MatchService';


class Admin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            matcharr: [],
            username: sessionStorage.getItem("name"),
            password: sessionStorage.getItem("password"),
            role: sessionStorage.getItem("role")
        }
    }
    componentDidMount() {
        console.log("in matchlist componentDidMount");
        


        console.log(sessionStorage.getItem("name"));
        console.log(sessionStorage.getItem("password"));
        console.log(sessionStorage.getItem("role"));

        // var data = sessionStorage.getItem("name");
        // console.log("Name: " + data);


        MatchService.getAllMatchs().then((response) => {
            this.setState({ matcharr: response.data })
            console.log(this.state.matcharr)

        })
    }

    editMatch = (matchId) => {
        console.log("in match edit ")
        this.props.history.push(`/Admin/EditMatch/${matchId}`)
    }
    deleteMatch = (matchId) => {
        console.log("in delete match");
        MatchService.deleteMatch(matchId).then((response) => {
            this.props.history.push('Admin')
            console.log("deleted succesfully")
        })
    }

    addStadium=()=>{
        console.log("in add stadium");
        this.props.history.push('/Admin/AddStadium');
    }

    viewdetails=(matchId)=>{
        console.log ("in match view details");
        this.props.history.push(`/Admin/ViewMatch/${matchId}`);
    }

    render() {
        return (
            <div>
                <div><AdminDashBoard /></div>

                <h1 className="text-center">Hello {this.state.username}</h1>
                <h2 className="text-center">Matchs List</h2>



                <div className='row'>
                    <table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>Match Id</th>
                                <th> Match Name</th>
                                <th>Language</th>
                                <th> Date</th>
                                <th> Rating</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.matcharr.map((match) =>
                                    <tr key={match.matchId}>
                                        <td>{match.matchId}</td>
                                        <td>{match.matchName}</td>
                                        <td>{match.matchLanguage}</td>
                                        <td>{match.matchDate}</td>
                                        <td>{match.matchRating}</td>
                                        <td>
                                            <button className="btn btn-success" onClick={() => this.editMatch(match.matchId)}>edit</button> </td>
                                        <td>  <button className="btn btn-danger" onClick={() => this.deleteMatch(match.matchId)}>delete</button></td>
                                        <td> <button className="btn btn-success" onClick={()=>this.addStadium()}>addStadium</button>
                                        </td>
                                        <td>  <button className="btn btn-danger" onClick={()=>this.viewdetails(match.matchId)}>viewdetails</button></td>
                                    </tr>)
                            }
                        </tbody>

                    </table>

                </div>
                <div className='text-center'>

                </div>

            </div>

        );
    }
}

export default Admin;