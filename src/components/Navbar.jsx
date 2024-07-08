import React from 'react'
// import './custom.scss'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faBookmark, faHeartCircleXmark, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faCompass } from '@fortawesome/free-solid-svg-icons';


function Navbar() {
  return (

    <div>
      <nav className="navbar b navbar-expand-lg bg-body-tertiary  navbarheader ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img src='./src/assets/HobbyCue Logo.png'>
          </img></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon  ">
            <FontAwesomeIcon icon={faSearch} className="search-iconinput-togller  d-xs-none " />
            <FontAwesomeIcon icon={faBell} className="search-icontoggler d-xs-none " /></span> 
           
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <form className="search d-flex " role="search">
                <input className="search-input form-control me-3 " type="search" placeholder="Search" aria-label="Search" />
                <FontAwesomeIcon icon={faSearch} className="search-iconinput" />
              </form>


              <div className='dropdown'>
                <li className="nav-item dropdown ">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <FontAwesomeIcon icon={faCompass} className="search-icon icondropdown" /> Explore
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                  </ul>
                </li>
              </div>

              <div className='dropdown'>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <FontAwesomeIcon icon={faHeartCircleXmark} className="search-icon icondropdown " /> Hobbies
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                  </ul>
                </li>
              </div>


              <div className='onlyicons'>
                <FontAwesomeIcon icon={faBookmark} className="save-icon icon" />
                <FontAwesomeIcon icon={faBell} className="bell-icon  icon" />
                <FontAwesomeIcon icon={faShoppingCart} className="shopping-icon icon" />

              </div>
            </ul>
            <button className="btn btn-outline-success " type="submit">Signin</button>

          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;