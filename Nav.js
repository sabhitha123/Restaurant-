import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Nav extends Component {
    render() {
        return (
            <div className="container-fluid">
            <div className="row">
            
            <img className="opening-18"
            src="shape_18.png"
            alt="opening-18"
            />
        
            <div className="col-sm-6">
            <img className="opening-96"
            src="restaurant-opening-96.png"
            alt="opening-96"
            />
               
            </div>
            <div className="col-sm-6 bg-">
            <nav className="navbar">
            <ul className="nav">

            <li className="nav-list">
            <Link className="nav-link" to="/Home">
             <img className="opening-95"
            src="restaurant-opening-95.png"
            alt="opening-95"
            />
            </Link>
            </li>

            <li className="nav-list">
            <Link className="nav-link" to="/OurMenu"> 
            <img className="opening-94"
            src="restaurant-opening-94.png"
            alt="opening-94"
            />
            </Link>
            </li>
           
            <li className="nav-list">
            <Link className="nav-link" to="/Promo">
             <img className="opening-93"
            src="restaurant-opening-93.png"
            alt="opening-93"
            />
            </Link>
            </li>

            <li className="nav-list">
            <Link className="nav-link" to="/Order"> 
            <img className="opening-92"
            src="restaurant-opening-92.png"
            alt="opening-92"
            />
            </Link>
            </li>
            </ul>
            </nav>
           
            </div>
            </div>

            <div className="col-sm-12">
            <div className="row">
           
            <img 
            className="opening-91"
            src="restaurant-opening-91.png"
            alt="opening-91"
          
            />
            <img 
            className="opening-90"
            src="restaurant-opening-90.png"
            alt="opening-90"
          
            />

            </div>
            <div className="col-12">
            
            <img 
            className="dots3"
            src="shape_19.png"
            alt="opening-89"
          
            />
            <div>
            <img 
            className="shape_15"
            src="shape_15.png"
            alt="opening-15"
          
            />
            </div>
            <div>
            <img 
            className="shape_16"
            src="shape_16.png"
            alt="opening-16"
            />
            <img 
            className="shape_20"
            src="shape_20.png"
            alt="opening-20"
            />
            <div className="col-12">
            <img 
            className="opening-64"
            src="restaurant-opening-64.png"
            alt="opening-64"
            />
            <img 
            src="restaurant-opening-68.png"
            className="restaurant-opening-68"
            alt="restaurant-opening-68"/>
            <img 
            src="restaurant-opening-73.png"
            className="restaurant-opening-73"
            alt="restaurant-opening-73"/>
            <img 
            src="restaurant-opening-80.png"
            className="restaurant-opening-80"
            alt="restaurant-opening-80"/>
            <img 
            src="restaurant-opening-72.png"
            className="restaurant-opening-72"
            alt="restaurant-opening-72"/>

            <img 
            src="restaurant-opening-81.png"
            className="restaurant-opening-81"
            alt="restaurant-opening-81"/>

            
            <img 
            src="restaurant-opening-79.png"
            className="restaurant-opening-79"
            alt="restaurant-opening-79"/>
            
            <img 
            src="restaurant-opening-78.png"
            className="restaurant-opening-78"
            alt="restaurant-opening-78"/>

            <img 
            src="restaurant-opening-74.png"
            className="restaurant-opening-74"
            alt="restaurant-opening-74"/>

            <img src="restaurant-opening-83.png" 
            className="restaurant-opening-83"
             alt="restaurant-opening-83"/>
             <img src="restaurant-opening-70.png" 
            className="restaurant-opening-70"
             alt="restaurant-opening-70"/>
           
             <img src="restaurant-opening-82.png" 
             className="restaurant-opening-82"
              alt="restaurant-opening-82"/>

              <img src="restaurant-opening-71.png" 
              className="restaurant-opening-71"
               alt="restaurant-opening-71"/>

         
                 <div class="rounded-pill">
               <img src="restaurant-opening-85.png" 
               className="restaurant-opening-85"
                alt="restaurant-opening-85"/>
                </div>

                <img 
                className="shape_14"
                src="shape_14.png"
                alt="opening-14"
                />
                <div className="wrap">
                <div className="row">
                <div className="col-lg-6">
                <img 
                className="sideimage"
                src="restaurant-opening-58.png"
                alt="sideimage"
                />
                </div>
                <div className="col-lg-6">
                <img 
                className="sideimage-2"
                src="restaurant-opening-63.png"
                alt="sideimage-2"
                />
                <img 
                className="sideimage-3"
                src="restaurant-opening-62.png"
                alt="sideimage-3"
                />
                </div>
               </div>
                </div>
            </div>
            </div>
            </div>
            </div>
            </div>
        )
    }
}
