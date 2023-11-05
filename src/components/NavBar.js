
import PropTypes from 'prop-types';
import { getUser,Cartlength } from '../Services/AuthService';
import { Link ,useNavigate} from 'react-router-dom';
import React, { Component ,useEffect ,useState} from 'react';
import logo from './logo1.png';
export default function NavBar(props) {
  const navigate=useNavigate();
  const user=getUser();
// const cartLen=Cartlength();
// const [len,setLen]=useState(0);

const [isLogged, setisLogged] = useState(false);
useEffect(() => {
  checkStorage();
  return () => {};
}, [isLogged]   );
function checkStorage() {
  if (user) {
    setisLogged(true);
  } else {
    setisLogged(false);
  }
}

const logout = () => {
  sessionStorage.removeItem("user");
  sessionStorage.removeItem("id");
  sessionStorage.removeItem("usertype");
  setisLogged(false);
  alert("Logout Done Successfully");
  navigate("/");window.location.reload(); 
};
const useretype=sessionStorage.getItem('usertype');
console.log(useretype);  
  return (
   
//       <nav class="navbar navbar-expand-lg navbar-light bg-white py-3">
//       <div class="container px-5">
//     <a className="navbar-brand" href="/">{props.title}</a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//           <Link className="nav-link active" aria-current="page" to="/">Home</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link active" aria-current="page" to="interview">Start Interview</Link>
//         </li>
       
       
        
//       </ul>
      
//     </div> 
//     {!isLogged ? (<>
     
//        <Link className="btn btn-secondary" aria-current="page" to="login">Login</Link>
//        <Link className="btn btn-secondary" aria-current="page" to="registration">Signup</Link>
//        </>
//         ):(<>
//           <Link to="userdashboard" className="nav-link active" aria-current="page"><span className='nav-link m-2'>Welcome {user}  </span></Link>
    
//           <Link className="btn btn-secondary" onClick={logout}>Logout</Link></>
// )}
//   </div>
// </nav> 


<nav class="navbar navbar-expand-lg navbar-light bg-white py-3">
<div class="container px-5">
    <Link className="navbar-brand" to="/"><span class="fw-bolder text-primary">Prep4Interview</span></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
            <li class="nav-item"><Link class="nav-link" to="/">Home</Link></li>
            <li class="nav-item"><a class="nav-link" href="/#aboutus">About Us</a></li>
             {!isLogged ? (<> <li class="nav-item"><Link class="nav-link" to="registration">Sign up</Link></li>
            <li class="nav-item"><Link class="nav-link" to="login">Login</Link></li>
     
            </>
        ):( <> <Link to="userdashboard" className="nav-link" aria-current="page">
         Welcome {user} </Link>
         <Link to="CandidateSessionRecords" className="nav-link" aria-current="page">
        My Sessions </Link>
                <Link className="nav-link" onClick={logout}>Logout</Link></>)} </ul>

    </div>
</div>
</nav>


  );
}

NavBar.propTypes={title : PropTypes.string,
aboutus: PropTypes.string}