import React from "react"
import './Navbar.css'
import {Link} from 'react-router-dom'


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-lighter">
            <div className="container">
            <h1 className="nav-head">Employee Payroll System</h1><br></br><br></br><br></br><br></br><br></br><br></br>
                <div className="container-fluid">
                        <div>
                           <button className="form"> <Link to="/form">PayrollForm</Link></button>
                            <button className="board"> <Link to="/dashboard">DashBoard</Link></button>
                        </div>
                    </div><br></br><br></br><br></br><br></br><br></br>
            </div>
           
        </nav>
    )
}
export default Navbar