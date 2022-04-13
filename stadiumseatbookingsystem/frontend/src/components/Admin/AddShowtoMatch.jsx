import axios from 'axios';
import React, { Component } from 'react';
import MatchService from '../../services/MatchService';

class AddShowtoMatch extends Component {
    constructor(props){
        super(props)
        this.state={
            op:this.props.match.params.showId,
            matcharr:[]
        }
    }
    componentDidMount(){
        console.log("in matchlist componentDidMount");
        MatchService.getAllMatchs().then((response)=>{
           this.setState({matcharr:response.data})
           console.log(this.state.matcharr)
  
        })
      }
      addShow=(match)=>{
          console.log("in put method of add show to match");
        axios.put(`http://localhost:8000/matchs/map/${this.state.op}`,match)
        .then(response => {
            console.log('match added to show  successfully', response.data);
            this.props.history.push("/Admin");
         });
      }
    render() {
        return (
            <div>
                  
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
                           this.state.matcharr.map((match)=>
                           <tr key={match.matchId}>
                               <td>{match.matchId}</td>
                               <td>{match.matchName}</td>
                               <td>{match.matchLanguage}</td>
                               <td>{match.matchDate}</td>
                               <td>{match.matchRating}</td>
                               <td>
                                    <button className="btn btn-success" onClick={()=>this.addShow(match)}>AddShow</button> </td>
                                   
                           </tr>)
                       }
                   </tbody>

               </table>

           </div>
            </div>
        );
    }
}

export default AddShowtoMatch;