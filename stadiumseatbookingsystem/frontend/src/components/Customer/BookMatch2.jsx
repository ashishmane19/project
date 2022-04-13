import React, { Component } from 'react';
import {useState,useEffect} from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import MatchService from '../../services/MatchService';


function  BookMatch() {

    var [prodArr, setProdArr] = useState("");

            
    useEffect(() => {

        var mid=sessionStorage.getItem("mid");
        console.log("Mid : "+mid+"  ProdArr : "+prodArr);

        MatchService.getByMatchId(mid).then((response) => {
            console.log("Match Book1 : "+response.data)
            setProdArr(response.data)
            console.log("Match Book : "+prodArr)

        })
        return () => {

        };
    }, []);

            

    

 

    
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



                            </tr>

                        </thead>
                        {/* <tbody>
                            {
                                prodArr.map((match) =>
                                    <tr key={match.matchId}>
                                        <td>{match.matchId}</td>
                                        <td>{match.matchName}</td>
                                        <td>{match.matchGenre}</td>
                                        <td>{match.matchHours}</td>
                                        <td>{match.matchLanguage}</td>
                                        <td>{match.matchDescription}</td>
                                        <td>{match.matchRating}</td>
                                        <td>
                                    <button className="btn btn-success" onClick={()=>this.editStadium(stadium.stadiumId)}>edit</button> </td>
                                    <td>  <button className="btn btn-danger" onClick={()=>this.deleteStadium(stadium.stadiumId)}>delete</button></td>
                                    <td> <button className="btn btn-success" onClick={()=>this.addScreen(stadium.stadiumId)}>Add Screen</button>
                                </td>
                                    </tr>)
                            }
                        </tbody> */}

                        <tbody>{
                            <tr > <td> Hello </td> <td>{prodArr.matchId}</td></tr>
                         } </tbody>
                    </table>
                </div>

            </div>
        );
    }


export default BookMatch;