import React from 'react'
import PropTypes from 'prop-types';
import './Navbar.css'

export default function Navbar(props) {
  return (
  <nav className={`navbar navbar-${props.mode} bg-${props.mode} fixed-top`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">
    {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Icon-notepad.svg/256px-Icon-notepad.svg.png" alt="NotePad" width="30" height="24"/> */}
     {props.title}
    </a>

    <div className="left">
      <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPCeKTk83oC8OEc2wD7MzYu2ekFg3KWhOEgQ&usqp=CAU"  
      className="toogle" 
      alt = "toogle"
      onClick={props.toggleMode} />

    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Options</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>

      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">About</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  </div>
</nav>

  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired
}


Navbar.defaultProps = {
  title: 'Set Title here'
}

