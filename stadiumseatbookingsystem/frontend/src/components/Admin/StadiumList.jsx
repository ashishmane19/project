import React, { Component } from 'react';
import StadiumService from '../../services/StadiumService';
import  AdminDashBoard from '../AdminDashBoard';

class StadiumList extends Component {
    constructor(props){
        super(props);
        this.state={
            stadiumArr:[]
        }
    }
    componentDidMount(){
        console.log("in Stadium componentDidMount");
        StadiumService.getAllStadiums().then((response)=>{
            this.setState({stadiumArr:response.data})
            console.log(this.state.stadiumArr)
   
         })
      }
      editStadium=(stadiumId)=>{
        console.log("in stadium edit ")
        this.props.history.push(`/Admin/EditStadium/${stadiumId}`)
    }

    deleteStadium=(stadiumId)=>{
        console.log("in delete match");
        StadiumService.deleteStadium(stadiumId).then((response)=>{
            this.props.history.push('/StadiumList')
            console.log("deleted succesfully")
        })
    }
    addScreen=(stadiumId)=>{
        console.log("in add stadium")
        this.props.history.push(`/Admin/AddScreen/${stadiumId}`)
    }

    render() {
        return (
            
            <div>
                <div><AdminDashBoard/></div>
                <h2 className="text-center">Stadium List</h2>
                <div className='row'>
                <table striped bordered hover variant="dark">
                <thead>
                       <tr>
                           <th>Stadium Id</th>
                           <th> Stadium Name</th>
                           <th>Stadium City</th>
                           <th> Manager Name</th>
                           <th> Manager City</th>

                       </tr>

                   </thead>
                   <tbody>
                       {
                           this.state.stadiumArr.map((stadium)=>
                           <tr key={stadium.stadiumId}>
                               <td>{stadium.stadiumId}</td>
                               <td>{stadium.stadiumName}</td>
                               <td>{stadium.stadiumCity}</td>
                               <td>{stadium.managerName}</td>
                               <td>{stadium.managerContact}</td>
                               <td>
                                    <button className="btn btn-success" onClick={()=>this.editStadium(stadium.stadiumId)}>edit</button> </td>
                                    <td>  <button className="btn btn-danger" onClick={()=>this.deleteStadium(stadium.stadiumId)}>delete</button></td>
                                    <td> <button className="btn btn-success" onClick={()=>this.addScreen(stadium.stadiumId)}>Add Screen</button>
                                </td>
                           </tr>)
                       }
                   </tbody>
                    </table>
                </div>
                
            </div>
        );
    }
}

export default StadiumList;