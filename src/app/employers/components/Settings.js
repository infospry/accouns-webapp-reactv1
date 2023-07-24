import React from 'react'
import BasicDetails from './Settings/BasicDetails'
import JobRole from './Settings/JobRole'
import ShiftTimes from './Settings/ShiftTimes'
import Documents from './Settings/Documents'
import NotificationSetting from './Settings/NotificationSetting'
import Location from './Settings/Location'

const Settings = () => {
    return (
        <>

            <div className="profilesectioncontent">
                <div className="card">
                    <div className="row  justify-content-center">
                        <div className="col-md-12 col-lg-11 col-xl-11">
                            <div className="firstinfo">
                                <div className="avatar-upload">
                                    <div className="avatar-preview profile_avtar cropme" id="landscape"> <img
                                        id="CndProfileImgBig"
                                        className="profileImgBig img-responsive rounded-circle FullprofileImgBig img pict mr-2"
                                        src="profile.jpg" alt="No image" />
                                    </div>
                                </div>
                                <div className="profileinfo">
                                    <div className="row">
                                        <div className="col-12">
                                            <h3 className="col-med"> Healthcare Reload Agnecy </h3>
                                        </div>
                                        <div className="col-md-6 col-lg-4">
                                            <p className="mt-1 col-med">Industry : <span className="mb-1 col-black">
                                                Healthcare</span></p>
                                            <p className="mt-1 col-med">Company Id : <span className="mb-1 col-black">
                                                XY12345</span></p>
                                        </div>
                                        <div className="col-md-6 col-lg-4">
                                            <p className="mt-1 col-med">Created Date : <span
                                                className="mb-1 col-black">12/07/2023</span>
                                            </p>
                                            <p className="mt-1 col-med">Financial Year :
                                                <span className="mb-1 col-black"> 2023 -
                                                    2024</span>
                                            </p>
                                        </div>
                                        <div className="col-md-6 col-lg-4">
                                            <p className="mt-1 col-med">Phone : <span className="mb-1 col-black">0122
                                                345
                                                6789</span></p>
                                            <p className="mt-1 col-med">Email : <span className="mb-1 col-black">
                                                drdoctor.gmail.com</span></p>
                                        </div>
                                    </div>
                                </div>
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
                    <BasicDetails></BasicDetails>
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
