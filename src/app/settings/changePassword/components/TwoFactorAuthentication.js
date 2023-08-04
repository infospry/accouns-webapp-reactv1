
import React from 'react'
import Image from 'next/image'
import authentication from '@/app/images/authentication.png'
import pass from '@/app/images/pass.png'
import mail from '@/app/images/mail.png'
import security from "@/app/images/security.png"
import onlinePayment from "@/app/images/online-payment.png"

const TwoFactorAuthentication = () => {
    const togglePasswordVisibility = (inputId) => {
      const input = document.getElementById(inputId);
      input.type = input.type === 'password' ? 'text' : 'password';
    };
  
    return (
      <div className="bxsaddow mb-3">
        <h4>
          <i className="zmdi zmdi-lock mr-1"></i><b>Two Factor Authentication</b><br />
          <small>Use two-factor authentication to add an extra layer of security to your account</small>
        </h4>
        <div id="TwoFA_placeholder" className="p-3 pr-4 pl-4 bdr1 h4show">
          <div className="text-center mt-3 mb-3 tdivdemo partFst">
            <Image src={authentication} className="opacity_6 mb-2" alt="Authentication" /><br />
            <p><b>Set Two Factor Authentication</b><br />Use two-factor authentication to add an extra layer of security to your account</p>
            <a className="btn btn-primary cls2factor clickmode" data-action="change" data-hide=".tdivdemo" data-show=".teditableDiv">Activate Two Factor Authentication</a>
          </div>
          <div className="text-center p-2 mt-3 mb-3 divBackupcode">
            <Image src={pass} className="opacity_6 mb-2" alt="Backup code" /><br />
            <p><b>Backup verification code</b><br />These codes can be used to access your TheStaffPort account if you have trouble signing in</p>
            <a className="btn btn-primary cls2factor" data-action="generate_backup_code" data-toggle="modal" data-target="#modalVerification">Generate Backup Codes</a>
          </div>
          <div className="teditableDiv dd_none">
            <div className="row">
              <div className="col-md-12 mt-2 mb-3">
                <div className="plans row justify-content-center align-items-center">
                  <label htmlFor="rdo_sms_delivery" className="plan basic-plan col-md-6 col-lg-4">
                    <input id="rdo_sms_delivery" className="cls_rdo2fa" type="radio" name="rdo2fa" value="sms" />
                    <div className="plan-content align-items-center">
                      <Image src={mail} alt="Mail" className="opacity_6" />
                      <div className="plan-details">
                        <span>SMS Delivery</span>
                        <p>A text message will be sent to you for verification every time you log in.</p>
                        <p className="col-green font-bold text-right"> </p>
                      </div>
                    </div>
                  </label>
                  <label htmlFor="rdo_security_key" className="plan complete-plan col-md-6 col-lg-4">
                    <input id="rdo_security_key" className="cls_rdo2fa" type="radio" name="rdo2fa" value="security_key" />
                    <div className="plan-content align-items-center">
                      <Image src={security} className="opacity_6" alt="Security" />
                      <div className="plan-details">
                        <span>Security Pin</span>
                        <p>An extra layer of security to enter a minimum of 6-digit PIN every time you log in</p>
                        <p className="col-green font-bold text-right"> </p>
                      </div>
                    </div>
                  </label>
                  <label htmlFor="rdo_authenticator_app" className="plan Authenticator-plan col-md-6 col-lg-4">
                    <input id="rdo_authenticator_app" className="cls_rdo2fa" type="radio" name="rdo2fa" value="authenticator_app" />
                    <div className="plan-content align-items-center">
                      <Image src={onlinePayment} alt="Authenticator App" className="opacity_6" />
                      <div className="plan-details">
                        <span>Authenticator App</span>
                        <p>For growing businesses who want to create a rewarding place to work.</p>
                        <p className="col-green font-bold text-right"> </p>
                      </div>
                    </div>
                  </label>
                </div>
                <div>
                <div>
                                                            <div class="row">
                                                                <div class="col-md-10 offset-md-1 mt-4">
                                                                    <div class="col-md-4 offset-md-4 mt-4">
                                                                        <div class="form-floating mb-3 divtfaSecurityCodeBlock dd_none">
                                                                            <label for="txt_security_code" class="mb-2"><i class="fa fa-key"></i>Security
                                                                                Code</label> <input id="txt_security_code" type="password" class="form-control" maxlength="6" placeholder="Security Code"/> <span toggle="#txt_security_code" class="zmdi field-icon toggle-password2 zmdi-eye flatEye"></span>
                                                                           
                                                                        </div>
                                                                    </div>
                                                                    <div class="divtfaAppAuthenticatorBlock dd_none">
                                                                        <h3>Configure authenticator app</h3>
                                                                        <p>To use an authenticator app go through the
                                                                            following steps:</p>
                                                                        <ol class="list">
                                                                            <li>
                                                                                <p>
                                                                                    Download a two-factor
                                                                                    authenticator app like Microsoft
                                                                                    Authenticator for
                                                                                    <a href="https://go.microsoft.com/fwlink/?Linkid=825071">Windows
                                                                                        Phone</a>, <a href="https://go.microsoft.com/fwlink/?Linkid=825072">Android</a>
                                                                                    and <a href="https://go.microsoft.com/fwlink/?Linkid=825073">iOS</a> or
                                                                                    Google Authenticator for <a href="https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&amp;hl=en">Android</a>
                                                                                    and <a href="https://itunes.apple.com/us/app/google-authenticator/id388497605?mt=8">iOS</a>.
                                                                                </p>
                                                                            </li>
                                                                            <li>
                                                                                <p>Scan the QR Code or enter this key
                                                                                    <kbd id="appseckey">code</kbd> into
                                                                                    your two factor authenticator app.
                                                                                    Spaces and casing do not matter.</p>
                                                                            </li>
                                                                            <li>
                                                                                <p>
                                                                                    Once you have scanned the
                                                                                    QR code or input the key above, your
                                                                                    two factor authentication app will
                                                                                    provide you with a unique
                                                                                    code. Enter the code in the
                                                                                    confirmation box below.
                                                                                </p>
                                                                            </li>
                                                                        </ol>
                                                                        <div class="row">
                                                                            <div class="col-3">
                                                                                <div id="qrCode" class="border-1">
                                                                                </div>
                                                                                <div id="qrCodeData"></div>
                                                                            </div>
                                                                            <div class="col-9">
                                                                                <div class="col-md-12">
                                                                                    <div class="form-group"> <label for="txtAppVerificationCode" class="control-label">Enter
                                                                                            the verification
                                                                                            code</label> <input id="txtAppVerificationCode" class="form-control" placeholder="Enter code" autocomplete="off"/> <span toggle="#txtAppVerificationCode" class="zmdi field-icon toggle-password2 zmdi-eye"></span>
                                                                                        <span id="errorMsgAppVerification" class="text-danger"></span>
                                                                                    </div> <a id="verifyAppAuthCode" class="btn btn-primary">Verify</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="form-group text-center clsTwoFaBtn"> <a id="btnupdatetfa" class="btn btn-primary cls2factor" data-action="update_2FA">Update</a> <a class="btn btn-outline-danger  cls2factor" data-action="cancel" data-hide=".teditableDiv" data-show=".tdivdemo"><i class="zmdi zmdi-close">&nbsp;</i>Cancel
                                                                        </a> </div>
                                                                </div>
                                                            </div>
                                                        </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default TwoFactorAuthentication;