import React from "react";
import Footer from './Component/Footer';
import Slider from './Component/Silder';
import Hotel from './Component/Hotel';
import Ticket from './Component/Ticket';
import Hader from "./Page/Hader";

function HomePage(){
     return(
        <div>
             <Hader/>
         <Slider/>
         <Hotel/>
         <Ticket/>
        <Footer/>
         </div>
     );
}

export default HomePage;