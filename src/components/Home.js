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

                                <div className="badge bg-gradient-primary-to-secondary text-white mb-4"><div className="text-uppercase">✅ Mock Interviews  &middot; ✅ Self-Assessment &middot; ✅ Resource Library</div></div>
                              
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
