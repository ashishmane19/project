import axios from 'axios';

const USER_API_BASE_URL="http://localhost:8000/";
class LoginService{
    login(user){
        return axios.post(USER_API_BASE_URL+'login/'+user.username+'/'+user.password,user,{
            headers:{
                'Content-Type':'application/json'
            }
        });
    }

}
export default new LoginService();