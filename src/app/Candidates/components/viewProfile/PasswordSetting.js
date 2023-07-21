import React from 'react'

function PasswordSetting() {
  return (
    <div className="row">
    <div className="col-md-8 offset-md-2 mt-4">
      <div className="card bdr5 p-0">
        <div className="header bdrb p-3" style={{ backgroundColor: '#e7f0fe2e' }}>
          <h2 className="col-black">
            <i className="zmdi zmdi-settings"></i> Password Setting
          </h2>
        </div>

        <div className="body p-1 text-left">
          <div className="form-group row mt-3">
            <label className="control-label col-md-3 col-sm-3 col-12 text-right" htmlFor="first-name">
              New Password <span>*</span>
            </label>
            <div className="col-md-6 col-sm-6 col-12">
              <input
                id="txtNewPassword"
                name="txtNewPassword"
                type="password"
                maxLength="20"
                className="form-control form-control-lg"
                placeholder="New password"
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="control-label col-md-3 col-sm-3 col-12 text-right" htmlFor="first-name">
              Confirm Password <span>*</span>
            </label>
            <div className="col-md-6 col-sm-6 col-12">
              <input
                id="txtConfirmPassword"
                name="txtConfirmPassword"
                type="password"
                maxLength="20"
                className="form-control form-control-lg"
                placeholder="Confirm password"
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-md-12 text-center">
              <hr />
              <button id="txtchangepassempcnd" type="submit" className="btn btn-primary btn-lg mr-1">
                Change
              </button>
              <button id="txtchangepassCancel" type="submit" className="btn btn-outline-primary btn-lg">
                <i className="zmdi zmdi-close"></i> Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default PasswordSetting
