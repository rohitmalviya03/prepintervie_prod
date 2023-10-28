import { signUp } from '../Services/userService';
import React, { useEffect, useState  } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function CandidateReg(props) {
    const initialFormState = {
        firstName: '',
        lastName:'',
        country: '',
        email: '',
        password: '',
        phoneNumber:'',
        education:''
      };
      const location = useLocation();
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState(null);

      const [group, setGroup] = useState(initialFormState);
      const navigate = useNavigate();
      const { id } = useParams();
    
   
      const handleChange = (event) => {
        const { name, value } = event.target
    
        setGroup({ ...group, [name]: value })
      }
      const handleSubmit = async (event) => {
        event.preventDefault();
    console.log(group);
    signUp(group).then(res=>{
        console.log("data send to APIxx`");
        alert("Candidate registration Succesfully");
        navigate('/login');
    } ).catch(error => {
        setLoading(false);
        if (error.response.status === 401) setError("Invalid Email");
        else if(error.response.status === 500) setError("The email address you entered is already associated with an account. Please log in or use a different email address.");
        else setError("Something went wrong. Please try again later.");
        console.error('Error occurred while submitting form data:', error);
      });
       console.log(props.lang);
      }
    return (
    <>  
   {/* <div>{location.state && location.state.value}</div>

    <div className="checkout_area ">
    <div>{props.val}</div>
        <div className="container">
            <div className="row">

                <div className="col-12 col-md-6">
                    <div className="checkout_details_area  clearfix">

                        <div className="cart-page-heading mb-30">
                   
                        <span></span>
                               <br />
                        <br /><br/>
                          <h5>Candidate Registration Form</h5>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="row">
                              
                                <div className="col-md-6 mb-3">
                                    <label for="first_name">First Name <span>*</span></label>
                                    <input type="text" className="form-control" name="firstName" id="firstName" value={group.firstName || ''}
                   onChange={handleChange} required />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label for="last_name">Last Name <span>*</span></label>
                                    <input type="text" className="form-control"  name="lastName" id="last_name"  value={group.lastName || ''}
                   onChange={handleChange} required />
                                </div>
                                <div className="col-12 mb-3">
                                    <label for="Education">Education<span>*</span></label>
                                    <input type="text" className="form-control"  name="education" id="education"  value={group.education || ''}
                   onChange={handleChange} required />
                                </div>
                                <div className="col-12 mb-3">
                                    <label for="country">Country <span>*</span></label>
                                    <select className="w-100" id="country" name="country"  onChange={(event) => this.submit(event.target.value)}>
                                        <option value="usa">United States</option>
                                        <option value="uk">United Kingdom</option>
                                        <option value="ger">Germany</option>
                                        <option value="fra">France</option>
                                        <option value="ind">India</option>
                                        <option value="aus">Australia</option>
                                        <option value="bra">Brazil</option>
                                        <option value="cana">Canada</option>
                                    </select>
                                </div>
                                
                               
                               
                                
                                <div className="col-12 mb-3">
                                    <label for="phone_number">Phone No <span>*</span></label>
                                    <input type="number" name="phoneNumber" className="form-control" id="phoneNumber"  value={group.phoneNumber || ''}
                   onChange={handleChange}  />
                                </div>
                                <div className="col-12 mb-4">
                                    <label for="email_address">Email Address <span>*</span></label>
                                    <input type="email" name="email" className="form-control" id="email" value={group.email || ''}
                   onChange={handleChange}  />
                                </div>
 <div className="col-12 mb-4">
                                    <label for="email_address">Password<span>*</span></label>
                                    <input type="password" name="password" className="form-control" id="password" value={group.password || ''}
                   onChange={handleChange} />
                                </div>
                               
                            </div>
                <br/>
                              <input type="submit" className="btn btn-primary"  value="Submit"/>
                 
                        </form>
                    </div>
                </div>

                <div class="col-12 col-md-6 col-lg-5 ml-lg-auto">
                    <div class="order-details-confirmation">

    
                    </div>
                </div>
            </div>
        </div>
    </div>
     */}

<section className="py-5">
                <div className="container px-5">
                  
                    <div className="bg-light rounded-4 py-5 px-4 px-md-5">
                        <div className="text-center mb-5">
                            <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 mb-3"><i class="bi bi-envelope"></i></div>
                            <h1 className="fw-bolder">Candidate Registration</h1>
                            <div className="badge bg-gradient-primary-to-secondary text-white mb-4"><div className="text-uppercase">Practice  &middot; Perfect &middot; Perform</div></div>
                                 </div>
                        <div className="row gx-5 justify-content-center">
                            <div className="col-lg-8 col-xl-6">
                       <form onSubmit={handleSubmit} id="contactForm" data-sb-form-api-token="API_TOKEN">
                                  
                       {error && <><small  style={{ color: 'red' }}>{error}</small><br /></>}
                                       
                                    <div className="form-floating mb-3">
                                        <input className="form-control" name="firstName" id="firstName" value={group.firstName || ''}
                   onChange={handleChange} required 
                    type="text" placeholder="name@example.com" data-sb-validations="required,email" />
                                        <label for="email">First Name</label>
                                         {/* <div  data-sb-feedback="email:required">An email is required.</div>
                                        <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div> */}
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input className="form-control" name="lastName" id="lastName" value={group.lastName || ''}
                   onChange={handleChange} required 
                    type="text" placeholder="name@example.com" data-sb-validations="required,email" />
                                        <label for="lastName">Last Name</label>
                                         {/* <div  data-sb-feedback="email:required">An email is required.</div>
                                        <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div> */}
                                    </div>          
                                    <div className="form-floating mb-3">
                                        <input className="form-control" name="education" id="education" value={group.education || ''}
                   onChange={handleChange} required 
                    type="text" placeholder="name@example.com" data-sb-validations="required,email" />
                                        <label for="education">Education</label>
                                         
                                    </div>     
                                    <div className="form-floating mb-3">
                                    <select className="form-control" id="country" name="country"  onChange={(event) => this.submit(event.target.value)}>
                                    <option value="">Country</option>
                                      
                                        <option value="usa">United States</option>
                                        <option value="uk">United Kingdom</option>
                                        <option value="ger">Germany</option>
                                        <option value="fra">France</option>
                                        <option value="ind">India</option>
                                        <option value="aus">Australia</option>
                                        <option value="bra">Brazil</option>
                                        <option value="cana">Canada</option>
                                    </select>

                                             <label for="education">Country</label>
                                         
                                    </div>  
                                    <div className="form-floating mb-3">
                                        <input className="form-control" name="phoneNumber" id="phoneNumber" value={group.phoneNumber || ''}
                   onChange={handleChange} required 
                    type="text" placeholder="name@example.com" data-sb-validations="required,phoneNumber" />
                                        <label for="phoneNumber">Contact No</label>
                                         
                                    </div>  
                                    <div className="form-floating mb-3">
                                        <input className="form-control" name="email" id="email" value={group.email || ''}
                   onChange={handleChange} required 
                    type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                                        <label for="email">Email Address</label>
                                         
                                    </div>  
                                    <div className="form-floating mb-3">
                                        <input className="form-control" name="password" id="password" value={group.password || ''}
                   onChange={handleChange} required 
                    type="password" placeholder="name@example.com" data-sb-validations="required,password" />
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
                                    <input type="submit" className="btn btn-primary"  id="submitButton" value="Submit"/>
                                     </div>
                                </form></div>
                        </div>
                    </div>
                </div>
            </section>
    </>
  );
}
