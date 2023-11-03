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
