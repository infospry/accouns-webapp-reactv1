"use client"
import Head from "next/head";
import Link from "next/link";
import ApiEndPoints from "../../utils/ApiEndPoints";
import { post } from "../../services/api_axios_services";

const signup = () => {
    const signup = async(e) => {
        let strJsonString = ns_validations.signUp(e.target);
        if (strJsonString !== false) {
            const resp = await post(strJsonString, ApiEndPoints.login);
            console.log(resp)
            let action=$(e.target).attr("data-action");
            if (resp.response_status === "OK") {
                if (action == 'sign-up') {
                    var otp = resp.response[0].otp_code;
                    if (otp > 0) {
                        $('.fststep').hide();
                        $('.secststep').show();
                        $('#span_otp_code').text(resp.response[0].otp_code);
                        $('#btnSbmtOtp').attr('data-id', resp.response[0].u_id);
                    }
                    else {
                        $('.fststep').hide();
                        $('.secststep').hide();
                        $('.thirdststep').show();
                    }
                }
                else if (action == 'forget-password') {
                    if (requestFor == "reset-link") {
                        $('#span_otp_code').text(resp.response[0].otp_code);
                        $('#btnSbmtOtp, #btnResetPswd').attr('data-id', resp.response[0].u_id);
                    }
                }
                var evt_hide = $(e.target).data('hide');
                var evt_show = $(e.target).data('show');
                if (evt_hide != "") { $(evt_hide).hide(); }
                if (evt_show != "") { $(evt_show).show(); }
            }
            else if (resp.response_status == "FAILED") {
                if (resp.error_code == 'email_exists') {
                    $('#baremobile').css('background', '#acacac');
                    $('#spanErrMobile').hide().text('');
                    $('#baremail').css('background', '#ff0000');
                    $('#spanErrEmail').show().text(resp.response_msg);
                }
                else if (resp.error_code == 'mobile_exists') {
                    $('#baremail').css('background', '#acacac');
                    $('#spanErrEmail').hide().text('');
                    $('#baremobile').css('background', '#ff0000');
                    $('#spanErrMobile').show().text(resp.response_msg);
                }
                alertmsg.msg("Error", resp.response_msg, "E");
            }
        }
        
    }
    const verifyMobile=async(e)=>{
        let  strJsonString = ns_validations.verifyMobile(e.target);
        if (strJsonString !== false) {
            const resp = await post(strJsonString, ApiEndPoints.login);
            console.log(resp)
            let action=$(e.target).attr("data-action");
            if (resp.response_status === "OK") {
                if (action == 'verify-mobile') {
                    $('.secststep').hide();
                    $('.thirdststep').show();
                    alertmsg.msg("Message", resp.response_msg, "S");
                }
                var evt_hide = $(e.target).data('hide');
                var evt_show = $(e.target).data('show');
                if (evt_hide != "") { $(evt_hide).hide(); }
                if (evt_show != "") { $(evt_show).show(); }
            }
            else if (resp.response_status == "FAILED") {
                alertmsg.msg("Error", resp.response_msg, "E");
            }
        }
    }
    const emptyPwdStrength=()=>{
        $('.password_strength').empty()
    }
    return (<>
        <Head>
            <title>SignUp</title>
        </Head>
        <div className="full-width-wrapper">
            <div className="container">
                <div className="row justify-content-center">
                <div className="col-lg-6 col-xl-5 col-md-9 col-sm-10">

                        <form className="card auth_form create_area_hide">
                            <div className="header text-center pb-0">
                                <h1 className="mb-0"><span className="col-black">Create New Account </span> </h1>
                            </div>

                            <div className="body pt-3">
                                <div className="signup_sec fststep">
                                    <ul className="vcv-timeline mb-3">
                                        <li className="vcv-timeline-item vcv-step-done" data-step="1" data-step-title=""><span>Account</span></li>
                                        <li className="vcv-timeline-item" data-step="2"><span>Verify</span></li>
                                        <li className="vcv-timeline-item" data-step="3"><span>Thank You</span></li>
                                    </ul>
                                    <div className="row mt-2">
                                        <div className="col-6 pe-0">
                                            <div className="group">
                                                <input type="text" id="txt_name" autoComplete="off" required="required" />
                                                <label htmlFor="txt_name"><i className="zmdi zmdi-account">&nbsp;</i> Name</label>
                                                <div className="bar"></div>
                                            </div>
                                        </div>
                                        <div className="col-6 ps-1">
                                            <div className="group">
                                                <input type="text" id="txt_org_name" required="required" autoComplete="off" />
                                                <label htmlFor="txt_org_name"><i className="zmdi zmdi-city-alt">&nbsp;</i>Company</label>
                                                <div className="bar"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="group">
                                        <input type="text" className="allow-email-only" id="txt_email" required="required" autoComplete="off" />
                                        <label htmlFor="txt_email"><i className="zmdi zmdi-email-open">&nbsp;</i>Your Email</label>
                                        <div className="bar" id="baremail"></div>
                                        <span id="spanErrEmail" style={{display:"none",color:"red"}}></span>
                                    </div>
                                    <div className="group">
                                    <input type="password" className="check-password-strength" onBlur={emptyPwdStrength}  id="txt_password" required="required"  autoComplete="off" />
                                        <label htmlFor="txt_password"><i className="zmdi zmdi-lock col-grey">&nbsp;</i>Password</label>
                                        <span className="password_strength"></span>
                                        <span toggle="#txt_password" className="zmdi field-icon toggle-password zmdi-eye col-grey"></span>
                                        <div className="bar"></div>
                                    </div>
                                    <div className="group">
                                    <input type="text" className="allow-numbers-only" id="txt_mobile" required="required" autoComplete="off" maxLength="11" />
                                        <label htmlFor="txt_mobile"><i className="zmdi zmdi-phone">&nbsp;</i>Your Mobile</label>
                                        <div id="baremobile" className="bar"></div>
                                        <span id="spanErrMobile" style={{display:"none",color:"red"}}></span>
                                    </div>
                                    <div className="group">
                                    <input type="text" id="txt_website" className="allow-url-only" autoComplete="off" required="required" />
                                        <label htmlFor="txt_website"><i className="zmdi zmdi-pin">&nbsp;</i>Website</label>
                                        <div className="bar"></div>
                                    </div>

                                    <div className="me-sm-2">
                                        <div className="form-check me-sm-2">
                                            <input type="checkbox" className="form-check-input" id="chkTerms" />
                                            <label className="form-check-label f50" htmlFor="chkTerms" style={{cursor:"pointer"}}>
                                                You are agreeing with our Terms and Privacy Policy
                                            </label>
                                        </div>
                                        <span className="lbltermsError" style={{display:"none",color:"red"}}>
                                            You must accept the terms and conditions to register an account
                                        </span>
                                    </div>

                                    <div className="mt-4 mb-3 text-center w-100">
                                        <button onClick={signup} data-action="sign-up" data-action-on="account" className="btn btn-primary btn-lg btn-block waves-effect waves-light mt-3 mb-4 clickmode" >  <b>Continue</b> →</button>
                                        <p className="text-center col-grey">Already have an account?
                                            <Link href="/" className="col-blue ms-2 email-send-btn"><b> Sign in </b>  →</Link></p>
                                    </div>
                                </div>


                                <div className="signup_sec ddnone secststep">
                                    <ul className="vcv-timeline mb-1">
                                        <li className="vcv-timeline-item vcv-step-done" data-step="1" data-step-title=""><span>Account</span></li>
                                        <li className="vcv-timeline-item vcv-step-done" data-step="2"><span>Verify</span></li>
                                        <li className="vcv-timeline-item" data-step="3"><span>Thank You</span></li>
                                    </ul>
                                    <div className="s mt-2">
                                        <div className="logo_sign text-center">
                                            <i className="zmdi zmdi-check-circle zmdi-hc-3x text-success"></i>
                                            <h5>Verification Process</h5>
                                            <p>Please enter OTP we have sent you </p>
                                        </div>
                                        <div className="form_main mt-3">
                                            <div className="row mt-8 mb-3">
                                                <div className="col-6">
                                                    <input id="txt_otp_code" type="text" className="form-control allow-numbers-only partitioned" placeholder="Enter otp code" maxLength="6" autoComplete="off" />
                                                </div>
                                                <span id="span_otp_code"></span>
                                            </div>
                                            <div className="row mt-4 mb-3">
                                                <div className="col-6"><p className=""><span className="">Trying to Auto Capture</span> </p></div>
                                                <div className="col-6 text-right"><p className=""><span className="">00:40</span></p></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="" className="text-center mt-4">
                                        <hr />
                                        <button id="btnSbmtOtp" onClick={verifyMobile} className="btn btn-primary btn-lg evt-user-accountt" data-id="0" data-action="verify-mobile" data-action-on="account">Verify</button>
                                    </div>
                                </div>

                                <div className="signup_sec ddnone thirdststep">
                                    <ul className="vcv-timeline mb-1">
                                        <li className="vcv-timeline-item vcv-step-done" data-step="1" data-step-title=""><span>Account</span></li>
                                        <li className="vcv-timeline-item vcv-step-done" data-step="2"><span>Verify</span></li>
                                        <li className="vcv-timeline-item vcv-step-done" data-step="3"><span>Thank You</span></li>
                                    </ul>
                                    <div className="form_main mt-4">
                                        <div className="d-flex align-items-center justify-content-center mt-3">
                                            <div className="thAnKmAiN text-center">
                                                <i className="zmdi zmdi-check-circle zmdi-hc-3x text-success"></i>
                                                <h5>Your account has been created successfully.</h5>
                                                <p>Please verify it by clicking the activation link that has been sent to your email</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
export default signup;
