import React from "react"
import { Link } from "react-router-dom"
export default function Navbar(props) {
  return (
        <div> 
          <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark ">
            <div className="container-fluid">
             <Link className="navbar-brand" to="/">{props.title}</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item">
                   <Link className="nav-link" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                   <Link className="nav-link" to="/business">Business</Link>
                  </li>
                  <li className="nav-item">
                   <Link className="nav-link" to="/entertainment">Entertainment</Link>
                  </li>
                  <li className="nav-item">
                   <Link className="nav-link" to='/health'>Health</Link>
                  </li>
                  <li className="nav-item">
                   <Link className="nav-link" to='/science'>Science</Link>
                  </li>
                  <li className="nav-item">
                   <Link className="nav-link" to='/sports'>Sports</Link>
                  </li>
                  <li className="nav-item">
                   <Link className="nav-link" to='/technology'>Technology</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>


        </div>
  )
}



