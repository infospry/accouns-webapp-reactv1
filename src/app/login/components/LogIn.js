
import Link from "next/link";
import '../../css/bootstrap.min.css';
import '../../css/login.css'
import Image from 'next/image'
import thestaffport_logo from '@/app/images/thestaffport_logo.png'

const LogIn = () =>{
    return (

        <>
       <div className="text-center contact-demo">
        <div className="container">
            <div className="row">
                {/* <!--Login--> */}
                <div className="col-lg-9 col-xxl-8 mx-auto">
                    {/* <!--Login --> */}
                    <div id="divLogin" className="login_section">
                        <div className="formdemo ">
                               <div className="clslogo mb-3">
                                <Link href="https://thestaffport.com/">   
                                <Image src={thestaffport_logo} alt="The StaffPort" className="img-fluid" />
                                </Link>
                            </div>
                            <h1 className="display-7 fw-bold mb-0"><span id="displayempname" className="ddnone"></span> Log in</h1>

                            <div className="form-floating mb-3 mt-3">
                                <input id="txtusername" type="email" className="form-control" placeholder="Enter email Id"/>
                                <label for="txtusername"><i className="fa fa-envelope-o"></i> Email address</label>
                            </div>
                            <div className="form-floating">
                                <input type="password" id="txtpassword" className="form-control" placeholder="Password"/>
                                <label for="txtpassword"><i className="fa fa-key"></i> Password</label>
                                <span toggle="#txtpassword" className="zmdi field-icon toggle-password zmdi-eye"></span>
                                
                            </div>
                            <div id="divlogmsg" className="text-start col-red  mb-3 p-2"></div>
                            <div className="text-start mb-3">
                                
                                <a id="forgot-password"onclick="showhide();" className="clickmode" data-hide=".login_section" data-show=".lost_password_div" tabindex="4"> Forgot Password?</a>

                            </div>
                            <a href="/dashboard" className="btn btn-primary mb-2 btn-block w-100">Log in →</a>

                            {/* <!-- <div className="text-center">
                                <p className="form-text col-grey"> Don't have an account? <a href="https://empapp.thestaffport.com/Account/Registration"> <b> Register Now</b></a></p>
                            </div> --> */}
                        </div>
                    </div>
                    {/* <!--Process Wait (After Login) --> */}
                    <div id="divLoginProcess" className="ddnone text-center"></div>
                </div>

                {/* <!--Authenticate 2fa--> */}

                <div className="authenticate_div ddnone"id="authenticate_div">
                    <div className="formdemo">
                        <h1 className="display-7 fw-bold mb-0">
                            <Image id="imgAuth" src="padlock.png" className="img-fluid" width="64" alt="logo"/>
                            <br/><span id="spanOTPVerificationTitle">Two Factor Authentication</span>
                        </h1>
                        <div id="divAuthenticateMsg" className="mt-3 mb-3 text-left"></div>
                        <div className="input-group justify-content-center">
                            <input id="txt_authenticate_securitycode" type="password" className="form-control me-1" placeholder="Enter code" maxlength="20"/>
                        </div>
                        <div id="div_resend_authenticate_otp" className="row align-items-center ddnone">
                            <div className="col-12 text-end">
                                <p className="form-text mb-0">
                                    <a id="btnresend_authenticate_otp" className="col-blue cls-emp-authenticate d-flex justify-content-end align-items-center" data-action="resendotp"><i className="zmdi zmdi-rotate-right mr-1"></i>Resend</a>
                                </p>
                            </div>
                            <span id="spanreq_authenticate_token" className="ddnone"></span>
                        </div>
                        <a id="btnsubmitcode_auth" className="btn  btn-primary btn-block w-100  mb-2 mt-3 cls-emp-authenticate" data-action="submit_code" data-hide=".authenticate_div" data-show=""> Submit</a>
                        <div className="text-center">
                            <p className="form-text"> <a className="clickmode text-danger" data-hide=".authenticate_div" data-show=".login_section">Cancel</a></p>
                            <a id="btn_having_truble_login_in" className="clickmode text-danger mt-5 col-blue  cls-emp-authenticate" data-action="having_truble_login_in" data-username="">Trouble logging in?</a>
                        </div>
                    </div>
                </div>


                <div className="login_bybackup_verification_div ddnone">
                    <div className="formdemo">
                        <h1 className="display-7 fw-bold mb-0">
                            <a className="clickmode text-danger mt-5 col-blue cls-emp-authenticate" data-action="back_to_having_truble_login_in">
                                <i className="fa fa-arrow-left mr-1"></i> Can not access your device
                            </a>
                        </h1>
                        <div>
                            <ul className="m-4">
                                <li className="text-left pl-2 cls-emp-authenticate" data-action="backup_verification_code">
                                    <a>
                                        <b>Use backup verification code</b>
                                        <div className="col-grey font-11">Backup verification code are 12 digit code that are given to you when you configure two factor authenticator.</div>
                                    </a>
                                </li>
                                <li className="text-left mt-4 pl-2">
                                    <a href="mailto:info@thestaffport.com">
                                        <b>Contact Administrator</b>
                                        <div className="col-grey font-11">
                                            If you are unable to sign in, contact you administrator<br/>
                                            <b id="spanadminemail" className="col-blue">info@thestaffport.com</b> for further assistance.
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* <!--Backup Recovery --> */}
                <div className="backupverificationcode_div ddnone" >
                    <div className="formdemo">
                        <h1 className="display-7 fw-bold mb-0">
                            <a className="clickmode text-danger mt-5 col-blue cls-emp-authenticate" data-action="back_to_backup_verification_code">
                                <i className="fa fa-arrow-left mr-1"></i> Use backup verification code
                            </a>
                            <div className="col-grey font-12 mt-1">Backup verification code are 12 digit code that are given to you when you configure two factor authenticator.</div>
                        </h1>
                        <div id="divbackupverificationcodeMsg" className="mt-3 mb-3 text-left"></div>
                        <div className="input-group justify-content-center">
                            <input id="txt_backup_verification_code" type="password" className="form-control me-1" placeholder="Enter code" maxlength="30"/>
                        </div>
                        <a id="btnsubmitcode_login_backupverificationcode" className="btn  btn-primary btn-block w-100  mb-2 mt-3"> Verify</a>

                    </div>
                </div>


                {/* <!--Recover password --> */}
                <div className="lost_password_div ddnone" >
                    <div className="formdemo">
                        <h1 className="display-7 fw-bold  mb-0"> Recover password</h1>
                        
                        <div id="forgotpasserror" className="col-red"></div>
                        <div className="form-floating mb-3 mt-3">
                            <input id="txt_forgot_email" type="email" className="form-control" placeholder="Enter email id"/>
                            <label for="txt_forgot_pass_email"><i className="fa fa-envelope-o"></i> Email address / Mobile Number<b className="col-red">*</b></label>
                        </div>
                        <a id="btnsend" className="btn btn-primary btn-block w-100  mb-2 cls-emp-forgotpass clickmode" data-action="submit_email" data-hide=".lost_password_div" data-show=".otp_div">Submit</a>
                        <div className="text-center">
                            <p className="form-text col-grey">
                                Remembered your password? <a className="clickmode col-blue" data-hide=".lost_password_div" data-show=".login_section"><b>Back to Log in</b></a>
                            </p>
                        </div>
                    </div>
                </div>
                {/* <!--Security Code--> */}
                <div className="otp_div ddnone"  >
                    <div className="formdemo">
                        <h1 className="display-7 fw-bold mb-0"> Enter Security code<b className="col-red">*</b></h1>
                        <p id="divOTPSendMsg"></p>
                        <div className="input-group mb-3 mt-3 justify-content-center">
                            <input id="txt_securitycode" type="text" className="form-control me-1" placeholder="Enter code"/>
                        </div>
                        <div className="row align-items-center mb-3">
                            <div className="col-12 text-end">
                                <p className="form-text mb-0">
                                    <a id="btnresendotp" className="col-blue cls-emp-forgotpass" data-action="resendotp">Resend</a>
                                </p>
                            </div>
                            
                            <span id="spanreqtoken" className="ddnone"></span>
                        </div>
                        <a id="btnsubmitcode" className="btn  btn-primary btn-block w-100  mb-2 cls-emp-forgotpass clickmode" data-action="submit_code" data-hide=".otp_div" data-show=".password_section_div"> Submit</a>
                        <div className="text-center">
                            <p className="form-text"> <a className="clickmode text-danger" data-hide=".otp_div" data-show=".login_section">Cancel</a></p>
                        </div>
                    </div>
                </div>
                {/* <!-- Change Password--> */}
                <div className="password_section_div ddnone" >
                    <div className="formdemo">
                        <h1 className="display-7 fw-bold mb-0"> Change Password</h1>
                        <p id="divMsgPass" className="col-red"></p>
                        <div className="form-floating mb-3">
                            <input id="txt_new_password" type="password" className="form-control strength" maxlength="20" placeholder="Enter new password"/>
                            <label for="txt_new_password"><i className="fa fa-key"></i> New password<b className="col-red">*</b></label>
                            <span className="show-pass" onclick="toggle('txt_new_password')">
                                <i className="fa fa-eye" onclick="myFunction(this)"></i>
                            </span>

                            <div id="popover-password" className="ddnone">
                                <p><span id="result"></span></p>
                                <div className="progress">
                                    <div id="passwordstrength" className="progress-bar" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width:"0%"}}>
                                    </div>
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
                                            &nbsp;Atleast 8 Character
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="form-floating mb-3">
                            <input id="txt_new_confirm_password" type="password" className="form-control" maxlength="20" placeholder="Enter confirm password"/>
                            <label for="txt_new_confirm_password"><i className="fa fa-key"></i> Confirm new password<b className="col-red">*</b></label>
                            <span className="show-pass" onclick="toggle('txt_new_confirm_password')">
                                <i className="fa fa-eye" onclick="myFunction(this)"></i>
                            </span>
                        </div>

                        <a className="btn btn-primary btn-block w-100  mb-2 cls-emp-forgotpass clickmode" data-action="submit_password" data-hide=".password_section_div" data-show=".success_block"> Submit →</a>
                        <div className="text-center">
                            <p className="form-text"> <a className="clickmode text-danger" href="https://empapp.thestaffport.com/">Cancel</a></p>
                        </div>
                    </div>
                </div>

                
                <div className="formdemo mt-5 text-center success_block ddnone" >
                    <h4 className="display-7 fw-bold mt-0 text-blue">Message </h4>
                    <p id="div_success_msg" className="form-text col-green"></p>
                    <hr/>
                    <p className="col-blue text-center"><Link href="/login"> <b> Login Now →</b></Link></p>
                </div>
                <div className="formdemo mt-5 text-center account_block ddnone">
                    <h4 className="display-7 fw-bold mt-0 text-blue">Message </h4>
                    <p id="divverifymsg" className="form-text col-green"></p>
                    <hr/>
                    <p className="col-blue text-center"><Link href="/login"> <b> Login Now →</b></Link></p>
                </div>

            </div>
        </div>
    </div>
        </>
    );
};
export default LogIn;