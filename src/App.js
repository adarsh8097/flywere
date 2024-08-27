import './App.css';
import {Routes,Route, Router} from 'react-router-dom';
import HomePage from './HomePage';
import SearchTicket from './SearchTicket/SearchTicket';
import TicketShow from './SearchTicket/TicketShow';
import HandleNavbar from './SearchTicket/NavItem';
import TicketReservation from './SearchTicket/TicketReservation';
import TicketReview from './SearchTicket/Ticketreview';
import TicketPayment from './SearchTicket/TicketPayment';
import Finalticket from './SearchTicket/Finalticket';
import  ModalSerachItem  from './Page/Airpots';
import { SingleCard } from './SearchTicket/SingleTicket';
function App() {
  return (
    <div className="App">
       {/* <Router> */}
          <Routes>
             <Route path='/' element={<HomePage/>}/>
             <Route path='/searchticket' element={<SearchTicket/>}/>
             <Route path='/ticket/:id'element={<TicketShow/>}/>
             <Route path ="/nav" element={<HandleNavbar/>}/>
             <Route path='/ticketreservation' element={<TicketReservation/>}/>
            <Route path='/ticketreview' element={<TicketReview/>}/>
            <Route path='/payment' element={<TicketPayment/>}/>
            <Route path='/finalticket' element={<Finalticket/>}/>
            <Route path='/modal' element={<ModalSerachItem/>}/>
            {/* <Route path='/searchticket/:id' element={<SingleCard/>}/> */}
          </Routes>
       {/* </Router> */}
       

      
    </div>
  );
}

export default App;
