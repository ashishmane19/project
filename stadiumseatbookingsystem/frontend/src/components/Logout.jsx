import React, { Component } from 'react';

import LogoutService from '../services/LogoutService';


// logout=()=> {

//     // let user = { username: sessionStorage.getitem("name"), password: sessionStorage.getitem("password") , role: sessionStorage.getitem("role")};
//     sessionStorage.clear();
//     console.log("User Session Clear");
//     // window.location.href = '/Login';
//     LogoutService.logout()


//         .then(response => {

//           console.log('user loggedOut successfully', response.data);

//           this.props.history.push('/Login');
//         });
// }


class Logout extends Component {

    componentWillMount() {

        // window.location.href = '/Login';
        LogoutService.logout()


            .then(response => {
                sessionStorage.clear();
                console.log("User Session Clear");

                console.log('user loggedOut successfully', response.data);

                this.props.history.push('/Login');
            });
    }

    render() {
        return null
    }
}


export default Logout;