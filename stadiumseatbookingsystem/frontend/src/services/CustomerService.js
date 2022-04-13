import axios from 'axios';

const USER_API_BASE_URL="http://localhost:8000/customer";
class CustomerService{

    
    updateCustomer(customer){
        // return axios.put(USER_API_BASE_URL+'/update',customer,{
        // headers:{
        //     'Content-Type':'application/json'
        // }
        // });

        return axios.put(USER_API_BASE_URL+'/update',customer)
    }


    getCustomerById(custId){
        return axios.get(USER_API_BASE_URL+'/view/'+custId);
    }
    
    getMovies() {
        return axios.get("/tutorials");
      }
}
export default new CustomerService();