'use client'
import Link from "next/link";

import Image from 'next/image';
import { useEffect } from 'react'
import { useState } from 'react';
import Head from 'next/head';
import logo from '../../images/logog.png';
import { useForm } from 'react-hook-form';
import { loginUser } from '../../services/auth';
// import { useRouter } from 'next/router';
import { useRouter } from 'next/navigation'

import { setCookie } from 'cookies-next';

const LogIn = () =>{
//#region 

const [forgotPassVisible, setForgotPassVisible] = useState(false);

const handleForgotPasswordClick = () => {
  setForgotPassVisible(true);

  // Hide the login_area_hide element
  const loginArea = document.querySelector('.login_area_hide');
  if (loginArea) {
    loginArea.style.display = 'none';
  }
};


const [resetAreaVisible, setResetAreaVisible] = useState(false);

const handleResetLinkClick = () => {
  setResetAreaVisible(true);

  // Hide the forgot_passarea element
  const forgotPassArea = document.querySelector('.forgot_passarea');
  if (forgotPassArea) {
    forgotPassArea.style.display = 'none';
  }
};
const [resetAreaPasswordVisible, setResetAreaPasswordVisible] = useState(false);

const handleVerifyOTPClick = () => {
  setResetAreaPasswordVisible(true);

  // Hide the resetarea element
  const resetArea = document.querySelector('.resetarea');
  if (resetArea) {
    resetArea.style.display = 'none';
  }
};
const [thanksPasswordVisible, setThanksPasswordVisible] = useState(false);

const handleResetPasswordClick = () => {
  setThanksPasswordVisible(true);
  setResetAreaPasswordVisible(false);
};

 //#endregion
    
    const router=useRouter();
    const {register,handleSubmit,formState:{errors}}=useForm();
    // const [username,setUsername]=useState("neetuisin@gmail.com");
    // const [password,setPassword]=useState("Abc@1234");
    // const [username,setUsername]=useState("info@infospry.com");
    // const [password,setPassword]=useState("Jit@2021");
    const [username,setUsername]=useState();
    const [password,setPassword]=useState();
    // const [login_parameter, setLogin_parameter] = useState({
    //    username: '',
    //    password: ''
    // });
    const handleChange=(e)=>{
        console.log(e)
        //setLogin_parameter({[e.target.name]:e.target.value});
        
    }
    const login=async(e)=>{ 
        ns_util.replace_html_in_element("#btnLogin", 'Loading...<i className="fa fa-spinner fa-pulse"></i>')
        var signin = {
            "sign_in": {
                "user_name": e.username,
                "password": e.password,
            },
            "log_history": {
                "browser_name": "", "ip_address": "",
            },
            "action": "sign-in-v2",
            "action_on": "account"
        }
     

       var serverResponse= await loginUser(signin);
       if (serverResponse.response_status == "OK") {
        $('.spanErrMsg').hide().text('');
        var userInfo = serverResponse.response[0].signin_info[0];
        var nCookie = serverResponse.token_info + '#' + userInfo.user_name + '#' + userInfo.user_email + '#' + userInfo.org_user_type;
        ns_util.setCookie(ns_util.loginCookieName, nCookie, 1);
        setCookie(ns_util.loginCookieName, nCookie, 1)
        localStorage.setItem(ns_util.navLocalStorageName, JSON.stringify(serverResponse));
        router.push("/dashboard")
    }
    else {
        $('.spanErrMsg').show().text(serverResponse.response_msg);
        alertmsg.msg("Error", serverResponse.response_msg, "E");
    }
    }
    const emptyPwdStrength=()=>{
        $('.password_strength').empty()
    }

    return (
        <>
   
   <div className="full-width-wrapper">
    <div className="container">
        <div className="row justify-content-center">  
            <div className="col-lg-6 col-xl-5 col-md-9 col-sm-10">

                 <form onSubmit={handleSubmit(login)}  className="card auth_form login_area_hide">
                    <div className="header text-left"> 
                    <Image className="m-auto" src={logo} alt="logo" style={{height:"39px",width:"101px"}} />                      
                        <p className="mt-4 mb-0 col-grey"><span className="font-24 col-black">Join as a professional</span> <br/>
                            Free to get started, instant online activation
                        </p>
                    </div>
                    <div className="body pt-1">
                        <div className="group">
                            <input type="text" id="username" onChange={(e)=>setUsername(e.target.value)} value={username} 
                            name="username"  {...register('username',{required:true})} autoComplete="username" />
                            <label htmlFor="username"><i className="zmdi zmdi-email-open">&nbsp;</i>Your Email</label>
                            {errors.username && errors.username.type=="required" && <p className="text-danger">Please enter user name</p>}
                            <div className="bar"></div>
                        </div>
                        <div className="group">
                            <input type="password" id="password" name="password" 
                             onChange={(e)=>setPassword(e.target.value)}
                             onCopy={(e)=>{return false;} } onPaste={(e)=>{return false;} }
                            value={password} {...register('password',{required:true})} autoComplete="current-password" />
                            <label htmlFor="password"><i className="zmdi zmdi-lock">&nbsp;</i> Password</label>
                            <span toggle="#password" className="zmdi field-icon toggle-password zmdi-eye col-grey"></span>
                            {errors.password && errors.password.type=="required" && <p className="text-danger">Please enter password</p>}
                            <div className="bar"></div>
                        </div>
                        <div className="form-group">
                            <div className="row">
                                <div className="col-6 pe-0">
                                    <div className="checkbox">
                                        <input id="remember_me" type="checkbox" />
                                        <label htmlFor="remember_me">Remember Me </label>
                                    </div>
                                </div>
                                <div className="col-6 ps-0">
                                    <div className="float-right">
                                        <a href="#" className="col-blue"onClick={handleForgotPasswordClick} ><b>Forgot Password</b></a> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 mb-3 text-center">
                            <button type='submit' id="btnLogin" data-action="sign-in" data-action-on="account" className="btn btn-primary btn-lg btn-block waves-effect waves-light mt-3 mb-4"><span><b>Sign in</b>→</span></button>
                            <p className="text-center col-grey">Do not have an account?
                            <Link href="/signup" className="col-blue ms-2 create-send-btn"><><b>Sign Up Now</b> →</></Link></p>                                    
                        </div>
                    </div>
                </form>

                <form className={`card auth_form ${forgotPassVisible ? 'forgot_passarea' : 'ddnone'} ps-4 pe-4 pt-3`}>
                    <div className="header text-center ps-3 pe-3 pt-3 pb-0 mt-3">
                        <h1 className="mb-0"><span className="col-black">Reset Password? </span> </h1>
                        <p className="mt-0 mb-0 col-grey">If you have forgotten your password, enter your e-mail address and we will send you an e mail telling you how to recover it.</p>
                    </div>
                    <div className="body pt-3">
                        <div className="group">
                            <input type="text" id="txt_email" required="required" autoComplete="off" />
                            <label htmlFor="email"><i className="zmdi zmdi-email-open">&nbsp;</i> Mobile number or Email Id</label>
                            <div className="bar"></div>
                        </div>
                        <div className="group mt-4 mb-4 text-center">
                            <a href="#" className="btn btn-primary btn-lg btn-block evt-user-account" data-action="forget-password" data-request-for="reset-link"onClick={handleResetLinkClick}> Send A Link to Reset </a>
                        </div>
                    </div>
                </form>
                <form className={`card auth_form ${resetAreaVisible ? 'resetarea' : 'ddnone'} ps-4 pe-4 pt-3`}>
                    <div className="logo_sign text-center">
                        <i className="zmdi zmdi-check-circle zmdi-hc-3x text-success"></i>
                        <h5>OTP Process </h5>
                        <p>Please enter OTP we have sent you </p>
                    </div>
                    <div className="body pt-3">
                        <div className="row mt-8 mb-3 justify-content-center">
                            <div className="col-6">
                                <input id="txt_otp_code" type="text" className="form-control allow-numbers-only" placeholder="Enter otp code" maxLength="6" autoComplete="off" />
                            </div>
                            <span id="span_otp_code"></span>
                        </div>
                        <div className="row mt-4 mb-3  justify-content-center">
                            <div className="col-6 col-lg-5"><p className=""><span className="">Trying to Auto Capture</span> </p></div>
                            <div className="col-6 text-end col-lg-6"><p className=""><span className="">00:40</span></p></div>
                        </div>
                        <div className="mt-4 mb-4 text-center">
                            <a id="btnSbmtOtp" className="btn btn-primary btn-lg btn-block evt-user-account" data-action="forget-password" data-request-for="verify-otp" data-id="0" onClick={handleVerifyOTPClick}> Submit </a>
                        </div>
                    </div>
                </form>

                <form className={`card auth_form ${resetAreaPasswordVisible ? 'resetareapasswordd' : 'ddnone'} ps-4 pe-4 pt-3`}>
                    <div className="header text-center ps-3 pe-3 pt-3 pb-0">
                        <h1 className="mb-0"><span className="col-black">Change Password </span> </h1>
                    </div>
                    <div className="body pt-3">
                        <div className="group">
                            <input type="password" id="txt_pswd" className="check-password-strength" autoComplete="new-password" onBlur={emptyPwdStrength} onCopy={(e)=>{return false;} } onPaste={(e)=>{return false;} }/>
                            <label><i className="zmdi zmdi-lock col-grey">&nbsp;</i>New Password</label>
                            <span id="password_strength" className="password_strength"></span>
                            <span toggle="#txt_pswd" className="zmdi field-icon toggle-password zmdi-eye col-grey"></span>
                            <div className="bar"></div>
                        </div>
                        <p>
                            <span className="badge badge-light">8 Charactors</span> <span className="badge badge-light">1 Special</span> <span className="badge badge-light">1 Uppercase</span> <span className="badge badge-light">1 Numeric</span>
                        </p>
                        <div className="group">
                            <input type="password" id="txt_confirm_pswd" autoComplete="new-password" onCopy={(e)=>{return false;} } onPaste={(e)=>{return false;} } />
                            <label><i className="zmdi zmdi-lock-open col-grey"></i> Confirm New Password</label>
                            <span toggle="#txt_confirm_pswd" className="zmdi field-icon toggle-password zmdi-eye col-grey"></span>
                            <div className="bar"></div>
                        </div>
                        <div className="mt-4 mb-4 text-center">
                            <a id="btnResetPswd" className="btn btn-primary btn-lg btn-block evt-user-account" data-id="0" data-action="forget-password" data-request-for="reset-password" onClick={handleResetPasswordClick}> Reset Password </a>
                        </div>
                    </div>
                </form>
                <div className={`card pb-5 thankspasswordd ${thanksPasswordVisible ? '' : 'ddnone'}`}>
                    <div className="d-flex align-items-center justify-content-center mt-4">
                        <div className="thAnKmAiN text-center mt-4">
                            <i className="zmdi zmdi-check-circle zmdi-hc-3x text-success"></i>
                            <h5>Your Password has been changed successfully</h5>
                            <button  className="btn btn-primary btn-lg btn-block mt-3"> Login </button>
                        </div>
                    </div>
                </div>              
            </div>            
        </div>
    </div>
</div>

        </>
    );
};
export default LogIn;