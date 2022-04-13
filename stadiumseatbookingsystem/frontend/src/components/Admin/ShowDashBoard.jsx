import axios from 'axios';
import React, { Component } from 'react';

class ShowDashBoard extends Component {
    constructor(props){
        super(props);
        this.state={
            op: this.props.match.params.screenId,
            screen:[],
            showArr:[]
            
        }
    }
    componentDidMount(){
        console.log("in didmount of shows");
        axios.get(`http://localhost:8000/screens/viewScreen/${this.state.op}`).then((response)=>{
            let showob=response.data;
            this.setState({screen:showob,
                          showArr:showob.show})
            
            console.log(this.state.screen);
            console.log(this.state.showArr);
   
         })
    }
    addmatch=(showId)=>{
        console.log("in add show to match method")
        window.location.replace(`/Admin/AddShowtoMatch/${showId}`)

    }
    render() {
        return (
            <div className='container'>
                <h1> Show Details</h1>
                <hr/>
                <div>
                    <table className='table table-bordered table-striped'>
                        <thead className="thead-dark">
                            <tr>
                                <th>screen Id</th>
                                <th>screenName</th>
                                <th>Rows</th>
                                <th>columns</th>
                                 
                            </tr>


                        </thead>
                        <tbody>
                            {
                                <tr >
                                    <td>{this.state.screen.screenId}</td>
                                    <td>{this.state.screen.screenName}</td>
                                    <td>{this.state.screen.rows}</td>
                                    <td>{this.state.screen.columns}</td>
                                    
                                    
                                    
                                    
                                </tr>
                            }
                        </tbody>
                        

                    </table>
                </div>
                <div>
                <table className='table table-bordered table-striped'>
                        <thead className="thead-dark">
                            <tr>
                                <th>ShowId</th>
                                <th>ShowName</th>
                                <th>ShowDate</th>
                                <th>ShowStartTime</th>
                                <th>ShowEndTime</th>
                                 
                            </tr>


                        </thead>
                        <tbody>
                            {
                                this.state.showArr.map((show)=>
                                <tr key={show.showId}>
                                    <td>{show.showId}</td>
                                    <td>{show.showName}</td>
                                    <td>{show.showDate}</td>
                                    <td>{show.showStartTime}</td>
                                    <td>{show.showEndTime}</td>
                                    <td> <button className="btn btn-danger" onClick={()=>this.addmatch(show.showId)}>Addmatch</button></td>

                                </tr>)
                                
                                    
                                    
                                    
                                    
                                    
                            
                            }
                        </tbody>
                        

                    </table>
                </div>
            </div>
        );
    }
}

export default ShowDashBoard;