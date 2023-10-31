import axios from 'axios';
import React, { useEffect, useState  } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Dashboard from './Dashboard';
import { useLocation } from 'react-router-dom';
import { add_interviewRecords } from '../Services/userService';
import {getuserEmail, getUser,Cartlength } from '../Services/AuthService';


const user=getUser();

const useremail=getuserEmail();
export default function CandidateDashboard() {
 const addRecords=add_interviewRecords();
const [lang ,setLang]=useState('');
const navigate =useNavigate();
function handleSelectChange(event) {
    setLang(event.target.value);
  }
  
 function selectLang(params) {
  insertRecords();
    navigate('/interview', { state: { value: lang } });
}  
 
//to get sesion recordsss..








// set candidate session records...
function insertRecords(){
  const currentDateTime = new Date();
  const username =user;
  let count = 0;


  
  const dataToSend = {
    timestamp: currentDateTime.toISOString(),
    useremail:useremail,
    noofinterview:count,
    domain:lang,
  };


     //fetch('http://127.0.0.1:8083/api/users/saveinterviewrecords', {
     


axios.post('https://prep4interview.online/api/users/saveinterviewrecords', dataToSend)
  .then(response => {
    // Handle the API response here
    console.log('API Response:', response.data);
  })
  .catch(error => {
    // Handle any errors that occurred during the request.
    console.error('Error:', error);
  });  

}
  console.log(lang)
  return (
   <><div class="d-flex justify-content-center">
    <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Select Language</label>
    <select className="w-100 mt-2" id="country" name="language"  value={lang} onChange={handleSelectChange}>
                                        <option value="">Select Language</option>
                                        <option value="java">Java </option>
                                        <option value="python">Python</option>
                                      
                                    </select>
   
    <small id="emailHelp" class="form-text text-muted">Keep practicing to imporve your skills...</small>
  </div>
  
  <button onClick={selectLang} class="btn btn-primary mt-2">Start Interview</button>
</form>
         </div>     
   </>
  );
}
