import axios from 'axios';

const USER_API_BASE_URL="http://localhost:8000/stadium";

class StadiumService{

    
    stadiumAdd(stadium){
        return axios.post(USER_API_BASE_URL+'/insert',stadium,{
        headers:{
            'Content-Type':'application/json'
        }
        });
    }
    getAllStadiums(){
        return axios.get(USER_API_BASE_URL+'/all')
    }


    getStadiumByMatchId(id){
        return axios.get(USER_API_BASE_URL+'/findbyMatch/'+id)
    }

    getByStadiumId(id){
        return axios.get(USER_API_BASE_URL+'/find/'+id)
    }
    editStadium(stadium){
        return axios.put(USER_API_BASE_URL+'/update',stadium)
    }
    deleteStadium(stadiumId){
        return axios.delete(USER_API_BASE_URL+'/delete/'+stadiumId)
    }

    
    
}
export default new StadiumService();