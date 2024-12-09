import React from 'react'
import { Link} from 'react-router-dom'
import {Dropdown} from 'react-bootstrap'



function Navbar() { 
  return (
    <div className="container-fluid header1" >
           <nav className="navbar navbar-expand-lg " >
            <div className="container-fluid inner-nav">
                <div className="logo">
                    <Link className="navbar-brand" to="#"><img src="logo.png" alt='' style={{width: '150px', height: '80px',}}/></Link>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item nav-item1">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item nav-item2">
                            <Link className="nav-link" to="Aboutus">About us</Link>
                        </li>
                        <li className="nav-item nav-item3">
                            <Link className="nav-link" to="Services">Services</Link>
                        </li>
                        <li className="nav-item nav-item4 dropdown">
                            
                            <Dropdown>
                                <Dropdown.Toggle style={{background:"none", border:"none"}}>
                                <a  style={{background:"none", border:"none", textDecoration:"none" , color:"white"}} href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Modeling bank
                            </a>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item ><Link class="dropdown-item" to="Kidmodel">Kid model</Link></Dropdown.Item>
                                    <Dropdown.Item ><Link class="dropdown-item" to="MaleModel">Male Model</Link></Dropdown.Item>
                                    <Dropdown.Item ><Link class="dropdown-item" to="FemaleModel">Female Model</Link></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            

                        </li>
                        <li className="nav-item nav-item5">
                            <Link className="nav-link" to="Contact">Contact us</Link>
                        </li>

                        <li className="nav-item nav-item6">
                            <Link className="nav-link" to="API">API</Link>
                        </li>
                        
                    </ul>
                    <form className="d-flex" >
                        <Link className="apply pt-3 pb-3 px-5 " style={{ fontFamily: 'Sacramento, cursive' }}  to="Apply">Apply now</Link>
                        {/* style="font-family: Sacramento, cursive;" */}
                    </form>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
