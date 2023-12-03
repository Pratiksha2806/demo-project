import React, { useState } from 'react';
import { IoIosArrowDown, IoIosSearch } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import HealthRecord from './HealthRecord';

const Navbar = () => {
    const [name, setName] = useState("");
    const [show, setShow] = useState([]);
    const [username, setUserName] = useState("")
    const data = [
        {name: "Rajkumar"},
        {name: "Ashok"},
        {name: "Akash"},
    ]
    const fetchData = (value) => {
        const results = data.filter((user) => {
                 return (
                   value &&
                   user &&
                   user.name &&
                   user.name.toLowerCase().includes(value)
                 );
               });
               setShow(results)
             
         };
         const handleChange = (value) => {
           setName(value);
           fetchData(value);
         };
    return (
        <div>
        <div className='health-container'>
           <div className='c'>
            <h1 className="health-title">Health Records</h1>
            <div className="profile">
                <p className="picture"><FaRegUserCircle/></p>
                <h4>Matthew Parker</h4>
                <p className="arrow"><IoIosArrowDown/></p>
                
            </div>
            </div>
        </div>
        <div className="wrapper">
        <div className="serach-box">
            <div className="search-container">
            <IoIosSearch id="search-icon"/>
            <input type="text" placeholder="Search" value={name} onChange={(e) => handleChange(e.target.value)}/>
            </div>
            { show && show.length > 0 && 
            show.map((user,id) => {
                return(
                    <div className="name-container" key={id} >
                    <div onClick={() => setUserName(user.name)}>{user.name}</div>
                   </div>
                )
            })}
        
        </div>
        <HealthRecord username={username}/>
        </div>
        </div>
    );
};

export default Navbar;