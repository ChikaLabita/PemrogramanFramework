import React from 'react';
 import { Link } from "react-router-dom";

 const Navbar = () => {
     return (
         <div>
             <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                 <Link className="navbar-brand" href="#">Istiqomah Store</Link>
                 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon"></span>
                 </button>

                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
                     <ul className="navbar-nav mr-auto">
                         <li className="nav-item active">
                             <Link to="/home" className="nav-link">Home</Link>
                         </li>
                         <li className="nav-item">
                             <Link to="/products" className="nav-link">Products</Link>
                         </li>
                         <li className="nav-item">
                             <Link to="/carts" className="nav-link">Carts</Link>
                         </li>
                         <li className="nav-item">
                             <Link to="/login" className="nav-link">Login</Link>
                         </li>
                      </ul>
                 </div>
             </nav>
         </div>
     )
 }

 export default Navbar