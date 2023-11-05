import React from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom';
export default function Home() {
  return (<>
   
      <header className="py-5">
  
                <div className="container px-5 pb-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-xxl-5">
                          
                            <div className="text-center text-xxl-start">
                                <div className="badge bg-gradient-primary-to-secondary text-white mb-4"><div className="text-uppercase">Practice  &middot; Perfect &middot; Perform</div></div>
                                <div className="fs-3 fw-light text-muted">Your ticket to coding interview success</div>
                                <h1 className="display-3 fw-bolder mb-5"><span className="text-gradient d-inline">The ultimate coding interview prep experience</span></h1>
                                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">

                              
                                      </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </header> 








            <section className="py-5 " id="aboutus">
        <div className="container">
          <div className="row">
            <div className="col-lg">
              <h2 className='text-primary'>About Us</h2>
              <br></br>
              <p className='text-muted'>
                At Prep4interview, our mission is to empower individuals to succeed in their coding interviews. We believe that preparation and practice are the keys to unlocking your full potential.
              </p>
              <p className='text-muted'>
                Our dedicated team of experts and developers is committed to providing you with the best tools and resources to excel in your interviews. We understand the challenges you face, and we are here to support you every step of the way.
              </p>
              <p className='text-muted'>
                Join us on this journey, and let's work together to help you achieve your career goals.
              </p>
            </div>
            
          </div>
        </div>
      </section>
      <section class="py-5 border-bottom" id="features">
            <div class="container ">
                <div class="row gx-5">
                    <div class="col-lg-4 mb-5 mb-lg-0">
                       
                        <h2 class="h4 fw-bolder text-primary   ">✅ Mock Interviews</h2>

                         
                        <p>Practice your interview skills with real-world interview scenarios. Our platform offers a simulated interview environment that closely resembles actual tech interviews, giving you the confidence to perform at your best..</p>
                        
                    </div>
                    <div class="col-lg-4 mb-5 mb-lg-0">
                        
                        <h2 class="h4 fw-bolder text-primary">✅ Self-Assessment </h2>
                        <p>Practice your interview skills and have your interviews recorded for later review. This feature allows you to evaluate your performance objectively and identify areas where you can enhance your responses.</p>
                        
                    </div>
                    <div class="col-lg-4">
                      
                        <h2 class="h4 fw-bolder text-primary">✅ Resource Library</h2>
                        <p>Our resource library is curated to meet the specific needs of candidates preparing for coding interviews in the tech industry.
Benefit from the collective knowledge of experienced professionals who have successfully navigated coding interviews at top tech companies.</p>
                        
                    </div>
                </div>
            </div>
        </section>
      <br></br>
     
  <br></br>



  <section class="bg-light py-5" id="contactus">
            <div class="container px-5 my-5 px-5">
                <div class="text-center mb-5">
                    <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-envelope"></i></div>
                    <h2 class="fw-bolder">Get in touch</h2>
                    <p class="lead mb-0">We'd love to hear from you</p>
                </div>
                <div class="row gx-5 justify-content-center">
                    <div class="col-lg-6">
                    
                        <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                     
                            <div class="form-floating mb-3">
                                <input class="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                                <label for="name">Full name</label>
                                <div class="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                            </div>
                
                            <div class="form-floating mb-3">
                                <input class="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                                <label for="email">Email address</label>
                                <div class="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                <div class="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                            </div>
                          
                            <div class="form-floating mb-3">
                                <input class="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" />
                                <label for="phone">Phone number</label>
                                <div class="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                            </div>
                           
                            <div class="form-floating mb-3">
                                <textarea class="form-control" id="message" type="text" placeholder="Enter your message here..."  data-sb-validations="required"></textarea>
                                <label for="message">Message</label>
                                <div class="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                            </div>
                       
                            <div class="d-none" id="submitSuccessMessage">
                                <div class="text-center mb-3">
                                    <div class="fw-bolder">Form submission successful!</div>
                                    To activate this form, sign up at
                                    <br />
                                    <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                </div>
                            </div>
                          
                            <div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3">Error sending message!</div></div>
                          
                            <div class="d-grid"><button class="btn btn-primary btn-lg " id="submitButton" type="submit">Submit</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

        <br></br>
    <footer className="bg-white py-4 mt-auto">
            <div className="container px-5">
                <div className="row align-items-center justify-content-between flex-column flex-sm-row">
                    <div className="col-auto"><div className="small m-0">Copyright  &copy;  prep4interview 2023</div></div>
                    <div className="col-auto"><div className="small m-0">Support  @ codeasyhere@outlook.com</div></div>
                    
                    <div className="col-auto">
                        <Link className="small" to="usermanual">User Manual</Link>
                       
                    </div>
                </div>
            </div>
        </footer>
    </>
    
  );
}
