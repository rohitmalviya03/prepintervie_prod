
import './App.css';
import Navbar from './components/NavBar';
import Dash from './components/Dashboard';
import Login from './components/Login';
import UserManual from './components/UserManual';
import CandidateDashboard from './components/CandidateDashboard';
import CandidateSessionRecords from './components/candidateSessionRecord';

import {
  BrowserRouter as Router,
  Routes ,
  Route,
  Link
} from "react-router-dom";
import About from './components/About';
import CandidateReg from './components/CandidateReg';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
<Navbar title="PrepIO" aboutus= "About Us"></Navbar>

<div className='container'>

<Routes>
<Route path='/' element={<Home/>} />
<Route path='about' element={<About/>} />
<Route path='interview' element={<Dash/>} />
<Route path='registration' element={<CandidateReg/>} />
<Route path='login' element={<Login/>} />
<Route path='userdashboard' element={<CandidateDashboard/>} />
<Route path='usermanual' element={<UserManual/>} />
<Route path='CandidateSessionRecords' element={<CandidateSessionRecords/>} />

</Routes>
</div>

</Router>
</>
);
}

export default App;
