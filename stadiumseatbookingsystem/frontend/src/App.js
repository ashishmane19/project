
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';

import Navigation from './components/Navigation';
import { BrowserRouter,Route,Switch} from 'react-router-dom';

import Home from './components/Home';
import Registration from './components/Registration';
import Footer from './components/Footer';
import Admin from './components/Admin';
import Addmatch from './components/Admin/Addmatch';
import UpdateCustomer from './components/Customer/UpdateCustomer';
import Customer from './components/Customer/Customer';
import Logout from './components/Logout';
import Matchs from './components/Matchs';
import EditMatch from './components/Admin/EditMatch';
import AddStadium from './components/Admin/AddStadium';
import StadiumList from './components/Admin/StadiumList';
import AddScreen from './components/Admin/AddScreen';
import EditStadium from './components/Admin/EditStadium';
import BookMatch from './components/Customer/BookMatch';
import ViewShow from './components/Customer/ViewShow';
import Booking from './components/Customer/Booking';
import Seat from './components/Customer/Seat';
import ViewBooking from './components/Customer/ViewBooking';

import ScreenDashBoard from './components/Admin/ScreenDashBoard';
import ViewScreens from './components/Admin/ViewScreens';
import Addshow from './components/Admin/Addshow';
import ShowDashBoard from './components/Admin/ShowDashBoard';
import AddShowtoMatch from './components/Admin/AddShowtoMatch';
import ViewMatch from './components/Admin/ViewMatch';

function App() {
  return (
    <div  >
      <h1>Stadium Seat Booking System</h1>
      <Navigation/>
      <BrowserRouter>
         <Switch>
          <Route path="/Home" exact component ={Home}/>
          <Route path="/Login" exact component={Login}/>
          <Route path="/Logout" exact component={Logout}/>
          <Route path="/Registration" exact component={Registration}/>
          <Route path="/Admin" exact component={Admin}/>
          <Route path="/Addmatch" exact component={Addmatch}/>
          <Route path="/Customer" exact component={Customer}/>
          <Route path="/UpdateCustomer" exact component={UpdateCustomer}/>
          <Route path="/Matchs" exact component={Matchs}/>
          <Route path="/Admin/EditMatch/:id" exact component={EditMatch}/>
          <Route path="/Admin/AddStadium" exact component={AddStadium}/>
          <Route path="/StadiumList" exact component={StadiumList}/>
          <Route path="/Admin/EditStadium/:id" exact component={EditStadium}/>

          <Route path="/Admin/AddScreen/:id" exact component={AddScreen}/>
          <Route path="/Admin/ScreenDashBoard" exact component={ScreenDashBoard}/>
          <Route path="/Admin/ViewScreens/:id" exact component={ViewScreens}/>
          <Route path="/Admin/Addshow/:stadiumId/:screenId" exact component={Addshow}/>
          <Route path="/Admin/ShowDashBoard/:screenId" exact component={ShowDashBoard}/>
          <Route path="/Admin/AddShowtoMatch/:showId" exact component={AddShowtoMatch}/>
          <Route path="/Customer/BookMatch/:id" exact component={BookMatch}/>
          <Route path="/Customer/ViewShow/:id" exact component={ViewShow}/>
          <Route path="/Customer/Booking/:cid/:shid" exact component={Booking}/>
          <Route path="/Customer/Seat/:bid" exact component={Seat}/>
          <Route path="/Customer/ViewBooking/:bid" exact component={ViewBooking}/>
          <Route path="/Admin/ViewMatch/:matchId" exact component={ViewMatch}/>
         </Switch>
      </BrowserRouter>
      <Footer/>

     
    </div>
  );
}

export default App;
