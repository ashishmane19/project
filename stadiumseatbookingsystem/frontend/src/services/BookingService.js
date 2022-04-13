import axios from 'axios';

const USER_API_BASE_URL="http://localhost:8000/booking";

class BookingService{

    
    addBooking(booking,custid,showid){
        return axios.post(USER_API_BASE_URL+'/insert/'+custid+'/'+showid,booking,{
        headers:{
            'Content-Type':'application/json'
        }
        });
    }
   
    
    
}
export default new BookingService();