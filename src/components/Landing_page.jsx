import React from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass, faLock } from '@fortawesome/free-solid-svg-icons';



function Landing_page() {
  return (
    <>
      <div class="row p-4">
        <div class="col-sm-6 mb-3 mb-sm-0">
          <div class="card border-0">
            <div class="card-body">
              <h1>Explore your <span className='text-primary'>hobby</span> or <span className='text-secondry'>passion</span> </h1>
              <p>Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…
              </p>
              <p>
                If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products,  services or events.  Hop on your hobbyhorse and enjoy the ride.
              </p>
            </div>
            <img src='./src/assets/Group 27.png'></img>
          </div>
        </div>
        <div class="col-sm-6 my-auto px-5">
          <span className='buttonlogin text-center d-flex'>
            <button type="button" class="btn  btn-md ">Sign In</button>
            <button type="button" class="btn  btn-md ">Join In</button>
          </span>
          <div class="card my-3 border-0 ">
            <div class="card-body ">
              <span>
                <FontAwesomeIcon icon={faCompass} className="search-" />
                {/* <FontAwesomeIcon icon="fa-brands fa-google" className='search-' /> */}
              </span>
              < input type="text"
                class="form-control btn-outline-secondary my-2 text-center" id="exampleFormControlInput1" defaultValue="Continue with Google" />
              <span>
                <FontAwesomeIcon icon={faCompass} className="search-face" />
              </span>
              <input type="text" class="form-control btn-outline-secondary my-2 text-center" id="exampleFormControlInput1" defaultValue="Continue with Facebook" />

              <div class="mb-3">
                <hr className='hr'></hr>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email" />
              </div>
              <div class="mb-3">
                <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Password" />

                <div className='checkbox my-3 px-3'>
                
                  <span> <input type="checkbox" /> Remember me?</span>
                  <span>
                    <FontAwesomeIcon icon={faLock} className="search-lock" />
                  </span>
                  <span>Forgot Password?</span>
                </div>

                <div class="d-grid gap-2">
                  <div className=' continuebutton text-center w'>
                    <button class="btn text-center btn-outline-secondary text-secondry" type="button">Continue</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Landing_page;