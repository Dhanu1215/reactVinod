import React,{useState} from 'react';
import "./payrollForm.css"
import {Link} from 'react-router-dom'
import axios from "axios"
import { useHistory } from 'react-router-dom';

const Payrollform =() => {
       let history = useHistory();

    const [userRegistration, setUserRegistration] = useState({
        name:"",
        profilePic:"",
        gender:"",
        departments:"",
        salary:"",
        day:"",
        month:"",
        year:"",
        note:""
    })
    const handleInput = (e) =>{
        const name = e.target.name;
        const value = e.target.value
        setUserRegistration({...userRegistration, [name]: value})
      
    }

    const [records, setRecords] = useState([]);

    const handleSubmit = async (e) =>{
        console.log(userRegistration)
        e.preventDefault();
        const newRecord = {...userRegistration, id : new Date().getTime().toString}
        console.log(records)
        setRecords([...records, newRecord])
        setUserRegistration({name:"", profilePic:"", gender:"", departments:"",salary:"", day:"", month:"", year:"", note:""})
        await axios.post("http://localhost:8080/employeePayrollservice/create", userRegistration)
        history.push("/dashboard")
    }

    const handleReset = (e) => {
        e.preventDefault();
        setUserRegistration({name:"", profilePic:"", gender:"", departments:"",salary:"", day:"", month:"", year:"", note:""})
    }
        return (
            <div>
            <body>
                <header className="header-content header">
                <div className="logo-content">
                <img src={require('./assets/logo.png')}/>
                <div>
                    <span className="emp-text">EMPLOYEE</span><br></br>
                    <span className="emp-text emp-payroll">PAYROLL</span>
                    </div>
                </div>
                </header>
                <div className='payroll-main'>
                    <form action="" onSubmit={handleSubmit}>
                        <div className='form-head'>Employee Payroll Form</div><br></br>
                        <div className='row'>
                            <label className='label-text' htmlFor='username' >Name</label>
                            <input className='input' type="text" id='username' 
                            value={userRegistration.name}
                            onChange={handleInput} autoComplete='off'
                            name='name' placeholder='Your name..'/>
                        </div><br></br>
                        <div className='profile-radio-button'>
                            <label>Profile image</label>
                            <label className='profile'>
                                <input type="radio"  id='profile1' 
                                value={userRegistration.profilePic}
                                onChange={handleInput}
                                name='profilePic' value={require('./assets/Ellipse -7.png')}/> 
                                <img className='pic' id='image1' src={require('./assets/Ellipse -7.png')}></img>
                                            </label>
                            <label className='profile'>
                                <input type="radio" id='profile2' 
                                value={userRegistration.profilePic}
                                onChange={handleInput}
                                name='profilePic' value={require('./assets/Ellipse -3.png')} required/>
                                <img className='pic' id='image2' src={require('./assets/Ellipse -3.png')}></img>
                            </label>
                            <label className='profile'>
                                <input type="radio" id='profile3' 
                                value={userRegistration.profilePic}
                                onChange={handleInput}
                                name='profilePic' value='../assets/Ellipse -1.png' required/>
                                <img className='pic' id='image3' src={require('./assets/Ellipse -1.png')}></img>
                            </label>
                            <label className='profile'>
                                <input type="radio" id='profile4' 
                                value={userRegistration.profilePic}
                                onChange={handleInput}
                                name='profilePic' value={require('./assets/Ellipse-4.png')} required/>
                                <img className='pic' id='image4' src={require('./assets/Ellipse-4.png')}></img>
                            </label>
                        </div><br></br>
                        <div className="row-content">
                                <label className="label text" htmlFor="gender">Gender</label>
                                <input className="radio-button" type="radio" id="male" 
                                value={userRegistration.gender}
                                onChange={handleInput}
                                name="gender" value="male"/>
                                <label className="text" htmlFor="male">Male</label>
                                <input className="radio-butt" type="radio" id="female" 
                                value={userRegistration.gender}
                                onChange={handleInput}
                                name="gender" value="female"/>
                                <label className="text" htmlFor="female">Female</label>
                        </div><br></br>
                        <div className='row-content'>
                            <label className="label text" htmlFor="department">Department</label>
                            <input className="checkbox" type="checkbox" id="hr" 
                            value={userRegistration.department}
                            onChange={handleInput}
                            name="department" value="HR"/>
                            <label className="text" htmlFor="hr">HR</label>
                            <input className="checkbox" type="checkbox" id="sales" 
                            value={userRegistration.departments}
                            onChange={handleInput}
                            name="departments" value="Sales"/>
                            <label className="text" htmlFor="sales">Sales</label>
                            <input className="checkbox" type="checkbox" id="finance" 
                            value={userRegistration.departments}
                            onChange={handleInput}
                            name="department" value="Finance"/>
                            <label className="text" htmlFor="finance">Finance</label>
                            <input className="checkbox" type="checkbox" id="engineer" 
                            value={userRegistration.departments}
                            onChange={handleInput}
                            name="departments" value="Engineer"/>
                            <label className="text" htmlFor="er">Engineer</label>
                            <input className="checkbox" type="checkbox" id="others" 
                            value={userRegistration.departments}
                            onChange={handleInput}
                            name="departments" value="Others"/>
                            <label className="text" htmlFor="others">Others</label>
                        </div><br></br>
                        <div className='row-content'>
                            <label className='label-text' htmlFor='salary'>Salary</label>
                            <select className='salary' id='salary' 
                            value={userRegistration.salary}
                            onChange={handleInput}
                            name='salary'>
                                <option>Salary (lpa)</option>
                                <option value="100000">100000</option>
                                <option value="300000">300000</option>
                                <option value="400000">400000</option>
                                <option value="500000">500000</option>
                                <option value="65762788">65762788</option>
                            </select>
                        </div><br></br>
                        <div className='row-content'>
                            <label className='label-text' htmlFor='date'>Start Date</label>
                            <select className="date" id='day' 
                            value={userRegistration.day}
                            onChange={handleInput}
                            name='day'>
                                <option>Day</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>
                                <option value="31">31</option>
                            </select>
                            <select className="format" id='month' 
                            value={userRegistration.month}
                            onChange={handleInput}
                            name='month'>
                                <option>Month</option>
                                <option value="1">Jan</option>
                                <option value="2">Feb</option>
                                <option value="3">March</option>
                                <option value="4">April</option>
                                <option value="5">May</option>
                                <option value="6">June</option>
                                <option value="7">Jully</option>
                                <option value="8">August</option>
                                <option value="9">Sep</option>
                                <option value="10">Oct</option>
                                <option value="11">Nov</option>
                                <option value="12">Dec</option>
                            </select>
                            <select className="format" id='year' 
                            value={userRegistration.year}
                            onChange={handleInput}
                            name='year'>
                                <option>Year</option>
                                <option value="2016">2016</option>
                                <option value="2017">2017</option>
                                <option value="2018">2018</option>
                                <option value="2019">2019</option>
                                <option value="2020">2020</option>
                                <option value="2021">2021</option>
                                <option value="2022">2022</option>
                                <option value="2023">2023</option>
                            </select>
                        </div><br></br>
                        <div className="row-content">
                            <label className="lable text" htmlFor="notes">Notes</label>
                            <textarea className="area" id="notes" 
                            value={userRegistration.note}
                            onChange={handleInput}
                            name="note" placeholder="" ></textarea>
                        </div><br></br>
                        <div className="buttonParent">
                            <div className="submit-reset">
                                <button className="cancleButton"><Link to="dashboard" className="cancle">Cancle</Link></button>
                                <button type="submit" className="button submitButton">Submit</button>
                                <button type="reset" className="button resetButton" onReset={handleReset.setUserRegistration}>Reset</button>
                            </div>
                        </div><br></br>
                    </form>
                </div>
                </body>
            </div>
        );
    
}

export default Payrollform;

