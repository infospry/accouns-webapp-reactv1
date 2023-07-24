import React from 'react'
import LeftSidebar from '../../components/LeftSidebar';
import TwoFactorAuthentication from './TwoFactorAuthentication';
import Image from 'next/image'
import padlock from '@/app/images/padlock.png'


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
              <div className="form-group row">
                <label className="control-label col-md-4 col-sm-4 col-12" htmlFor="txtCurrentPassword">
                  Password <span>*</span>
                </label>
                <div className="col-md-6 col-sm-6 col-12">
                  <input type="password" id="txtCurrentPassword" className="form-control" placeholder="Current password" />
                </div>
              </div>
              <div className="form-group row">
                <label className="control-label col-md-4 col-sm-4 col-12" htmlFor="txtNewPassword">
                  New Password <span>*</span>
                </label>
                <div className="col-md-6 col-sm-6 col-12">
                  <input type="password" id="txtNewPassword" className="form-control" maxLength="20" placeholder="New password" />
                  <span className="show-pass" >
                    <i className="fa fa-eye"></i>
                  </span>
                  <div id="popover-password" style={{ display: 'none' }}>
                    <p><span id="result"></span></p>
                    <div className="progress">
                      <div id="passwordstrength" className="progress-bar" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{ width: '0%' }}></div>
                    </div>
                    <ul className="list-unstyled ms-2 text-start">
                      <li className="">
                        <span className="low-upper-case">
                          <i className="fa fa-circle" aria-hidden="true"></i>
                          &nbsp;Lowercase &amp; Uppercase
                        </span>
                      </li>
                      <li className="">
                        <span className="one-number">
                          <i className="fa fa-circle" aria-hidden="true"></i>
                          &nbsp;Number (0-9)
                        </span>
                      </li>
                      <li className="">
                        <span className="one-special-char">
                          <i className="fa fa-circle" aria-hidden="true"></i>
                          &nbsp;Special Character (!#$%^&amp;*)
                        </span>
                      </li>
                      <li className="">
                        <span className="eight-character">
                          <i className="fa fa-circle" aria-hidden="true"></i>
                          &nbsp;At least 8 Characters
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="form-group row">
                <label className="control-label col-md-4 col-sm-4 col-12" htmlFor="txtConfirmPassword">
                  Confirm Password <span>*</span>
                </label>
                <div className="col-md-6 col-sm-6 col-12">
                  <input type="password" id="txtConfirmPassword" className="form-control" maxLength="20" placeholder="Confirm password" />
                  <span className="show-pass" >
                    <i className="fa fa-eye"></i>
                  </span>
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-6 col-sm-6 offset-sm-4">
                  <hr />
                  <a id="btnPasswordUpdateEmployer" className="btn btn-primary">Update</a>
                  <a id="btnCancelPasswordUpdate" className="btn btn-outline-danger clickmode" data-hide=".editableDiv" data-show=".divdemo">
                    <i className="zmdi zmdi-close"></i>Cancel
                  </a>
                </div>
              </div>
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
