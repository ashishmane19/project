import React, { Component } from 'react';
import axios from 'axios';

class ViewMatch extends Component {
    constructor(props){
        super(props);
        this.state={
            op:this.props.match.params.matchId,
            stadiumOb:[],
            stadiumCity:'',
            stadiumName:'',
            screenName:'',
            showName:'',
            showDate:'',
            showStartTime:'',
            showEndTime:'',
            matchName:'',
            matchHours:'',
            showId:''
            
        }

    }
    componentDidMount(){
        console.log("in component didmount of view match");
        axios.get(`http://localhost:8000/stadium/findbyMatch/${this.state.op}`)
        .then((response)=>{
            let stadium=response.data;
            
            this.setState({stadiumOb:stadium});
            console.log(this.state.stadiumOb);
            console.log("printing stadiumId");
            this.state.stadiumOb.map((stadium)=>{
                this.setState({stadiumName:stadium.stadiumName});
                this.setState({stadiumCity:stadium.stadiumCity});

                console.log(stadium.stadiumId,stadium.stadiumName,stadium.stadiumCity,
                   stadium.screen);
                   stadium.screen.map((screen1)=>{
                       this.setState({screenName:screen1.screenName});
                       console.log(screen1.screenId,screen1.screenName)
                       screen1.show.map((show1)=>{
                          this.setState({matchName:show1.match.matchName});
                          this.setState({matchHours:show1.match.matchHours});
                          this.setState({showName:show1.showName});
                          this.setState({showDate:show1.showDate});
                          this.setState({showStartTime:show1.showStartTime});
                          this.setState({showEndTime:show1.showEndTime});
                          this.setState({showId:show1.showId});

                           console.log(show1.showName,show1.showDate)
                           console.log(show1.match.matchId)
                           
                       })
                       
                   })
                   

            })
        
            
            
   
         })
    }
    render() {
        return (
            <div>
                <div>
                <table className='table table-bordered table-striped'>
                        <thead className="thead-dark">
                            <tr>
                                
                                <th>StadiumName</th>
                                <th>StadiumCity</th>
                                <th>ScreenName</th>
                                
                                 
                            </tr>


                        </thead>
                        <tbody>
                            {   
                                <tr >
                                    <td>{this.state.stadiumName}</td>
                                    <td>{this.state.stadiumCity}</td>
                                    <td>{this.state.screenName}</td>
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                </tr>
                            }
                        </tbody>
                        

                    </table>
                    </div>
                    <div>
                <table className='table table-bordered table-striped'>
                        <thead className="thead-dark">
                            <tr>
                                
                                <th>MatchName</th>
                                <th>MatchHours</th>
                                <th>ShowId</th>
                                <th>ShowName</th>
                                <th>ShowDate</th>
                                <th>Show StartTime</th>
                                <th>Show EndTime</th>
                                
                                
                                 
                            </tr>


                        </thead>
                        <tbody>
                            {   
                                <tr >
                                    <td>{this.state.matchName}</td>
                                    <td>{this.state.matchHours}</td>
                                    <td>{this.state.showId}</td>
                                    <td>{this.state.showName}</td>
                                    <td>{this.state.showDate}</td>
                                    <td>{this.state.showStartTime}</td>
                                    <td>{this.state.showEndTime}</td>
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                </tr>
                            }
                        </tbody>
                        

                    </table>
                    </div>
            </div>
        );
    }
}

export default ViewMatch;