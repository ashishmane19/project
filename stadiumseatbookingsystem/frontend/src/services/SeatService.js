import axios from 'axios';

const USER_API_BASE_URL="http://localhost:8000/seats";
class SeatService{

    
    bookSeat(seat){
        return axios.put(USER_API_BASE_URL+'/book',seat)
        
    }
    getAllSeats(){
        return axios.get(USER_API_BASE_URL+'/findavailableseats')
    }
   
  
    
}
export default new SeatService();