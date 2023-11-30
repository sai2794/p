import {Link} from "react-router-dom";
import Button from '@mui/material/Button';
import './Navigate.css';
function Navbar(){
  return(
    <div class="navbar bg-primary px-2">
      <Link to="/" class="navbar-brand" >EazyEats</Link>
            <div class="nav ms-auto">
            <Link class="nav-link" to='/Home'>
      <Button class="button" variant="contained" size="small" > 
        Home
      </Button> </Link>
                {/* <Link class="nav-link" to="/Home">Home</Link> */}
                <Link class="nav-link" to='/MediaCard'>
      <Button class="button" variant="contained" size="small" > 
        Menu
      </Button> </Link>
                {/* <Link class="nav-link" to="/MediaCard">Blog</Link> */}

               <Link class="nav-link" to='/AboutUs'>
      <Button class="button" variant="contained" size="small" > 
        AboutUs
      </Button> </Link>
      <Link class="nav-link" to='/login'>
      <Button class="button" variant="contained" size="small" > 
        Login
      </Button> </Link>
      <Link class="nav-link" to='/page'>
      <Button class="button" variant="contained" size="small" > 
        Book Now
      </Button> </Link>
      <Link class="nav-link" to='/drop'>
      <Button class="button" variant="contained" size="small" > 
        More
      </Button> </Link>
      
            </div>
            

    </div>
  );
}
export default Navbar;