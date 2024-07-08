import React from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation, faPeopleGroup, faProcedures, faProjectDiagram,faCompass } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <>
     <footer className=" text-primary bg-dark mt-5 p-4 text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-3 mb-3">
            <h5>Hobbycue</h5>
            <span>About Us</span><br></br>
            <span>Our Services </span><br></br>
            <span>Work with Us</span><br></br>
            <span>FAQ</span><br></br>
            <span>Contact Us</span><br></br>
            
          </div>
          <div className="col-md-3 mb-3">
            <h5>How Do I</h5>
            <span>Sign Up</span><br></br>
            <span>Add a Listing</span><br></br>
            <span>Claim Listing</span><br></br>
            <span>Post a Query</span><br></br>
            <span>Add a Blog Post</span><br></br>
            <span>Other Queries</span>
          </div>
          <div className="col-md-3 mb-3">
            <h5>Quick Links</h5>
            <span>Listing</span><br></br>
            <span>Blog Posts</span><br></br>
            <span>Shop/ Store</span><br></br>
            <span>Community</span><br></br>
            
          </div>
          <div className="col-md-3 mb-3">
            <h5>Social Media</h5>
            <div className='footericons '>
            <FontAwesomeIcon icon={faCompass} className="search " />
            <FontAwesomeIcon icon={faLocation} className="search" />
            <FontAwesomeIcon icon={faPeopleGroup} className="search" />
            <FontAwesomeIcon icon={faProcedures} className="search" />
            <FontAwesomeIcon icon={faProjectDiagram} className="search" />
            <FontAwesomeIcon icon={faCompass} className="search" />
            </div>
          
 

<h5>Invite Friends</h5>
<input type='search' placeholder='Email Id' className='serachfooter px-1'></input>

           
            
          </div>
        </div>
        
      </div>
    </footer>
    </>
  )
}

export default Footer