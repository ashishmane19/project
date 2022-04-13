import React, { Component } from 'react';
// import UpdateCustomer from './UpdateCustomer';
import { Navbar, Nav, Container } from 'react-bootstrap';
import MatchService from '../../services/MatchService';

class Customer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      matcharr: [],
      userid: sessionStorage.getItem("uid"),
      username: sessionStorage.getItem("name"),
      password: sessionStorage.getItem("password"),
      role: sessionStorage.getItem("role"),
      custid: sessionStorage.getItem("custId"),

    }
  }

  componentDidMount() {
    console.log("in matchlist componentDidMount");



    console.log(sessionStorage.getItem("name"));
    console.log(sessionStorage.getItem("password"));
    console.log(sessionStorage.getItem("role"));
    console.log(sessionStorage.getItem("custId"));
    // var data = sessionStorage.getItem("name");
    // console.log("Name: " + data);


    MatchService.getAllMatchs().then((response) => {
      this.setState({ matcharr: response.data })
      console.log(this.state.matcharr)

    })
  }

  viewShow = (matchId) => {
    console.log("in match edit ")
    sessionStorage.setItem("mid", matchId)
    this.props.history.push(`/Customer/ViewShow/${matchId}`)
  }

  deleteMatch = (matchId) => {
    console.log("in delete match");
    MatchService.deleteMatch(matchId).then((response) => {
      this.props.history.push('Admin')
      console.log("deleted succesfully")
    })
  }

  showList=()=>{
    console.log("in show list match");
    this.props.history.push(`/Customer/AvailableShows`)
  }

  render() {
    return (
      <div>
        <h1>welcome {this.state.username}</h1>
        <div>
          <Navbar bg="dark" variant="dark">
            <Container>

              <Nav className="me-auto">
                <Nav.Link href="./Home">Home</Nav.Link>
                <Nav.Link href="./Matchs">Matchs</Nav.Link>
              </Nav>
              <Nav className="me-auto ">

              </Nav>
              <Nav className=" text-right">
                <Nav.Link href="./UpdateCustomer">Update Details</Nav.Link>

                <Nav.Link href="./Logout">SignOut</Nav.Link>
              </Nav>

            </Container>
          </Navbar>
        </div>

        <h2 className="text-center">Matchs List</h2>

        <div className='row'>
          <table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Match Id</th>
                <th> Match Name</th>
                <th>Language</th>
                <th> Release Date</th>
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
                      <button className="btn btn-success" onClick={() => this.viewShow(match.matchId)}>View</button> </td>
                    {/* <td>  <button className="btn btn-danger" onClick={() => this.deleteMatch(match.matchId)}>delete</button></td>
                    <td> <button className="btn btn-success">view</button>
                    </td> */}
                  </tr>
                )
              }
            </tbody>

          </table>
          {/* <div className="text-center">
            <button className="btn btn-success" onClick={() => this.bookMatch(match.matchId)}>Book Now</button> 
            <button className="btn btn-success" onClick={() => this.showList()} > Available Shows</button>
          </div> */}
        </div>

      </div>
    );
  }
}

export default Customer;