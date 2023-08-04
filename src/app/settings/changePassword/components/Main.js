
"use client"
import React from 'react'
import LeftSidebar from '../../components/LeftSidebar';
import TwoFactorAuthentication from './TwoFactorAuthentication';
import Image from 'next/image'
import padlock from '@/app/images/padlock.png'
import { useState } from 'react';


function Main() {




  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.currentPassword) {
      newErrors.currentPassword = 'Current password is required';
    }

    if (!formData.newPassword) {
      newErrors.newPassword = 'New password is required';
    } else if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Form is valid:', formData);
    } else {
      console.log('Form is invalid');
    }
  };
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
                                    <div class="inbox right rgtinbox">
                                        <div class="col-md-12 col-sm-12 p-0">
                                        <div className="bxsaddow mb-3">
      <h4>
        <i className="zmdi zmdi-lock mr-1"></i><b>Change Password</b> <br />
        <small>Change your account password often to prevent unauthorized access to your Account</small>
      </h4>
      <div className="p-3 pr-4 pl-4 bdr1 h4show">
        <div className="text-center mt-3 mb-3 divdemo">
          <Image src={padlock} className="opacity_6 mb-2" alt="Padlock" /><br />
          <p>Change your account password</p>
          <a className="btn btn-primary clickmode" data-hide=".divdemo" data-show=".editableDiv">Change Password</a>
        </div>
        <div className="dd_none editableDiv">
          <div className="row">
          <div className="col-md-8 offset-md-2 mt-4">
        <form onSubmit={handleSubmit}>
          <div className="form-group row">
            <label className="control-label col-md-4 col-sm-4 col-12" htmlFor="currentPassword">
              Password <span>*</span>
            </label>
            <div className="col-md-6 col-sm-6 col-12">
              <input
                type="password"
                id="currentPassword"
                className="form-control"
                placeholder="Current password"
                value={formData.currentPassword}
                onChange={handleChange}
              />
              {errors.currentPassword && <p className="text-danger">{errors.currentPassword}</p>}
            </div>
          </div>
          <div className="form-group row">
            <label className="control-label col-md-4 col-sm-4 col-12" htmlFor="newPassword">
              New Password <span>*</span>
            </label>
            <div className="col-md-6 col-sm-6 col-12">
              <input
                type="password"
                id="newPassword"
                className="form-control"
                maxLength="20"
                placeholder="New password"
                value={formData.newPassword}
                onChange={handleChange}
              />
              {errors.newPassword && <p className="text-danger">{errors.newPassword}</p>}
            </div>
          </div>
          <div className="form-group row">
            <label className="control-label col-md-4 col-sm-4 col-12" htmlFor="confirmPassword">
              Confirm Password <span>*</span>
            </label>
            <div className="col-md-6 col-sm-6 col-12">
              <input
                type="password"
                id="confirmPassword"
                className="form-control"
                maxLength="20"
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && <p className="text-danger">{errors.confirmPassword}</p>}
            </div>
          </div>
          <div className="form-group row">
            <div className="col-md-6 col-sm-6 offset-sm-4">
              <hr />
              <button type="submit" className="btn btn-primary mr-1">Update</button>
             
              <button type="button" className="btn btn-outline-danger clickmode" data-hide=".editableDiv" data-show=".divdemo">
                <i className="zmdi zmdi-close"></i>Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
          </div>
        </div>
      </div>
    </div>

<TwoFactorAuthentication/>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div id="modalVerification" className="modal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel2" aria-modal="true">
      <div className="modal-dialog modalwidthsmall" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <div className="row">
              <div className="col-md-12">
                <h4 className="modal-title" id="myModalLabel2">
                  Validate user request
                </h4>
              </div>
            </div>
          </div>
          <div className="modal-body pb-0">
            <div className="row">
              <div className="col-12">
                <div id="divOTPSendMsg"></div>
                <div id="divMessageBlock">Enter account password</div>
                <div>
                  <input
                    id="txt_otp"
                    type="password"
                    placeholder="Password"
                    className="form-control"
                  />
                </div>
                <span id="spanreqtoken"></span>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <div className="row">
              <div className="col-md-12">
                <div className="text-center">
                  <a
                    id="btnverifyTwoafOTP"
                    className="btn btn-primary btn-lg cls2factor"
                    data-action="verify_otp"
                    data-request=""
                    data-json=""
                  >
                    Submit
                  </a>
                  <a className="btn btn-outline-danger btn-lg" data-dismiss="modal">
                    <i className="zmdi zmdi-close"></i> Cancel
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      id="modalBackupVerificationCode"
      className="modal show"
      tabIndex="-1"
      role="dialog"
      data-backdrop="static"
      data-keyboard="false"
      aria-labelledby="myModalLabel2"
      aria-modal="true"
    >
      <div className="modal-dialog ui-draggable" role="document" style={{ width: '500px' }}>
        <div className="modal-content">
          <div className="modal-header ui-draggable-handle" style={{ width: '500px' }}>
            <div className="row">
              <div className="col-md-12">
                <h4 className="modal-title" id="myModalLabel2">
                  Backup verification code
                </h4>
              </div>
            </div>
          </div>

          <div className="modal-body" style={{ paddingBottom: '0px' }}>
            <div className="row">
              <div className="col-12">
                <p>
                  These codes can be used to access your TheStaffPort account if you have trouble signing in.
                </p>
                <div style={{ border: '1px dotted #ccc', padding: '10px', minHeight: '255px' }}>
                  <div id="BackupVerificationCode_placeholder"></div>
                  <div className="row">
                    <div className="col-8 offset-1 mt-3">
                      <a
                        id="btndownloadbackup"
                        className="btn btn-outline-primary btn-xs cls-backup-code"
                        data-action="download"
                        data-json=""
                      >
                        Download
                      </a>
                      <a
                        id="btncopybackup"
                        className="btn btn-outline-success btn-xs  cls-backup-code"
                        data-action="copy"
                        data-json=""
                      >
                        Copy
                      </a>
                    </div>
                  </div>
                </div>
                <ul style={{ color: '#dc3545' }}>
                  <li>Each code can be used only once.</li>
                  <li>For security reasons, these codes will not be displayed again.</li>
                  <li>Do not share these codes with anyone.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <div className="row">
              <div className="col-md-12">
                <div className="text-center">
                  <div id="btnBackupmsg" style={{ color: '#564d4d' }}>
                    You can close this pop up after you download or copy the codes.
                  </div>
                  <a
                    id="btnBackupclose"
                    className="btn btn-outline-danger btn-lg cls-backup-code"
                    style={{ display: 'none' }}
                    data-action="close"
                  >
                    <i className="zmdi zmdi-close"></i> Close
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        </>
    )
}

export default Main
