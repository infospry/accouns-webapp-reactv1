import React from 'react';

const Dashboard = () => {
  return (
    <>
      <div className="row mt-4">
        {/* Training / Compliance */}
        <div className="col-12 col-sm-12 col-md-12 col-lg-6 items">
          <div className="card bdr5 p-0">
            <div className="header bdrb p-3" style={{ backgroundColor: '#e7f0fe2e' }}>
              <h2 className="col-black">
                <i className="zmdi zmdi-sign-in"></i> Training / Compliance
              </h2>
            </div>
            <div id="EmployeeDashbaordDocs_Placeholder" className="body p-1 text-left"></div>
          </div>
        </div>

        {/* My Annual Leave */}
        <div id="divAnualLeaveWizard" className="col-lg-6 items" style={{ display: 'none' }}>
          <div className="card bdr5 p-0">
            <div className="header bdrb p-3" style={{ backgroundColor: '#e7f0fe2e' }}>
              <h2 className="col-black">
                <i className="zmdi zmdi-calendar-check"></i> Annual Leaves{' '}
                <span className="float-right">
                  <a id="btnRefreahEmployeeAnualLeaves">
                    <i className="fa fa-refresh"></i>
                  </a>
                </span>
              </h2>
            </div>
            <div className="body p-1 text-left">
              <div id="EmployeeLeaveTotal_placeholder" className="align-items-center row"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        {/* Activity */}
        <div className="col-12 col-sm-12 col-md-12 col-lg-6 items">
          <div className="card bdr5 p-0">
            <div className="header bdrb p-3" style={{ backgroundColor: '#e7f0fe2e' }}>
              <h2 className="col-black">
                <i className="zmdi zmdi-square-down"></i> Activity
              </h2>
            </div>
            <div className="body p-1 text-left">
              <ul className="row list-unstyled c_review m-0 scrollbar">
                <li className="col-12">
                  <div className="avatar">
                    <span className="cbptmicon">L</span>
                  </div>
                  <div className="comment-action">
                    <h6 className="c_name mt-1">Language Updated<small className="comment-date float-sm-right">30/06/2023 8:41AM</small></h6>
                    <p className="c_msg m-b-0">Language has been updated</p> <small className="col-grey">By: Healthcare Demo</small>
                  </div>
                </li>
                {/* Other list items */}
              </ul>
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="col-12 col-sm-12 col-md-12 col-lg-6 items">
          <div className="card bdr5 p-0">
            <div className="header bdrb p-3" style={{ backgroundColor: '#e7f0fe2e' }}>
              <h2 className="col-black">
                <i className="zmdi zmdi-email"></i> Messages
              </h2>
            </div>
            <div className="body p-1 mb-0">
              <ul className="row list-unstyled c_review m-0 scrollbar">
                <li className="col-12 text-center">Not available.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
