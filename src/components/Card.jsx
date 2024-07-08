import React from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation, faPeopleGroup, faProcedures, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';

function Card() {
    return (
        <>

            <div class="row px-5 py-4">
                <div class="col-sm-6 mb-3 mb-sm-0 px-5">
                    <div class="card">
                        <div class="card-body">
                            <span className='d-flex'>
                                <FontAwesomeIcon icon={faPeopleGroup} className="search-location py-1 px-1 mx-2 bg-secondary text-white rounded-2" />
                                <h5 class="card-title">People</h5>
                            </span>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn btn-outline-primary ">Connect</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 px-5">
                    <div class="card">
                        <div class="card-body">
                            <span className='d-flex'>
                                <FontAwesomeIcon icon={faLocation} className="search-location py-1 px-1 bg-success mx-2 text-white rounded-2" />
                                <h5 class="card-title">Place</h5>
                            </span>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn btn-outline-primary ">Meet up</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row px-5 py-4">
                <div class="col-sm-6 mb-3 mb-sm-0 px-5">
                    <div class="card">
                        <div class="card-body">
                            <span className='d-flex'>
                                <FontAwesomeIcon icon={faProcedures} className="search-location py-1 px-1 bg-danger mx-2 text-white rounded-2" />
                                <h5 class="card-title">Products</h5>
                            </span>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn btn-outline-primary ">Get it</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 px-5">
                    <div class="card">
                        <div class="card-body">
                            <span className='d-flex'>
                                <FontAwesomeIcon icon={faProjectDiagram} className="search-location py-1 px-1 bg-primary mx-2 text-white rounded-2" />
                                <h5 class="card-title">Program</h5>
                            </span>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn btn-outline-primary ">Attend</a>
                        </div>
                    </div>
                </div>
            </div>



            <div class="special card  text-start">
                <div class="card-body ">
                    <span className='d-flex '><img src='./src/assets/Add.png'></img>
                        <h3 class="add card-title px-4">Special title treatment</h3>
                    </span>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.With supporting text below as a natural lead-in to additional contentWith supporting text below as a natural lead-in to additional contentWith supporting text below as a natural lead-in to additional contentWith supporting text below as a natural lead-in to additional contentWith supporting text below as a natural lead-in to additional content</p>
                    <a href="#" class="btn btn-outline-primary ">Add new</a>
                </div>
            </div>





            <div class="testimonial card  text-start ">
                <div class="card-body ">
                    <span className='d-flex '><img src='./src/assets/quote.png'></img>
                        <h3 class="add card-title px-4">Testimonial</h3>
                    </span>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.With supporting text below as a natural lead-in to additional contentWith supporting text below as a natural lead-in to additional contentWith supporting text below as a natural lead-in to additional contentWith supporting text below as a natural lead-in to additional contentWith supporting text below as a natural lead-in to additional content</p>
                    <a href="#" class="btn btn-outline-primary ">Add new</a>
                </div>
            </div>

            <div className='hobbycontainer'>
                <h1> your <span className='text-primary'>hobby ,</span> your <span className='text-secondry'>community...</span> </h1>
                <button type="button" class="hobby btn  btn-md ">Get started</button>
                <img src='./src/assets/Group 99.png' className='imgresponsive'></img>
            </div>



        </>
    )
}

export default Card;