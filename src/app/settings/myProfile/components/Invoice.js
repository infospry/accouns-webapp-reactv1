import React from 'react'

function Invoice() {
  return (
    <div className="row justify-content-center">
      <div className="col-lg-12">
        <div className="row mt-0 mb-1 justify-content-center">
          <div className="col-md-12 col-lg-10">
            {/* Invoice Setting Panel */}
            <div className="panel-group">
              <div className="panel panel-primary bdr mt-4">
                <div className="panel-body pt-0 pb-0">
                  <div className="row">
                    <div className="col-sm-12 formbg p-0">
                      <div className="avt_bg d-flex justify-content-between align-items-center">
                        <h3 className="mb-0">
                          <b>Invoice Setting</b>
                        </h3>
                        <button
                          className="cross add-contact-cross clickmode dd_none Invoice_cross"
                          data-hide=".edit_Invoice_info, .Invoice_cross"
                          data-show=".View_Invoice_info, .Invoice_edit"
                        >
                          <i className="zmdi zmdi-close" aria-hidden="true"></i>
                        </button>
                        <a
                          className="btn btn-sm btn-primary clickmode Invoice_edit"
                          data-hide=".View_Invoice_info, .Invoice_edit"
                          data-show=".edit_Invoice_info, .Invoice_cross"
                        >
                          <i className="zmdi zmdi-edit"></i> Edit
                        </a>
                      </div>
                      <div className="p-4 bdr_b1 View_Invoice_info">
      <div className="row justify-content-start">
        <div className="col-12 col-lg-6">
          <h4>Company</h4>
          <p className="mb-3 profileView">
            <span className="col-black font-16 font-600">InfoPersonal Pvt.Ltd.</span>
          </p>
        </div>
        <div className="col-12 col-lg-6">
          <h4>Invoice Header</h4>
          <p className="mb-3 roleView">
            <span className="col-black font-16 font-600">---</span>
          </p>
        </div>
        <div className="col-12 col-lg-6">
          <h4>Payment Terms</h4>
          <p className="mb-3">
            <span className="col-black font-16 font-600">30 Days</span>
          </p>
        </div>
        <div className="col-12 col-lg-6">
          <h4>Reference No.<span className="red">*</span></h4>
          <p className="mb-3">
            <span className="col-black font-16 font-600">123456789123456</span>
          </p>
        </div>
        <div className="col-12 col-lg-6">
          <h4>P.O. No.<span className="red">*</span></h4>
          <p className="mb-3">
            <span className="col-black font-16 font-600">----</span>
          </p>
        </div>
        <div className="col-12 col-lg-6">
          <h4>Create Date<span className="red">*</span></h4>
          <p className="mb-3">
            <span className="col-black font-16 font-600">DD/MM/YYYY</span>
          </p>
        </div>
        <div className="col-12 col-lg-6">
          <h4>Last Update Date<span className="red">*</span></h4>
          <p className="mb-3">
            <span className="col-black font-16 font-600">DD/MM/YYYY</span>
          </p>
        </div>
        <div className="col-12 col-lg-12">
          <h4>Message<span className="red">*</span></h4>
          <p className="mb-3">
            <span className="col-black font-16 font-600">-----</span>
          </p>
        </div>
        <div className="col-12 col-lg-12">
          <h4>Footer Note<span className="red">*</span></h4>
          <p className="mb-3">
            <span className="col-black font-16 font-600">
              Thank you for your Business,<br />
              Our payment terms are 30 days from the date of invoice.
            </span>
          </p>
        </div>
        <div className="col-md-12 mb-2 text-center">
          <hr className="m-0 mb-4" />
          <button
            value="Submit"
            className="btn btn-primary btn-lg clickmode Invoice_edit"
            data-hide=".View_Invoice_info, .Invoice_edit"
            data-show=".edit_Invoice_info, .Invoice_cross"
          >
            <b>Edit</b>
          </button>
        </div>
      </div>
    </div>
    <div className="p-4 bdr_b1 dd_none edit_Invoice_info">
      <div className="row justify-content-start">
        <div className="col-12 col-lg-6">
          <div className="form-group">
            <h4>Company</h4>
            <input
              className="form-control form-control-lg mt-1"
              placeholder="Enter Company Name"
            />
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="form-group">
            <h4>Invoice Header</h4>
            <input
              className="form-control form-control-lg mt-1"
              placeholder="Enter invoice header"
            />
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="form-group">
            <h4>Payment Terms<span className="red">*</span></h4>
            <select className="form-control mt-1 form-control-lg mt-1">
              <option data-role-id="0" data-rate="0" value="0" selected="selected">
                Select
              </option>
            </select>
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <div className="form-group">
            <h4>Create Date</h4>
            <input className="form-control form-control-lg mt-1" placeholder="DD/MM/YYYY" />
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="form-group">
            <h4>Last Update Date</h4>
            <input className="form-control form-control-lg mt-1" placeholder="DD/MM/YYYY" />
          </div>
        </div>

        <div className="col-12">
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="form-group">
                <h4>Reference No</h4>
                <div className="d-flex justify-content-start align-items-center mt-1">
                  <div className="checkbox inlineblock m-r-20">
                    <input
                      type="checkbox"
                      id="chkpref-1"
                      className="with-gap clschkpref"
                      value="1"
                      name="show"
                    />
                    <label htmlFor="chkpref-1">Show</label>
                  </div>
                  <div>
                    <input
                      className="form-control form-control-lg"
                      placeholder="Enter Reference No."
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="form-group">
                <h4>P.O. No</h4>
                <div className="d-flex justify-content-start align-items-center mt-1">
                  <div className="checkbox inlineblock m-r-20">
                    <input
                      type="checkbox"
                      id="chkpref-2"
                      className="with-gap clschkpref"
                      value="1"
                      name="show"
                    />
                    <label htmlFor="chkpref-2">Show</label>
                  </div>
                  <div>
                    <input className="form-control form-control-lg" placeholder="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <div className="form-group">
            <h4>Message</h4>
            <textarea className="form-control form-control-lg mt-1"></textarea>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="form-group">
            <h4>Footer Note</h4>
            <textarea className="form-control form-control-lg mt-1"></textarea>
          </div>
        </div>
        <div className="col-md-12 mb-2 text-center">
          <hr className="m-0 mb-4" />
          <a
            className="btn btn-primary btn-lg clickmode dd_none Invoice_cross"
            data-hide=".edit_Invoice_info, .Invoice_cross"
            data-show=".View_Invoice_info, .Invoice_edit"
          >
            <b>Update</b>
          </a>
          <button
            className="btn btn-outline-danger btn-lg clickmode dd_none Invoice_cross"
            data-hide=".edit_Invoice_info, .Invoice_cross"
            data-show=".View_Invoice_info, .Invoice_edit"
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
            {/* Invoice Setting Panel End */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Invoice
