import React from 'react'

export default function All() {
  return (
    <>
    <div id="my_jobs_placeholder" className="table-responsive leave_management">
                  <table id="JobsTable" className="table table-bordered table-hover mb-0 overflow-y JobsTable rwd-table btdr_none emptbl">
                    <thead>
                      <tr>
                        <th>
                          <div className="checkbox">
                            <input id="chkAllJobs" className="chkAllJobs" type="checkbox" />
                            <label htmlFor="chkAllJobs">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;S.N</label>
                          </div>
                        </th>
                        <th>Job ID</th>
                        <th>Job Status</th>
                        <th>Shift Secured</th>
                        <th>Type</th>
                        <th>Shift Type</th>
                        <th>Candidate</th>
                        <th style={{ width: '240px' }}>Location</th>
                        <th>Start Date</th>
                        <th>Time Start &amp; End</th>
                        <th>Duration</th>
                        <th>Shift Rate</th>
                        <th>Agency Fee</th>
                        <th>VAT (Yes/No)</th>
                        <th>Vat</th>
                        <th>Total Cost</th>
                        <th>Role</th>
                        <th>Actual Start Date</th>
                        <th>Actual Time Start &amp; End</th>
                        <th>Break (mins)</th>
                        <th>Actual Duration</th>
                        <th>H. Visit</th>
                        <th>Agency</th>
                      </tr>
                    </thead>
                    <tbody id="my_jobs_loadmore_placeholder">
                      <tr>
                        <td>
                          <div className="checkbox">
                            <input id="chkgrdJob1006" type="checkbox" className="chkgrdJob" />
                            <label htmlFor="chkgrdJob1006">1.</label>
                          </div>
                          <span className="table-row-btn">
                            <a className="btn btn-outline-primary btn-sm mr-1 btn-job-action" job-type="L" data-action="edit" data-id="1006" title="Edit Job" data-toggle="modal" data-target="#edit_job">
                              <i className="zmdi zmdi-edit">&nbsp;</i>Edit
                            </a>
                            <a className="btn btn-outline-primary btn-sm mr-1 btn-job-action" job-type="L" data-action="complete" data-id="1006" title="Complete the Job" data-toggle="modal" data-target="#edit_job">
                              <i className="zmdi zmdi-case-check">&nbsp;</i>Complete
                            </a>
                            <a className="btn btn-outline-primary btn-sm mr-1 btn-job-action-new" data-action="view" data-id="1006" title="View" data-toggle="modal" data-target="#viewjob">
                              <i className="zmdi zmdi-search">&nbsp;</i>View
                            </a>
                          </span>
                        </td>
                        <td>1006</td>
                        <td>
                          <span className="badge badge-default wid100">
                            <b>UNCOMPLETED</b>
                          </span>
                        </td>
                        <td className="text-center">
                          <i className="zmdi zmdi-calendar pr-1"></i>23/06/2023<br />
                          <span className="col-blue font-12">2:45PM</span>
                        </td>
                        <td>Agency <a className="ml-1 pointer cls-conversation-action" data-action="view" data-id="1006" title="Conversation" data-toggle="modal" data-target="#modalConversation">
                          <span className="badge badge-primary"><i className="zmdi zmdi-comments"></i> [ 0 ]</span>
                        </a> </td>
                        <td>General Shift</td>
                        <td id="cnd-1006" style={{ width: '240px', position: 'relative' }}>
                          <i className="zmdi zmdi-account">&nbsp;</i>
                          <span id="cnd-1006" data-status="contact" className="col-blue pointer clsshowCndDetails" data-value="Dr Doctor5 Agnecy#1236547957#Cruce@thestaffport.com">
                            Dr Doctor5 Agnecy
                          </span>
                        </td>
                        <td id="ltd-1006" style={{ width: '240px' }}>
                          <i className="zmdi zmdi-pin-drop">&nbsp;</i>
                          <span id="location-1006" data-status="location" className="col-brown pointer clsshow clsshowfulladdress" data-value="Birmingham## Birmingham, West Midlands - B4 7DA">
                            Birmingham
                          </span>
                        </td>
                        <td>30/06/2023</td>
                        <td>9:00AM - 5:00PM</td>
                        <td className="text-center">
                          <span className="col-blue-grey font-17">8.00 hr(s)</span>
                        </td>
                        <td className="text-center col-blue bold">£100.00</td>
                        <td className="text-center col-blue bold">£80.00</td>
                        <td className="text-center col-blue bold">No</td>
                        <td className="text-center col-blue bold">£0.00</td>
                        <td className="text-center col-green bold font-18">£880.00</td>
                        <td>
                          <b style={{ color: '#009688' }}>General Practitioner</b>
                        </td>
                        <td className="text-center">30/06/2023</td>
                        <td className="text-center">9:00AM - 5:00PM</td>
                        <td className="text-center">0</td>
                        <td className="text-center">0.00</td>
                        <td className="text-center">0</td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
      
    </>
  )
}
