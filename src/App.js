import logo from './logo.svg';
import './App.css';
import { HashRouter, Link, Route, Routes} from 'react-router-dom';
import Navbar from './Navigate';
import MediaCard from './RecipeReviewCard';
import Home from './Home'
import React, { useState } from "react";
import AboutUs from './AboutUs';
import Home2 from './Home2';
import Login2 from './Login2';
import Register2 from './Register2'
import Logout from './Logout'
import DeleteAccount from './DeleteAccount';
// import Book from "./book";
// import Main from "./main";
import Page from "./Page";
import Millie from "./Millie";
// import Dome from './H';
// import Login from './Login';
// import Register from './Register';
// import Log from "./LL";
// import Pog from "./Pogin";
// import Signup from "./Signup";
// import App2 from './App2';
import Del from './DeleteAccount';
import Drop from './Dropdown';
// import Your from './Your';
import DelForm from './DelForm';
import De from './Deleted';
    
     

export default _ => {
  const [page, setPage] = useState(0);

  return (
    <div>
            
        <HashRouter>
        <Navbar />
        {/* <DeleteAccount/> */}
        {/* <Your /> */}
       
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/MediaCard" element={<MediaCard />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/Page" element={<Page />} /> 
            <Route path="/" element ={<Register2 />} />
          <Route path="/register" element ={<Register2 />} />
          <Route path="/login" element ={<Login2 />} />
          <Route path="/home" element ={<Home2 />} />
          <Route path="/logout" element={<Logout />}/>
          <Route path='/del' element={<Del/>}/>
          {/* <Route path='/' */}
          <Route path='/drop' element={<Drop />}/>
          <Route path='/delform'element={<DelForm />}/>
          <Route path='/de' element={<De/>}/>

            
           
          </Routes>
          <Millie />
        </HashRouter>
      
      {/* {page === 0 ? <Main setPage={setPage} /> : null}
      {page === 1 ? <Book setPage={setPage} /> : null} */}

    </div>
  );
};
    


