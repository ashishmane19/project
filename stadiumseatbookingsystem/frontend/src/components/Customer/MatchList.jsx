// import React, { Component } from "react";
// import MatchService from '../../services/MatchService';
// import { Link } from "react-router-dom";

// class TutorialsList extends Component {
//     constructor(props) {
//       super(props);
//       this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
//       this.retrieveMatchs = this.retrieveMatchs.bind(this);
//       this.refreshList = this.refreshList.bind(this);
//     //   this.searchTitle = this.searchTitle.bind(this);
//       this.state = {
//         matchs: [],
//         match_id: -1,
//         match_date: new Date().toLocaleString(),
//         match_description: "",
//         match_genre: "",
//         match_hours: "",
//         match_language: "",
//         match_name: "",
//         match_rating: "",
//         show_show_id: -1
//       };
//     }

//     componentDidMount() {
//         this.retrieveMatchs();
//       }

//     onChangeSearchTitle(e) {
//         const searchTitle = e.target.value;
//         this.setState({
//           searchTitle: searchTitle
//         });
//     }  

//     retrieveMatchs() {
//         MatchService.getMatchs()
//           .then(response => {
//             this.setState({
//               matchs: response.data
//             });
//             console.log(response.data);
//           })
//           .catch(e => {
//             console.log(e);
//           });
//       }

//       refreshList() {
//         this.retrieveMatchs();
//         this.setState({
//             match_id: -1,
//             match_date: new Date().toLocaleString(),
//             match_description: "",
//             match_genre: "",
//             match_hours: "",
//             match_language: "",
//             match_name: "",
//             match_rating: "",
//             show_show_id: -1
//         });
//       }

//     //   searchTitle() {
//     //     MatchService.findByTitle(this.state.searchTitle)
//     //       .then(response => {
//     //         this.setState({
//     //           tutorials: response.data
//     //         });
//     //         console.log(response.data);
//     //       })
//     //       .catch(e => {
//     //         console.log(e);
//     //       });
//     //   }



//     render() {
//         const { searchTitle, tutorials, currentTutorial, currentIndex } = this.state;
//         return (
//           <div className="list row">
//             <div className="col-md-8">
//               <div className="input-group mb-3">
//                 <input
//                   type="text"
//                   className="form-control"
//                   placeholder="Search by title"
//                   value={searchTitle}
//                   onChange={this.onChangeSearchTitle}
//                 />
//                 <div className="input-group-append">
//                   <button
//                     className="btn btn-outline-secondary"
//                     type="button"
//                     onClick={this.searchTitle}
//                   >
//                     Search
//                   </button>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-6">
//               <h4>Matchs List</h4>
//               <ul className="list-group">
//                 {tutorials &&
//                   tutorials.map((tutorial, index) => (
//                     <li
//                       className={
//                         "list-group-item " +
//                         (index === currentIndex ? "active" : "")
//                       }
//                       onClick={() => this.setActiveTutorial(tutorial, index)}
//                       key={index}
//                     >
//                       {tutorial.title}
//                     </li>
//                   ))}
//               </ul>
//               <button
//                 className="m-3 btn btn-sm btn-danger"
//                 onClick={this.removeAllTutorials}
//               >
//                 Remove All
//               </button>
//             </div>
//             <div className="col-md-6">
//               {currentTutorial ? (
//                 <div>
//                   <h4>Tutorial</h4>
//                   <div>
//                     <label>
//                       <strong>Title:</strong>
//                     </label>{" "}
//                     {currentTutorial.title}
//                   </div>
//                   <div>
//                     <label>
//                       <strong>Description:</strong>
//                     </label>{" "}
//                     {currentTutorial.description}
//                   </div>
//                   <div>
//                     <label>
//                       <strong>Status:</strong>
//                     </label>{" "}
//                     {currentTutorial.published ? "Published" : "Pending"}
//                   </div>
//                   <Link
//                     to={"/tutorials/" + currentTutorial.id}
//                     className="badge badge-warning"
//                   >
//                     Edit
//                   </Link>
//                 </div>
//               ) : (
//                 <div>
//                   <br />
//                   <p>Please click on a Tutorial...</p>
//                 </div>
//               )}
//             </div>
//           </div>
//         );
//       }
//     }
// }