import React from 'react'

export default function All() {
  return (
    <>


      <div id="my_openjobs_placeholder" className="table-responsive leave_management">
        <table id="JobsTable" className="table table-bordered table-hover mb-0 overflow-y JobsTable rwd-table btdr_none emptbl">
          <thead>
            <tr>
              <th style={{ width: '30px' }}>
                <div className="checkbox">
                  <input id="chkAllOpenJobs" className="chkAllOpenJobs" type="checkbox" />
                  <label style={{ paddingLeft: '0px !important' }} htmlFor="chkAllOpenJobs">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;S.N
                  </label>
                </div>
              </th>
              <th>Job ID</th>
              <th>Job App</th>
              <th>Job Status</th>
              <th>Shift Secured</th>
              <th>Comments</th>
              <th style={{ width: '240px' }}>Location</th>
              <th>Start Date</th>
              <th>Time Start &amp; End</th>
              <th>Duration</th>
              <th>Shift Rate</th>
              <th>Total Cost</th>
              <th>Role</th>
              <th>Break (mins)</th>
            </tr>
          </thead>
          <tbody id="my_openjobs_loadmore_placeholder">
            <tr id="openjobrow-998">
              <td>
                <div className="checkbox">
                  <input id="chkgrdJob998" type="checkbox" className="chkgrdJob" />
                  <label htmlFor="chkgrdJob998">1.</label>
                </div>
                <span className="table-row-btn">
                  <a
                    className="btn btn-outline-primary btn-sm mr-1 btn-job-action"
                    job-type="L"
                    data-action="edit"
                    data-id="998"
                    title="Edit Job"
                    data-toggle="modal"
                    data-target="#edit_job"
                  >
                    <i className="zmdi zmdi-edit">&nbsp;</i>Edit
                  </a>
                  <a
                    className="btn btn-outline-primary btn-sm mr-1 btn-openjob-action"
                    data-action="view"
                    data-id="998"
                    title="View"
                    data-toggle="modal"
                    data-target="#viewjob"
                  >
                    <i className="zmdi zmdi-search">&nbsp;</i>View
                  </a>
                  <a
                    className="ion btn btn-outline-danger btn-sm btn-openjob-action"
                    data-action="delete"
                    data-id="998"
                    title="Delete"
                  >
                    <div className="lid"></div>
                    <div className="lidcap"></div>
                    <div className="bin"></div>
                  </a>
                </span>
              </td>
              <td>
                <i className="zmdi zmdi-circle col-grey" title="OFFLINE">&nbsp;</i> 998
              </td>
              <td className="text-center">
                <a data-action="jobapps" data-id="998" className="btn-openjob-action" data-toggle="modal" data-target="#job_apps">
                  <span className="badge badge-neutral mr-1">
                    <i className="zmdi zmdi-accounts">&nbsp;</i>0
                  </span>
                </a>
              </td>
              <td>
                <span className="badge badge-default wid100">
                  <b>OFFLINE</b>
                </span>
              </td>
              <td className="text-center">
                <i className="zmdi zmdi-calendar pr-1"></i>23/06/2023
                <br />
                <span className="col-blue font-12">2:12PM</span>
              </td>
              <td></td>
              <td id="ltd-998" style={{ width: '240px' }}>
                <i className="zmdi zmdi-pin-drop">&nbsp;</i>
                <span
                  id="location-998"
                  data-status="location"
                  className="col-brown pointer clsshow clsshowfulladdress"
                  data-value="Birmingham## Birmingham, West Midlands - B4 7DA"
                >
                  Birmingham
                </span>
              </td>
              <td>21/07/2023</td>
              <td>9:00PM - 11:45PM</td>
              <td className="text-center">
                <span className="col-blue-grey font-17">2 h 45 m</span>
              </td>
              <td className="text-center col-blue bold">£30.00</td>
              <td className="text-center col-green bold font-18">£82.50</td>
              <td>
                <b style={{ color: '#e47297' }}>Home Care</b>
              </td>
              <td className="text-center"></td>
            </tr>
          </tbody>
        </table>
      </div>
    
      
    </>
  )
}
