import Header from "./components/backoffice/sharedBack/Header";
import Home from "./components/backoffice/Home";
import SideNav from "./components/backoffice/sharedBack/SideNav";
import Footer from "./components/backoffice/sharedBack/Footer";
import HeaderFront from "./components/frontoffice/shared/HeaderFront";
import HomeFront from "./components/frontoffice/HomeFront";
import FooterFront from "./components/frontoffice/shared/FooterFront";
import About from "./components/frontoffice/shared/About";
import Contact from "./components/frontoffice/contact/Contact";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "./components/frontoffice/authentification/Login/index"
import Signup from "./components/frontoffice/authentification/Signup/index";
import ForgotPassword from "./components/frontoffice/authentification/ForgotPassword/index";
import PasswordReset from "./components/frontoffice/authentification/PasswordReset/index";
import Signedin from "./components/frontoffice/shared/signedin";
import Captcha from "./components/frontoffice/authentification/Captcha/index";
import HeaderSignedInClient from "./components/frontoffice/shared/HeaderSignedInClient";
import EmailVerify from "./components/frontoffice/authentification/EmailVerify/index";
import  User  from "./components/backoffice/usermanagement/UserList";
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from "./components/frontoffice/authentification/Profile/index";
import { useEffect, useState } from 'react';
import UpdateUser from "./components/frontoffice/update";
import HeaderCoaches from "./components/frontoffice/shared/HeaderCoaches";
 import Coaching from "./components/frontoffice/CoachMangement/Coaching";
 import CoachingCard from "./components/frontoffice/CoachMangement/CoachingCard";
 import Coachings from "./components/frontoffice/CoachMangement/Coachings";
 import SignedinUser from "./components/frontoffice/shared/signedinUser";
 import CoachingsClient from "./components/frontoffice/CoachMangement/CoachingsClient";
 import CoachList from "./components/backoffice/coachmanagement/CoachList";





function App() {

  return (

    <BrowserRouter>
    <div>
     
      <Routes>
           <Route path="/" element={<HomeFront />} />
           <Route path="/about" element={<About/>} />
           <Route path="/contact" element={<Contact/>} />
           <Route path="/signin" element={<Login/>} />
           <Route path="/signup" element={<Signup/>} />
           <Route path="/showdetails/:id" element={<Profile/>} />
           <Route path="/update/:id" element={<UpdateUser/>} />



           <Route path="/signedin" element={<Signedin/>} />
           <Route path="/signedinUser" element={<SignedinUser/>} /> 
           <Route path="/test" element={<HeaderSignedInClient/>} />
           <Route path="/testt" element={<HeaderCoaches/>} />
           <Route path="/user" element={<User/>} />
           <Route path="/CoachList" element={<CoachList/>} /> 



           <Route path="/Coaching" element={<Coaching/>} /> 
           <Route path="/CoachingCard" element={<CoachingCard/>} />
           <Route path="/Coachings" element={<Coachings/>} />
           <Route path="/CoachingsClient" element={<CoachingsClient/>} />



           {/* <Route path="/Captcha" element={<Captcha/>} /> */}
          <Route path="/users/:id/verify/:token" element={<EmailVerify />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
		      <Route path="/password-reset/:id/:token" element={<PasswordReset />} />




        {/* Add more routes for other components */}
      </Routes>
        
    </div>
  </BrowserRouter>

    );
  }






    // <>
    // <HomeFront/>
    // <HeaderFront/>
    // <FooterFront/>
    
    
    // </>

    // <BrowserRouter>
    
    //   <div className="App">
        
    //     <Route exact path="/" component={Home} />
    //     <Route path="/about" component={About} />


    //     </div>
    // </BrowserRouter>
  // <>

  // back office
  //  <Header /> 
  // <Home />
  // <SideNav/>
  //  <Footer/>  

  //  front office 
  //  <HeaderFront/>
  // <HomeFront/>
  // <FooterFront/> 

  //   <HeaderFront/>
  //   <About/>

  // </>
  // );
// }

export default App;
