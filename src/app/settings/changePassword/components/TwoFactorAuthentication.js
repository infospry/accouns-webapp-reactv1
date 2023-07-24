
import React from 'react'
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
            <img src="/authentication.png" className="opacity_6 mb-2" alt="Authentication" /><br />
            <p><b>Set Two Factor Authentication</b><br />Use two-factor authentication to add an extra layer of security to your account</p>
            <a className="btn btn-primary cls2factor clickmode" data-action="change" data-hide=".tdivdemo" data-show=".teditableDiv">Activate Two Factor Authentication</a>
          </div>
          <div className="text-center p-2 mt-3 mb-3 divBackupcode">
            <img src="/pass.png" className="opacity_6 mb-2" alt="Backup code" /><br />
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
                      <img src="/mail.png" alt="Mail" className="opacity_6" />
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
                      <img src="/security.png" className="opacity_6" alt="Security" />
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
                      <img src="/online-payment.png" alt="Authenticator App" className="opacity_6" />
                      <div className="plan-details">
                        <span>Authenticator App</span>
                        <p>For growing businesses who want to create a rewarding place to work.</p>
                        <p className="col-green font-bold text-right"> </p>
                      </div>
                    </div>
                  </label>
                </div>
                <div>
                  <div className="row">
                    <div className="col-md-10 offset-md-1 mt-4">
                      {/* Additional elements go here */}
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