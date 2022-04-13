import axios from 'axios';

const USER_API_BASE_URL="http://localhost:8000/";
class LogoutService{
    logout(){
        return axios.post(USER_API_BASE_URL+'/Logout');
    }

}
export default new LogoutService();