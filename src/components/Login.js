import axios from 'axios';
import React ,{ useEffect, useState  }from 'react';
import { Link,useNavigate  } from 'react-router-dom';
import { setUserSession } from '../Services/AuthService';

export default function Login(props) {
  
  
  const [loading, setLoading] = useState(false);
 const navigate=useNavigate();
 
  const [error, setError] = useState(null);

  const [user ,setUser]  = useState({

    email:'',
    password:''
  });
  useEffect(() => {
    //Runs on every render
    
  });
  //videoRef.current.srcObject = null;
 const handleOnchange=(event)=>{
  const { name, value } = event.target;
  setUser((user) => ({ ...user, [name]: value }));

 }
 const handleSubmit = (e) => {
  setError(null);
  e.preventDefault();
  const data = new FormData();
  data.append('email',user.email);
  data.append('password',user.password);
 console.log("dad",data);

  axios.post('https://prep4interview.online/api/users/authenticate', { email: user.email, password: user.password },{
   
  } 
  
  )
.then(response => {
  console.log('Form data submitted successfully!',response);
  console.log('dgf',response.data.id);
  console.log('Token',response.data.email);
  
  setUserSession(response.data.token, response.data.name,response.data.id,response.data.email);
  navigate("/userdashboard");window.location.reload(); 
  
  
})
.catch(error => {
  setLoading(false);
  if (error.response.status === 401) setError("Email Id or Password is incorrect. Please check your Email and password and try again.");
  else if(error.response.status === 500) setError("We're sorry, but the user account you are trying to access does not exist. ");
  else setError("Something went wrong. Please try again later.");
  console.error('Error occurred while submitting form data:', error);
});


 }

 



  return (
   <>
   {/* <div class="checkout_area">
        <div class="container">
            <div class="row">

   <div class="col-12 col-md-6 ">
                    <div class="checkout_details_area clearfix ml-30">
<p></p>
	<br/>
<br/><br/><br/>
                        <div class="cart-page-heading  ">
                            <h5>Customer Login Form</h5>
                        </div>
                        {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
                        <form onSubmit={handleSubmit}>
                            <div class="row ">
                                <div class="col-md-6 mb-3">
                                    <label for="first_name">User Name or Email <span>*</span></label>
                                    <input type="text" class="form-control" name="email" id="email" onChange={handleOnchange} value={user.email} required />
                                    <label for="last_name">Password<span>*</span></label>
                                    <input type="password" class="form-control" name="password" onChange={handleOnchange} id="password" value={user.password} required />
                               
                                </div>
                                <div class="col-md-6 mb-3">
                              </div>
                               
                            </div>
                            
                        <input type="submit" className="btn btn-secondary"  value="Login"/>
                        
                        </form>
                        <br></br>
                        <Link to="/registrationform" className="btn btn-secondary">Create an Account</Link>  
        
                    </div>
                    <br/><br/>
                                   </div>

                                   <div class="col-12 col-md-6 col-lg-5 ml-lg-auto">
                    <div class="order-details-confirmation">

                      

                        

                 
                    </div>
                </div>
                       </div></div></div>          */}



<section className="py-5">
                <div className="container px-5">
                  
                    <div className="bg-light rounded-4 py-5 px-4 px-md-5">
                        <div className="text-center mb-5">
                            <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 mb-3"><i class="bi bi-envelope"></i></div>
                            <h1 className="fw-bolder">Candidate Login</h1>
                            <div className="badge bg-gradient-primary-to-secondary text-white mb-4"><div className="text-uppercase">Practice  &middot; Perfect &middot; Perform</div></div>
                                 </div>
                        <div className="row gx-5 justify-content-center">
                            <div className="col-lg-8 col-xl-6">
                       <form onSubmit={handleSubmit} id="contactForm" data-sb-form-api-token="API_TOKEN">
                                  
                       {error && <><small  style={{ color: 'red' }}>{error}</small><br /></>}
                                      
                                    <div className="form-floating mb-3">
                                        <input className="form-control"name="email"  onChange={handleOnchange} value={user.email} id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email"  required/>
                                        <label for="email">Email address</label>
                                         {/* <div  data-sb-feedback="email:required">An email is required.</div>
                                        <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div> */}
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="password" onChange={handleOnchange} value={user.password} name="password" type="password" placeholder="name@example.com" data-sb-validations="required,password"  required/>
                                        <label for="password">Password</label>
                                     </div>
                                   
                                   
                                  
                                    <div className="d-none" id="submitSuccessMessage">
                                        <div className="text-center mb-3">
                                            <div className="fw-bolder">Form submission successful!</div>
                                            To activate this form, sign up at
                                            <br />
                                            <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                        </div>
                                    </div>
                                  
                                    <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
                                  
                                    <div className="d-grid">
                                    <input type="submit" className="btn btn-primary"  id="submitButton" value="Login"/>
                                     </div>
                                     
                                    
                                </form>
                                <br></br>
                         </div>
                                
                        </div>
                    </div>
                </div>
            </section>
   </>
  );
}
