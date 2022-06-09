import React,{useState, useEffect} from 'react';
import "./payrolldashboard.css"
import {Link} from 'react-router-dom'
import axios from "axios"
import Payrollform from '../payrollForm/Payrollform'; 

function Payrolldashboard() {
    const [employee, setEmployee] =  useState([]);

    useEffect(() =>{
        loadUsers();
    },[])

    const loadUsers = async ()=>{
        const result = await axios.get("http://localhost:3003/employee")
        setEmployee(result.data)
    }
    
  return(
        <div>
            <body>
                <header className="header-content header">
                    <div className="logo-content">
                        <img src= {require('./icons/logo.png')}/>
                        <div>
                        <span className="emp-text">EMPLOYEE</span><br></br>
                        <span className="emp-text emp-payroll">PAYROLL</span>
                        </div>
                    </div>
                </header>
                <div className='main-content'>
                    <div className='main'>
                        <h1 className='form-head'>Employee Details 
                        <img className='addimg' src = {require('./icons/add.png')}/>
                            <button className='adduser'>
                            <Link to = "/form" className="add-button">+Add user</Link>
                            </button>
                        </h1>
                    </div>
                </div>
                <hr></hr>
                <div className='table-content'>
                <table className="table">
                <thead className='head'>
                  <tr className='head-content'>
                    <th className='pro' scope="col">Sr.No</th>
                    <th className='pro' scope="col">Profile</th>
                    <th className='pro' scope="col">Name</th>
                    <th className='name' scope="col">Gender</th>
                    <th className='pro' scope="col">Department</th>
                    <th className='pro' scope="col">Salary</th>
                    <th className='pro' scope="col">Start Date</th>
                    <th className='pro' scope="col">Notes</th>
                    <th className='action' scope="col">Action</th>
                  </tr>
                </thead>
               
                <tbody >
                  <tr className='content'>
                    <th scope="row">1</th>
                    <td className='pro'><img src={require('./assets/Ellipse-4.png')}/></td>
                    <td className='pro'>Dhanashree Sambhaji Hakke</td>
                    <td className='name'>Female</td>
                    <td className='pro'>Hr</td>
                    <td className='pro'>1-2</td>
                    <td className='pro'>12/03/1997</td>
                    <td className='pro'>Hi</td>
                    <td className='pro'><Link to='/form'><img className='edit' src={require('./icons/edit.png')} /></Link>
                    <Link to=''><img className='delete' src={require('./icons/delete.png')}/></Link>
                    </td>
                  </tr>
                </tbody>
                   
                <tbody>
                    {
                    employee.map((userRegistration, index) => (
                        <tr>
                            <th scope="row">{index+1}</th>
                            <th>{userRegistration.profilePic}</th>
                            <th>{userRegistration.name}</th>
                            <th>{userRegistration.gender}</th>
                            <th>{userRegistration.departments}</th>
                            <th>{userRegistration.salary}</th>
                            <th>{userRegistration.day}</th>
                            <th>{userRegistration.month}</th>
                            <th>{userRegistration.year}</th>
                            <th>{userRegistration.note}</th>
                        </tr>
                    )) 
                }
                    
                </tbody>
              </table>        
                </div>
            </body>
        </div>
  )
}
export default Payrolldashboard