import React, { Component } from 'react';
import ScreenService from '../../services/ScreenService';


class ScreenDashBoard extends Component {
    constructor(props){
        super(props);
        this.state={
            
            screenArr:[],
            
        }
    }
   
    componentDidMount(){
        console.log("componentdidmount of screen ")
        ScreenService.getAllScreens().then((response)=>{
            this.setState({screenArr:response.data})
            console.log(this.state.screenArr)
   
         })
    }
    viewDetails=(screenId)=>{
        console.log("in add screen")
        window.location.replace(`/Admin/ViewScreens/${screenId}`)
    }

    
    render() {
        return (
            <div>
            
            
               <h1> screens </h1> 
               <div className='row'>
                <table striped bordered hover variant="dark">
                <thead>
                       <tr>
                           <th>Screen Id</th>
                           <th> Screen Name</th>
                           <th>Rows</th>
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
                               
                               <td>
                                    <button className="btn btn-success" onClick={()=>this.editScreen(screen.screenId)}>edit</button> </td>
                                   <td> <button className="btn btn-danger" onClick={()=>this.viewDetails(screen.screenId)}>view screen details</button></td>
                                   
                                
                           </tr>)
                       }
                   </tbody>
                    </table>
                </div>
               
            </div>
        );
    }
}

export default ScreenDashBoard;