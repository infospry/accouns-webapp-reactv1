"use client"
import React from 'react'
import Link from "next/link";
import { useState ,useEffect } from 'react';
import { getUserList } from "../../services/dropdownServices";
import ApiEndPoints from "../../utils/ApiEndPoints";
import { getCookie } from 'cookies-next';
import { getData } from '../../services/apiservice';

function Main() {

    const [user_list, setUser_list] = useState([]);
    const [leads, setLeads] = useState([]);

    useEffect(() => {
        getUsersList();
        getLeads();
    }, []);

    const getUsersList = async () => {
        const resp = await getUserList();
        if (resp.response_status === "OK") {
            
            setUser_list(resp.data.response.users)
        }
    }    

    const getLeads = async () => {
        var offset = 0;
        var params = { "leads": { "title": "0", "lead_type": "0", "lead_note": "", "status_id": "0", "from_date": "", "to_date": "", "delete_status": "0", "archieve_status": "0" }, "action": "leads", "action_on": "leads_main", "request_for": "load-more", "previous": offset, "next": 10 };
        const lang = getCookie('signin_token');
        const response = await getData(params, lang, ApiEndPoints.opportunity);
        const obj = response;
        if (obj.response_status === "OK") {  
                   
            setLeads(obj.data.response.leads_list);
        }        
    }

    return (
        <section className="content">
            <div className="body_scroll">
                <div className="scrolfx">
                    <div className="booktab d-flex justify-content-between align-items-center bdrb">
                        <div className="p-2">
                            <h2 className="font-bold mb-0">Dashboard </h2>
                        </div>
                        <div className="pagination-email">
                        
                        </div>
                    </div>
                </div>
                <div className="contactlist scroll_bar">
                    <div className="container-fluid">
                        <div className='row'>

                            <div className='col-6'>
                                <table className='table' style={{ width: '500px' }}>
                                    <thead>
                                        <tr>
                                            <th>User ID</th>
                                            <th>User Name</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {user_list && user_list.length > 0 && user_list.map((item, i) => (
                                            <tr key={i}>
                                                <td>{item.user_id}</td>
                                                <td >{item.user_name}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className='row col-6'>
                                <table className='table'>
                                    <thead>
                                        <tr>
                                            <th>Lead type</th>
                                            <th>Company Name</th>                                       
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {leads && leads.length > 0 && leads.map((item , index) => (
                                            <tr key={index}>
                                                <td>{item.lead_type_name}</td>
                                                <td >{item.lead_company_name}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Main
