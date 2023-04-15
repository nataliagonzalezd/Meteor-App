import React from 'react';

export const Navbar = () => {

  return (
<>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">

      <div className="container-fluid">

        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>
    

        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
          </ul>

        </div>

    

        <div className="d-flex align-items-center">

          <a className="text-reset me-3" href="#">
            <i className="fas fa-shopping-cart"></i>
          </a>
   
         <button className='btn btn-dark'>Carrito</button>
 
          <button className='btn btn-danger'>Cerrar Sesion</button>
        
        </div>
     
      </div>

    </nav>
</>
  );
};