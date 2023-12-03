import React, { useEffect, useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import {user} from './Data'

const HealthRecord = (props) => {
    const [show, setShow] = useState([]);

    const fetchData = (value) => {
        const results = user.filter((user) => {
              return (
                value &&
                user &&
                user.name &&
                user.name === value
              );
            });
            setShow(results)
          
      };
    
      useEffect(() =>{
        fetchData(props.username);
      },[props.username]);

    return (
        <div className="record-wrapper">
            <div className="record-container">
             <div className="record-serach">
             <div className="search-container-record">
              <IoIosSearch id="search-icon"/>
              <input type='text' placeholder='Search' />
            </div>
            <div className="sort-date">
            <p>Sort by: <span>Date </span></p> 
            </div>
             </div>
             {show && show.length > 0 && 
               show.map((item, id) => {
                return(
                    <div className="report-container">
                        <div className="report-wrapper"> 
                    <div className="report-title" key={id}>
                       <h1>{item.title}</h1>
                       <p>{item.Date}</p>
                    </div>
                    <div className="update"><p>Updated_By: {item.Updated_By}</p> </div>
                    <p className="report-des">{item.Description}</p>
                    </div>
                    </div>
                )
               })}
            </div>
            </div>
    );
};

export default HealthRecord;