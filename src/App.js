import logo from './logo.svg';
import './App.css';
import Hader from './Page/Hader';


import {Routes,Route,Router} from 'react-router-dom';
import HomePage from './HomePage';
import SearchTicket from './SearchTicket/SearchTicket';
import Ticket from './Component/Ticket';
import TicketShow from './SearchTicket/TicketShow';
import HandleNavbar from './SearchTicket/NavItem';
import TicketReservation from './SearchTicket/TicketReservation';
import TicketReview from './SearchTicket/Ticketreview';
import PaymentMode from './SearchTicket/Payment';
import TicketPayment from './SearchTicket/TicketPayment';
import Finalticket from './SearchTicket/Finalticket';
function App() {
  return (
    <div className="App">
       {/* <Router> */}
          <Routes>
             <Route path='/' element={<HomePage/>}/>
             <Route path='/searchticket' element={<SearchTicket/>}/>
             <Route path='/ticket'element={<TicketShow/>}/>
             <Route path ="/nav" element={<HandleNavbar/>}/>
             <Route path='/ticketreservation' element={<TicketReservation/>}/>
            <Route path='/ticketreview' element={<TicketReview/>}/>
            <Route path='/payment' element={<TicketPayment/>}/>
            <Route path='/finalticket' element={<Finalticket/>}/>
          </Routes>
       {/* </Router> */}
       

      
    </div>
  );
}

export default App;
