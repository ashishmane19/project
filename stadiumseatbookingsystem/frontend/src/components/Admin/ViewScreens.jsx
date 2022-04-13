import React, { Component } from 'react';
import ScreenService from '../../services/ScreenService';

class ViewScreens extends Component {
    constructor(props){
        super(props);
        this.state={
            op:this.props.match.params.id,
            stadiumob:[],
            screenArr:[]
        }
    }
    componentDidMount(){
        console.log("in stadium and screen didiMount");
        ScreenService.getStadiumById(this.state.op).then((response)=>{
            let stadiumob1=response.data;
            this.setState({stadiumob:stadiumob1,
                           screenArr:stadiumob1.screen})
            console.log(this.state.stadiumob)
            console.log(this.state.screenArr)
   
         })

    }
    addshow=(stadiumId,screenId)=>{
        console.log("in add show method of viewscreen component")
        window.location.replace(`/Admin/Addshow/${stadiumId}/${screenId}`)
    }
    render() {
        return (
            <div className='container'>
                <h1> Screen Details</h1>
                <hr/>
                <div>
                    <table className='table table-bordered table-striped'>
                        <thead className="thead-dark">
                            <tr>
                                <th>StadiumId</th>
                                <th>StadiumName</th>
                                <th>stadiumCity</th>
                                 
                            </tr>


                        </thead>
                        <tbody>
                            {
                                <tr >
                                    <td>{this.state.stadiumob.stadiumId}</td>
                                    <td>{this.state.stadiumob.stadiumName}</td>
                                    <td>{this.state.stadiumob.stadiumCity}</td>
                                    
                                    
                                    
                                    
                                </tr>
                            }
                        </tbody>
                        

                    </table>
                </div>
                <div>
                <table className='table table-bordered table-striped'>
                        <thead className="thead-dark">
                            <tr>
                                <th>ScreenId</th>
                                <th>ScreenName</th>
                                <th>rows</th>
                                <th>columns</th>
                                 
                            </tr>


                        </thead>
                        <tbody>
                            {
                                this.state.screenArr.map((screen)=>
                                <tr key={screen.screenId}>
                                    <td>{screen.screenId}</td>
                                    <td>{screen.screenName}</td>
                                    <td>{screen.rows}</td>
                                    <td>{screen.columns}</td>
                                    <td> <button className="btn btn-danger" onClick={()=>this.addshow(this.state.stadiumob.stadiumId,screen.screenId)}>add show</button></td>

                                </tr>)
                                
                                    
                                    
                                    
                                    
                                    
                            
                            }
                        </tbody>
                        

                    </table>
                </div>
            </div>
        );
    }
}

export default ViewScreens;