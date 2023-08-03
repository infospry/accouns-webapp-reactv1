"use client"
import React from 'react'
import LeftSidebar from '../../components/LeftSidebar';
import GeneralInfo from './GeneralInfo';
import BankAccounts from './BankAccounts';
import Invoice from './Invoice';
import Image from 'next/image'
import profile from '@/app/images/profile.jpg'

import { useState, useEffect } from 'react';
import { asyncGet } from '@/app/services/HttpServices';
import { endpoint_account } from '@/app/services/ApiEndPoints';

function Main() {
    const [InfoAccountDetails, setAccountDetails] = useState([]);

    useEffect(() => {

        async function fetchAccountDetailsData() {
            try {
                const response = await asyncGet(endpoint_account);
                setAccountDetails(response.Response[0].AccountDetails);
            } catch (error) {
                console.error('Error fetching AccountDetails data:', error);
            }
        }

          fetchAccountDetailsData();
      }, []);

    return (
        <>
            <section className="content">
                <div className="body_scroll">
                    <div className="container-fluid">
                        <div className="row clearfix">
                            <div className="card mb-0">

                                <div className="">
                                    {/* <button className="btn btn-primary btn-sm reveal-click float-left"> <i className="zmdi zmdi-menu"></i></button> */}
                                    <div id="email-nav" className="inbox left pr-0 mr-0 lftfxd">
                                        <LeftSidebar />
                                    </div>
                                    <div className="inbox right rgtinbox">
                                        <div className="body bdr-0 p-0">
                                            <div className="col-md-12 col-sm-12 p-0">
                                                <div id="Profile_Basic_Info_Placeholder">
                                                    <div className="profilesectioncontent">
                                                        <div className="card">
                                                            <div className="row justify-content-center">
                                                            {InfoAccountDetails.map((item) => (
                                                                <div className="col-md-12 col-lg-11 col-xl-11">
                                                                    <div className="firstinfo">
                                                                        <div className="avatar-upload">
                                                                            <div className="avatar-preview profile_avtar cropme" id="landscape">
                                                                                <Image
                                                                                    id="CndProfileImgBig"
                                                                                    className="profileImgBig img-responsive rounded-circle FullprofileImgBig img pict mr-2"
                                                                                    src={profile}
                                                                                    alt="No image"
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                        <div className="profileinfo">
                                                                            <div className="row">
                                                                                <div className="col-12">
                                                                                    <h3 className="col-med"key={item.user_id}>{item.user_full_name}</h3>
                                                                                </div>
                                                                                <div className="col-md-6 col-lg-4">
                                                                                <p className="mt-1 col-med">
                                                                                        Role : <span className="mb-1 col-black"key={item.role_id}>{item.user_role}</span>
                                                                                    </p>
                                                                                    <p className="mt-1 col-med">
                                                                                    Designation : <span className="mb-1 col-black">{item.designation}</span>
                                                                                    </p>
                                                                                    
                                                                                </div>
                                                                                <div className="col-md-6 col-lg-4">
                                                                                <p className="mt-1 col-med">
                                                                                        Status : <span className="mb-1 badge badge-success cursor">{item.status}</span>
                                                                                    </p>
                                                                                    <p className="mt-1 col-med">
                                                                                        Created Date : <span className="mb-1 col-black">{item.create_date}</span>
                                                                                    </p>
                                                                                    
                                                                                </div>
                                                                                <div className="col-md-6 col-lg-4">
                                                                                    <p className="mt-1 col-med">
                                                                                        Last Login : <span className="mb-1 col-black">{item.last_login}</span>
                                                                                    </p>
                                                                                    <p className="mt-1 col-med">
                                                                                    Login from IP : <span className="mb-1 col-black">{item.login_from_ip}</span>
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                    ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* Header */}
                                                    <ul className="nav nav-tabs nav-justified p-0 responsive-tabs">
                                                        <li className="nav-item active profiletab">
                                                            <a id="UserProfileTab" className="nav-link active" data-toggle="tab" href="#TabUserProfile">
                                                                General Information
                                                            </a>
                                                        </li>
                                                        <li className="nav-item ulEmpPaymentSetting">
                                                            <a id="CompanyTab" className="nav-link" data-toggle="tab" href="#TabCompanyTab">
                                                                Bank Accounts
                                                            </a>
                                                        </li>
                                                        <li className="nav-item ulEmpPaymentSetting">
                                                            <a id="InvoiceTab" className="nav-link" data-toggle="tab" href="#TabInvoiceTab">
                                                                Invoice Setting
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <div className="tab-content bdr-1 p-0">
                                                        <div id="TabUserProfile" role="tabpanel" className="tab-pane active show">
                                                            <GeneralInfo />
                                                        </div>
                                                        <div id="TabCompanyTab" role="tabpanel" class="tab-pane">
<BankAccounts/>
                                                        </div>    
                                                        <div id="TabInvoiceTab" role="tabpanel" class="tab-pane">
<Invoice/>
                                                        </div>    
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Main
