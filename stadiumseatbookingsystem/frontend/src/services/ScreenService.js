import axios from 'axios';

const USER_API_BASE_URL="http://localhost:8000/screens";

class ScreenService {

    screenAdd(screen,id){
        return axios.post(USER_API_BASE_URL+'/add',screen,id ,{
        headers:{
            'Content-Type':'application/json'
        }
        });
    }

    getAllScreens(){
        return axios.get(USER_API_BASE_URL+'/findall')
    }
    getStadiumById(screenId){
        return axios.get(USER_API_BASE_URL+'/stadium/'+screenId)
    }

}

export default new ScreenService();