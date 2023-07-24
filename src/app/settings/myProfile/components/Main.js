import React from 'react'
import LeftSidebar from '../../components/LeftSidebar';
import GeneralInfo from './GeneralInfo';
import BankAccounts from './BankAccounts';
import Invoice from './Invoice';
import Image from 'next/image'
import profile from '@/app/images/profile.jpg'

function Main() {
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
                                                                                    <h3 className="col-med">Dr Doctor5 Agnecy</h3>
                                                                                </div>
                                                                                <div className="col-md-6 col-lg-4">
                                                                                    <p className="mt-1 col-med">
                                                                                        Industry : <span className="mb-1 col-black">Healthcare</span>
                                                                                    </p>
                                                                                    <p className="mt-1 col-med">
                                                                                        Company Id : <span className="mb-1 col-black">XY12345</span>
                                                                                    </p>
                                                                                </div>
                                                                                <div className="col-md-6 col-lg-4">
                                                                                    <p className="mt-1 col-med">
                                                                                        Created Date : <span className="mb-1 col-black">12/07/2023</span>
                                                                                    </p>
                                                                                    <p className="mt-1 col-med">
                                                                                        Financial Year : <span className="mb-1 col-black">2023 - 2024</span>
                                                                                    </p>
                                                                                </div>
                                                                                <div className="col-md-6 col-lg-4">
                                                                                    <p className="mt-1 col-med">
                                                                                        Phone : <span className="mb-1 col-black">0122 345 6789</span>
                                                                                    </p>
                                                                                    <p className="mt-1 col-med">
                                                                                        Email : <span className="mb-1 col-black">drdoctor.gmail.com</span>
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
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
