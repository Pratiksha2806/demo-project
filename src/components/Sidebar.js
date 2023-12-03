import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUserFriends } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";

const Sidebar = ({children}) => {
    const menuItem = [
        {
            path:"/pateients",
            name:"Patients",
            icon:<FaUserFriends/>
        },
        {
            path:"/records",
            name:"Health Records",
            icon:<IoDocumentText/>
        },
        {
            path:"/investigation",
            name:"Investigation",
            icon:<IoDocumentText/>
        },
        {
            path:"/prescription",
            name:"Prescription",
            icon:<IoDocumentText/>
        }

    ] ;
    return (
        <div className="container">
        <div className="sidebar">
            <div className="top-section"> 
            <h1 className="heading">@ EHR Safe</h1>
            
            </div>
            {
                menuItem.map((item,index) => {
                    return(
                    <NavLink to={item.path} key={index} className="link" 
                    >
                        <div className="menu-icon">{item.icon}</div>
                        <div className="menu-text">{item.name}</div>
                        </NavLink>
                 )
                })
            }
            <hr className="line"/>
           <ul className="menu-bottom">
            <li className="bottom" ><a href='/contact' className="link" ><FaUserFriends/> Contact Us</a></li>
            </ul>
            
        </div>
        <main>{children}</main>
        </div>
    );
};

export default Sidebar;