import React from 'react'
import BasicDetails from './Settings/BasicDetails'
import JobRole from './Settings/JobRole'
import ShiftTimes from './Settings/ShiftTimes'
import Documents from './Settings/Documents'
import NotificationSetting from './Settings/NotificationSetting'
import Location from './Settings/Location'
import Image from 'next/image'
import profile from '@/app/images/profile.jpg'
import { useState, useEffect } from "react";
import { asyncGet } from '@/app/services/HttpServices';
import { endpoint_employer } from "@/app/services/ApiEndPoints";

const Settings = () => { 
    const [employerProfile, setEmployerProfile] = useState([]);
    const viewEmployerProfile = async () => {
        try {          
            const response = await asyncGet(endpoint_employer+'/14');
            //console.log(response.Response[0].employer_details);           
            setEmployerProfile(response.Response[0].employer_details);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
      };
      useEffect(() => {
        viewEmployerProfile();      
      }, []);  

<<<<<<< HEAD
=======
import { useState, useEffect } from "react";
import { asyncGet } from '@/app/services/HttpServices';
import {  endpoint_employer } from "@/app/services/ApiEndPoints";

const Settings = () => {
   
    const [employerProfile, setEmployerProfile] = useState([]);
   

      const viewEmployerProfile = async () => {
        try {
            const response = await asyncGet(endpoint_employer+'/'+14);
            console.log(response.Response[0].employer_details);           
            setEmployerProfile(response.Response[0].employer_details);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
      };

      useEffect(() => {
       
        viewEmployerProfile();
      }, []);  
      
>>>>>>> 9112856d66d81284a317cb999d0de86992e300ee
    return (
        <>

            <div className="profilesectioncontent">
                <div className="card">
                    <div className="row  justify-content-center">
                        <div className="col-md-12 col-lg-11 col-xl-11">
                            <div className="firstinfo">
                                <div className="avatar-upload">
                                    <div className="avatar-preview profile_avtar cropme" id="landscape"> <Image
                                        id="CndProfileImgBig"
                                        className="profileImgBig img-responsive rounded-circle FullprofileImgBig img pict mr-2"
                                    src={profile} alt="No image" />
                                    </div>
                                </div>
                                {employerProfile.map((item) => (
                                <div className="profileinfo">
                                    <div className="row">
                                        <div className="col-12">
                                            <h3 className="col-med">{item.company_name}</h3>
                                        </div>
                                        <div className="col-md-6 col-lg-4">
                                            <p className="mt-1 col-med">Industry : <span className="mb-1 col-black">
                                            {item.category}</span></p>
                                            <p className="mt-1 col-med">Company Id : <span className="mb-1 col-black">
                                            {item.company_reg_no}</span></p>
                                        </div>
                                        <div className="col-md-6 col-lg-4">
                                            <p className="mt-1 col-med">Created Date : <span
                                                className="mb-1 col-black">{item.create_date}</span>
                                            </p>
                                            <p className="mt-1 col-med">Financial Year :
                                                <span className="mb-1 col-black"> --</span>
                                            </p>
                                        </div>
                                        <div className="col-md-6 col-lg-4">
                                            <p className="mt-1 col-med">Phone : <span className="mb-1 col-black">
                                            {item.emp_mobile}</span></p>
                                            <p className="mt-1 col-med">Email : <span className="mb-1 col-black">
                                            {item.emp_email}</span></p>
                                        </div>
                                    </div>
                                </div>
                                 ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="booktab p-0 bdrb">
                <ul className="nav nav-tabs nav-justified ul-main-tabs1 ul-myjobs-tabs">
                    <li className="nav-item">
                        <a href="#BesicDetails" className="nav-link active show" data-toggle="tab">
                            <i className="fa fa-info-circle"></i> Basic Details
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#JobRoles" className="nav-link" data-toggle="tab">
                            <i className="fa fa-list"></i> Job Roles
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#ShiftTimes" className="nav-link" data-toggle="tab">
                            <i className="fa fa-clock-o"></i> Shift Times
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#Documents" className="nav-link" data-toggle="tab">
                            <i className="fa fa-file-text"></i> Documents
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#Location" className="nav-link" data-toggle="tab">
                            <i className="fa fa-file-text"></i> Location(s)
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#NotificationSetting" className="nav-link" data-toggle="tab">
                            <i className="fa fa-bell"></i> Notification Setting
                        </a>
                    </li>
                </ul>
            </div>


            <div className="tab-content">
                <div role="tabpanel" className="tab-pane fade in active show" id="BesicDetails">
                    <BasicDetails employerProfile={employerProfile}></BasicDetails>
                </div>
                <div role="tabpanel" className="tab-pane fade" id="JobRoles">
                    <JobRole></JobRole>
                </div>

                <div role="tabpanel" className="tab-pane fade" id="ShiftTimes">
                    <ShiftTimes></ShiftTimes>
                </div>
                <div role="tabpanel" className="tab-pane fade" id="Documents">
                    <Documents></Documents>
                </div>
                <div role="tabpanel" className="tab-pane fade" id="NotificationSetting">
                    <NotificationSetting />
                </div>
                <div role="tabpanel" className="tab-pane fade" id="Location">
                    <Location />
                </div>
            </div>




        </>
    )
}

export default Settings
