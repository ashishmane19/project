import axios from 'axios';

const USER_API_BASE_URL="http://localhost:8000/user";
class UserSevice{

    
    createUser(user){
        return axios.post(USER_API_BASE_URL+'/adduser',user);
    }
    getByrole(username,password){
        return axios.get(USER_API_BASE_URL+'/'+username+'/'+password);
    }
    
}
export default new UserSevice()