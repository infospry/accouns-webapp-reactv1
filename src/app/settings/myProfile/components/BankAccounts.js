import React from 'react'

function BankAccounts() {
  return (
    <>
      <div className="row justify-content-center">
      <div className="col-lg-12">
        <div className="row mt-0 mb-1 justify-content-center">
          <div className="col-md-12 col-lg-10">
            {/* Bank Account Panel */}
            <div className="panel-group">
              <div className="panel panel-primary bdr mt-4">
                <div className="panel-body pt-0 pb-0">
                  <div className="row">
                    <div className="col-sm-12 formbg p-0">
                      <div className="avt_bg d-flex justify-content-between align-items-center">
                        <h3 className="mb-0">
                          <b>Bank Account</b>
                        </h3>
                        <button
                          className="cross add-contact-cross clickmode dd_none Bank_cross"
                          data-hide=".edit_Bank_info, .Bank_cross"
                          data-show=".View_Bank_info, .Bank_edit"
                        >
                          <i className="zmdi zmdi-close" aria-hidden="true"></i>
                        </button>
                        <a
                          className="btn btn-sm btn-primary clickmode Bank_edit"
                          data-hide=".View_Bank_info, .Bank_edit"
                          data-show=".edit_Bank_info, .Bank_cross"
                        >
                          <i className="zmdi zmdi-edit"></i> Edit
                        </a>
                      </div>
                      <div className="p-4 bdr_b1 View_Bank_info">
                        <div className="row justify-content-start">
                          <div className="col-12 col-lg-6">
                            <h4>Bank Name</h4>
                            <p className="mb-3 profileView">
                              <span id="" className="col-black font-16 font-600">
                                Personal
                              </span>
                            </p>
                          </div>
                          <div className="col-12 col-lg-6">
                            <h4>Sortcode</h4>
                            <p className="mb-3 roleView">
                              <span className="col-black font-16 font-600">123456</span>
                            </p>
                          </div>
                          <div className="col-12 col-lg-6">
                            <h4>Account Name</h4>
                            <p className="mb-3">
                              <span className="col-black font-16 font-600">Claire Cruce</span>
                            </p>
                          </div>
                          <div className="col-12 col-lg-6">
                            <h4>Account Number</h4>
                            <p className="mb-3">
                              <span className="col-black font-16 font-600">123456789123456</span>
                            </p>
                          </div>
                          <div className="col-md-12 mb-2 text-center">
                            <hr className="m-0 mb-4" />
                            <button
                              value="Submit"
                              className="btn btn-primary btn-lg clickmode Bank_edit"
                              data-hide=".View_Bank_info, .Bank_edit"
                              data-show=".edit_Bank_info, .Bank_cross"
                            >
                              <b>Edit</b>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="p-4 bdr_b1 dd_none edit_Bank_info">
                        <div className="row justify-content-start">
                          <div className="col-12 col-lg-6">
                            <div className="form-group">
                              <h4>
                                Bank Name<span className="red">*</span>
                              </h4>
                              <input className="form-control form-control-lg mt-1" placeholder="Enter Bank Name" />
                            </div>
                          </div>
                          <div className="col-12 col-lg-6">
                            <div className="form-group">
                              <h4>
                                Sortcode<span className="red">*</span>
                              </h4>
                              <input className="form-control form-control-lg mt-1" placeholder="Enter Sortcode" />
                            </div>
                          </div>
                          <div className="col-12 col-lg-6">
                            <div className="form-group">
                              <h4>
                                Account Name<span className="red">*</span>
                              </h4>
                              <input
                                className="form-control form-control-lg mt-1"
                                placeholder="Enter Account Name"
                              />
                            </div>
                          </div>
                          <div className="col-12 col-lg-6">
                            <div className="form-group">
                              <h4>
                                Account Number<span className="red">*</span>
                              </h4>
                              <input
                                className="form-control form-control-lg mt-1"
                                placeholder="Enter Account Number "
                              />
                            </div>
                          </div>
                          <div className="col-md-12 mb-2 text-center">
                            <hr className="m-0 mb-4" />
                            <a
                              className="btn btn-primary btn-lg clickmode dd_none Bank_cross"
                              data-hide=".edit_Bank_info, .Bank_cross"
                              data-show=".View_Bank_info, .Bank_edit"
                            >
                              <b>Update</b>
                            </a>
                            <button
                              className="btn btn-outline-danger btn-lg clickmode dd_none Bank_cross"
                              data-hide=".edit_Bank_info, .Bank_cross"
                              data-show=".View_Bank_info, .Bank_edit"
                            >
                              <b>Cancel</b>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Bank Account Panel End */}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default BankAccounts
