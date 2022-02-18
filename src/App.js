
import './App.css';
import Navbar from './components/Navbar';
import Inro from './components/Inro';
import Portfolio from './components/Portfolio';
import Slider from './components/Slider';
import Apc from './components/Apc';
import Collab from './components/Collab';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Testimonials from './components/Testimonials';






function App() {
  return (
    
    
    <>
     
     <Navbar/>


    
    

     
    <Inro/> 

  

    <Portfolio/>
    <br/>
    <br/>
    <br/>
    <br/>
   

    {/* <Testimonials/> */}

    <br/>
    <br/>
    <br/>
    <br/>
    
   
   
     
  
    
     
    
      


    
      <Collab/>

  
      
      
    
      
    {/* <div  style={{display:"flex",justifyItems:"right"}}>
    <Collab/>

    </div> */}
   
  

       

      
      
     


</> 

 
  );
}

export default App;
