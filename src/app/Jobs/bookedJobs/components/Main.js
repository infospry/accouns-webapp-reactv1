import React from 'react'
import Link from 'next/link'
import All from './All'

function Main() {
  return (
    <>
       <section className="content">
        <div className="body_scroll ">
            <div className="container-fluid">
                <div className="row clearfix">
                    <div className="col-md-12 p-0">
                    <div id="PgJobs" className="card mb-0">   
                        <div className="booktab d-flex justify-content-between align-items-center sadow">
                        {/* Main Tabs */}
                        <div className="pl-3">
                            <h2>Booked Jobs</h2>
                        </div>
                        {/* Filters */}
                            <div className="btn-group bdrr pr-2">
                                <Link href="/">
                                <i className="fa fa-external-link"></i> Open Jobs
                                </Link>

                                <Link className="btn btn-success"
                                href="https://empapp.thestaffport.com/Rota/jobPlanner#rota">
                                <b><i className="fa fa-external-link"></i> View Rota</b>
                                </Link>

                                <a className="btn btn-primary ml-1 opacity_8 cls-myjobs" data-action="showfilter"
                                data-toggle="modal" data-target="#ModalFilter" data-tippy=""
                                data-original-title="Filter">
                                <i className="ti ti-filter"></i>
                                </a>

                                <a className="btn btn-primary ml-1 cls-myjobs" data-action="refresh" data-tippy=""
                                data-original-title="Refresh">
                                <i className="zmdi zmdi-refresh"></i>
                                </a>
                            </div>
                        </div>
                        <div className="booktab d-flex justify-content-between align-items-center p-2 bdrb">
                            <div className="d-flex justify-content-start align-items-center">
                                <div>
                                <p className="col-grey mb-0">
                                    We found <b id="jobs_found" className="col-black">1</b> of <b id="total_jobs" className="col-black">1</b> jobs matching your criteria
                                </p>
                                </div>
                                {/* Search Criteria */}
                                <div className="d-flex justify-content-start align-items-center ml-3">
                                <p className="mb-0 font-bold mr-1 col-grey filterlabel dd_none">
                                    FILTER:
                                </p>
                                <div className="searchTags"></div>
                                </div>
                            </div>
                        </div>
                        <div id="divInnerTabs" className="booktab p-0 bdrb">
                            <ul className="nav nav-tabs nav-justified ul-main-tabs1 ul-myjobs-tabs">
                                <li className="nav-item">
                                <Link id="taball" data-status="" href="#all" className="nav-link active show" data-toggle="tab">
                                    <b>All</b>
                                    <span className="bubl-light cls-All">0</span>
                                </Link>
                                </li>
                                <li className="nav-item">
                                <Link id="tabbooked" data-status="booked" href="#booked" className="nav-link" data-toggle="tab">
                                    <b>Booked</b>
                                    <span className="bubl-light cls-BOOKED">0</span>
                                </Link>
                                </li>
                                <li className="nav-item">
                                <Link id="tabuncompleted" data-status="uncompleted" href="#uncompleted" className="nav-link" data-toggle="tab">
                                    <b>Un-completed</b>
                                    <span className="bubl-light cls-UNCOMPLETED">1</span>
                                </Link>
                                </li>
                                <li className="nav-item">
                                <Link id="tabwaiting" data-status="waiting" href="#waiting" className="nav-link" data-toggle="tab">
                                    <b>Waiting</b>
                                    <span className="bubl-light cls-WAITING">0</span>
                                </Link>
                                </li>
                                <li className="nav-item">
                                <Link id="tabcompleted" data-status="completed" href="#completed" className="nav-link" data-toggle="tab">
                                    <b>Completed</b>
                                    <span className="bubl-light cls-COMPLETED">0</span>
                                </Link>
                                </li>
                                <li className="nav-item">
                                <Link id="tabnotaccepted" data-status="notaccepted" href="#notaccepted" className="nav-link" data-toggle="tab">
                                    <b>Not Accepted</b>
                                    <span className="bubl-light cls-NOTACCEPTED">0</span>
                                </Link>
                                </li>
                                <li className="nav-item">
                                <Link id="tabcancelled" data-status="cancelled" href="#cancelled" className="nav-link" data-toggle="tab">
                                    <b>Cancelled</b>
                                    <span className="bubl-light cls-CANCELLED">0</span>
                                </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="body pt-0 pl-0 pr-0 pb-2">
                        <div className="wrap">
            <div className="tab-content livejb">
              <div role="tabpanel" className="tab-pane in active show" id="all">
                <All/>
              </div>
            </div>
          </div>
    </div>

    <div className="text-center pt-2 mb-2">
      <a id="btn_loadmore_myjobs" className="text-center btn btn-info font-14 loadmore-myjobs dd_none">
        Load more..&nbsp;<i className="fa fa-plus">&nbsp;</i>
      </a>
    </div>

                    </div>


                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* ;;;filter:::: */}
    <div
      id="ModalFilter"
      className="modal right-quater"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="ModalFilter"
      data-backdrop="static"
      data-keyboard="false"
    >
      <div className="modal-dialog ui-draggable" role="document" style={{ width: '100%', maxWidth: '320px' }}>
        <div className="modal-content">
          <div className="modal-header ui-draggable-handle">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
            <h4 className="modal-title" id="myModalLabel2">
              <i className="ti ti-filter"> </i>
              <b> Filters</b>
            </h4>
          </div>
          <div className="modal-body pl-3 pr-3">
            <label className="font-bold"> Job Id</label>
            <div className="form-group">
              <input
                id="txt_job_id"
                data-activity=""
                data-filterfield="job_id"
                data-fieldlabel="Job Id"
                placeholder="Enter job id"
                className="form-control"
                type="text"
              />
            </div>
            <label className="font-bold">Role</label>
            <div className="form-group">
              
    <select id="ddl_job_role" data-activity="filldropdown" data-filterfield="role_id" data-fieldlabel="Role" className="form-control" style={{ height: 'auto' }}>
      <option value="" selected>Select Role</option>
      <option style={{ color: '#1cbfd0' }} value="111">Advance Nurse Practitioner</option>
      <option style={{ color: '#ff4dab' }} value="114">Care Assistant</option>
      <option style={{ color: '#795548' }} value="115">Clinical Practitioner</option>
      <option style={{ color: '#03A9F4' }} value="116">Forensic Nurse</option>
      <option style={{ color: '#009688' }} value="117">General Practitioner</option>
      <option style={{ color: '#FFC107' }} value="118">HCA</option>
      <option style={{ color: '#e47297' }} value="119">Home Care</option>
      <option style={{ color: '#fdd932' }} value="120">Hospital Doctor</option>
      <option style={{ color: '#ee2558' }} value="122">Opthalmologist</option>
      <option style={{ color: '#82c885' }} value="123">Pharmacist</option>
      <option style={{ color: '#607D8B' }} value="127">Practice Nurse</option>
      <option style={{ color: '#795548' }} value="130">Receptionist</option>
      <option style={{ color: '#98f' }} value="131">Registered General Nurse</option>
      <option style={{ color: '#04BE5B' }} value="133">Support Worker</option>
    </select>
            </div>
            <label className="font-bold">Start Date</label>
      <div className="form-group">
        <input
          id="txt_job_start_datetime"
          data-activity="datepicker"
          data-filterfield="job_date"
          data-fieldlabel="Start Date"
          className="form-control daterange"
          placeholder="dd/mm/yyyy - dd/mm/yyyy"
        />
      </div>

      <label className="font-bold">Shift Secured</label>
      <div className="form-group">
        <input
          id="txt_shift_secured_datetime"
          data-activity="datepicker"
          data-filterfield="shift_secured"
          data-fieldlabel="Shift Secured"
          className="form-control daterange"
          placeholder="dd/mm/yyyy - dd/mm/yyyy"
        />
      </div>

      <label className="font-bold">Employee</label>
      <div className="form-group">
        <input
          id="txt_employee"
          data-activity="autocomplete"
          data-filterfield="employee"
          data-fieldlabel="Employee"
          data-item-id=""
          className="form-control ui-autocomplete-input filterAutocomplete"
          autoComplete="off"
          placeholder="Enter employee name"
        />
      </div>

      <label className="font-bold">Location</label>
      <div className="form-group">
        <input
          id="txt_location"
          data-activity="autocomplete"
          data-filterfield="location"
          data-fieldlabel="Location"
          data-item-id=""
          className="form-control ui-autocomplete-input filterAutocomplete"
          autoComplete="off"
          placeholder="Enter location name"
        />
      </div>
                           
          </div>
          <div className="modal-footer text-center">
            <a
              id="btn_search_jobs"
              className="btn btn-primary cls-myjobs"
              data-action="search"
              data-modal="#ModalFilter"
            >
              Apply Now
            </a>
            <a
              id="btn_discard_search"
              className="btn btn-danger cls-myjobs"
              data-action="discard_search"
              data-modal="#ModalFilter"
              data-dismiss="modal"
            >
              Discard
            </a>
          </div>
        </div>
      </div>
    </div>

{/* ::::::conversation:::::::: */}

<div className="modal right-half" id="modalConversation">
      <div className="modal-dialog ui-draggable ui-draggable-handle" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
            <h4 className="modal-title" id="myModalLabel2">
              <b>Job Id : <span id="spanjobid"></span></b>
            </h4>
          </div>
          <div className="modal-body pl-0 pr-0 pb-0" style={{ overflow: 'hidden' }}>
            <div className="card mb-0">
              {/* Left (Members Area) */}
              <div className="chat_list p-0">
                <ul id="members_placeholder" className="user_list list-unstyled mb-0 pb-4"></ul>
              </div>
              {/* Right (Message Area) */}
              <div className="chat_window body p-0">
                <div id="divCurrentMember"></div>
                <ul id="message_placeholder" className="chat-history"></ul>
              </div>
            </div>
          </div>
          <div className="modal-footer p-0">
            <div className="chat__box">
              <textarea id="txt_conversation_comments" placeholder="Type a message"></textarea>
              <div className="dropup">
                <button type="button" className="btn btn-outline-primary dropdown-toggle" data-toggle="dropdown">
                  <i className="zmdi zmdi-more"></i>
                </button>
                <div className="dropdown-menu">
                  <a className="dropdown-item pointer cls-add-tag">Thanks for your message! We'll get back to you within 24 hours</a>
                  <a className="dropdown-item pointer cls-add-tag">Hi there! Welcome to TheStaffPort</a>
                  <a className="dropdown-item pointer cls-add-tag">Hello! We wanted to let you know we received your message and will be in touch before we close.</a>
                  <a className="dropdown-item pointer cls-add-tag">Thanks for reaching out to us via TheStaffPort. We'll get back to you shortly.</a>
                  <a className="dropdown-item pointer cls-add-tag">Good Morning</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- Upload TimeSheet --> */}
    
    {/* <!-- Edit,Complete,Create Invoice & Audit job --> */}
    <div className="modal right-full modeledit shiftform show" id="edit_job" tabIndex="-1" role="dialog" aria-labelledby="edit_job" aria-modal="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content hightauto">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close" id="btnPopClose">
              <span aria-hidden="true">×</span>
            </button>
            <h4 className="modal-title"><b id="editPopupHeading">Temporary Job - Complete</b></h4>
          </div>
          <div className="modal-body pl-2 pr-2 pb-2">
            <div className="bg-white mb-3 mt-3" id="actionPopUp">
            <div className="pl-2 pr-2">
                            <table className="table table-bordered mb-0">
                              <tbody>
                                <tr className="tr_bg">
                                  <td>
                                    <span className="w-111 col-grey">Job Id:</span>
                                    <span className="text-blue ">
                                      <b className="editRow" id="lblEditJobId">1006 / </b>
                                    </span>
                                  </td>
                                  <td>
                                    <span className="w-111 col-grey">Job Status:</span>
                                    <span className="badge badge-success ml-1 editRow " id="lblEditJobStatus">UNCOMPLETED</span>
                                  </td>
                                  <td>
                                    <span className="w-111 col-grey">Candidate:</span>
                                    <span className="col-blue-black">
                                      <i className="zmdi zmdi-account editRow" id="lblEditAssignedCnd">&nbsp;&nbsp;Dr Doctor5 Agnecy</i>
                                    </span>
                                  </td>
                                  <td style={{ width: '30%' }}>
                                    <span className="w-111 col-grey">Location:</span>
                                    <span id="spaneditjobLocationLbl" className="col-blue-black" >
                                      <i className="zmdi zmdi-pin editRow" id="lblEditLocation">&nbsp;&nbsp;Birmingham</i>
                                    </span>
                                    <span id="spaneditjobLocationDdl" style={{ float: 'left', display: 'none' }}>
                                      <select id="ddlLocationEdit" className="form-control" style={{ width: '250px', height: '28px', padding: '2px 8px' }} data-current-location-id="7">
                                        <option value="0">Choose any . . .</option>
                                        <option value="7">Birmingham</option>
                                        <option value="8">Tamworth</option>
                                        <option value="9">Solihull</option>
                                        {/* Add more options as needed */}
                                      </select>
                                    </span>
                                    <span><a id="btnEditLocation" title="Edit Job Location" data-action="edit" className="col-blue ml-3"><i className="zmdi zmdi-edit"></i>Edit</a></span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>

                          <table className="table mt-2 mb-0 border-none" id="editableSection">
                            <tbody>
                              <tr className="ClsDatepair editRow" >
                                <td>
                                  <label className="mb-2"><b> Start Date &amp; Time</b></label>
                                  <div className="input-group masked-input unset">
                                    <div className="input-group-prepend">
                                      <span className="input-group-text"><i className="zmdi zmdi-calendar"></i></span>
                                    </div>
                                    <input type="text" className="form-control text-center date start editRow SiftDateStart calculateAmount " style={{ width: '90px' }} id="txtEditStartDate" placeholder="dd/mm/yyyy" data-val="30/06/2023" />
                                    <input type="text" className="form-control text-center time start editRow SiftTimeStart calculateAmount ui-timepicker-input" style={{ width: '50px' }} id="txtEditStartTime" placeholder="hh:mm" autoComplete="off" data-val="09:00" />
                                  </div>
                                </td>
                                <td>
                                  <label className="mb-2"> <b>Finish Date &amp; Time</b></label>
                                  <div className="input-group masked-input unset">
                                    <div className="input-group-prepend">
                                      <span className="input-group-text"><i className="zmdi zmdi-calendar"></i></span>
                                    </div>
                                    <input type="text" className="form-control text-center date end editRow SiftDateEnd calculateAmount " style={{ width: '90px' }} id="txtEditEndDate" placeholder="dd/mm/yyyy" data-val="30/06/2023" />
                                    <input type="text" className="form-control text-center time end editRow SiftTimeEnd calculateAmount ui-timepicker-input" style={{ width: '50px' }} id="txtEditEndTime" placeholder="hh:mm" autoComplete="off" data-val="17:00" />
                                  </div>
                                </td>
                                <td className="masked-input">
                                  <label className="mb-2" id="lblDurationType">Duration(hrs)</label>
                                  <input type="text" className="form-control text-center totalDuration" id="txtEditDuration" style={{ width: '90px' }} disabled="" data-val="480" />
                                </td>
                                <td>
                                  <label className="mb-2"> <b>Shift Rate</b></label>
                                  <div className="input-group masked-input unset">
                                    <div className="input-group-prepend">
                                      <span className="input-group-text"><i className="zmdi zmdi">£</i></span>
                                    </div>
                                    <input type="text" className="form-control text-center editRow green-bold OfferedHourlyRate calculateAmount decimal" style={{ width: '90px' }} id="txtEditClientRate" data-val="100" />
                                  </div>
                                </td>
                                <td className="" style={{ display: 'none' }}>
                                  <label className="mb-2"><b> Shift Rate</b></label>
                                  <div className="input-group masked-input unset">
                                    <div className="input-group-prepend">
                                      <span className="input-group-text"><i className="zmdi zmdi">£</i></span>
                                    </div>
                                    <input type="text" className="form-control text-center editRow blu-bold DoctorPayRatePerHour calculateAmount w75 decimal" id="txtEditAssignedCndRate" data-val="100" />
                                  </div>
                                </td>
                                <td>
                                  <label className="mb-2"><b>Agency Fee ( per hr)</b></label>
                                  <div className="input-group masked-input unset">
                                    <div className="input-group-prepend">
                                      <span className="input-group-text"><i className="zmdi zmdi">£</i></span>
                                    </div>
                                    <input type="text" className="form-control text-center adminFee AdminFeeInPercent calculateAmount w60 decimal" id="txtEditAdminFees" data-val="10.00000000" />
                                  </div>
                                </td>
                                <td>
                                  <label className="mb-2"> <b>Shift Cost</b></label>
                                  <div className="input-group masked-input unset">
                                    <div className="input-group-prepend">
                                      <span className="input-group-text"><i className="zmdi zmdi">£</i></span>
                                    </div>
                                    <input type="text" className="form-control text-center green-bold ShiftCost w65" id="txtEditShiftCost" disabled="" />
                                  </div>
                                </td>
                                <td>
                                  <label className="mb-2"> Vat</label>
                                  <div className="checkbox">
                                    <input id="chkVatYes" className="editRow chkVATRule calculateAmount text-center" type="checkbox" />
                                    <label htmlFor="chkVatYes">
                                      <b>Yes</b>
                                    </label>
                                    <input type="hidden" id="chkVt" className="chkHiddenValues" data-val="unvisit" value="unvisit" />
                                  </div>
                                </td>
                                <td style={{ display: 'none' }}>
                                  <label className="mb-2"> <b>Vat Rule</b></label>
                                  <input type="text" className="form-control green-bold editRowVat text-center" id="lblEditVatRule" disabled="" />
                                </td>
                                <td className="w100">
                                  <label className="mb-2"> <b>Vat Amt</b></label>
                                  <div className="input-group masked-input unset">
                                    <div className="input-group-prepend">
                                      <span className="input-group-text"><i className="zmdi zmdi">£</i></span>
                                    </div>
                                    <input type="text" className="form-control text-center green-bold editRowVat vatamount VatInPercent w60" id="txtEditVatAmt" disabled="" data-val="0" />
                                  </div>
                                </td>
                                <td>
                                  <label className="mb-2"> <b>Total Cost</b></label>
                                  <div className="input-group masked-input unset">
                                    <div className="input-group-prepend">
                                      <span className="input-group-text"><i className="zmdi zmdi">£</i></span>
                                    </div>
                                    <input type="text" className="form-control text-center green-bold editRowVat TotalShiftCost w85" id="txtEditTotalCost" disabled="" />
                                  </div>
                                </td>
                              </tr>
                              {/* Continue with the rest of the table rows as needed */}
                            </tbody>
                          </table>

                          <div id="divCreateInvoiceSection" className="col-md-4 offset-md-4" style={{ display: 'none' }}>
                            <div>
                              <div className="input-group unset radio mt-3">
                                <input id="rdoAuth" name="rdoInvAuth" value="1" type="radio" 
                                />
                                <label htmlFor="rdoAuth" className="col-green mr-2">Authorise</label>
                                <input id="rdoUnAuth" name="rdoInvAuth" value="0" type="radio" 
                                 />
                                <label htmlFor="rdoUnAuth" className="col-red">Unauthorise</label>
                              </div>
                            </div>
                            
                              <div id="divInvComment" style={{ padding: '10px', display: 'block' }}>
                                <label className="mb-2"><b>Reason for unauthorisation*</b></label>
                                <textarea id="txtCommentsAuth" type="text" placeholder="Enter reason here..." className="form-control" ></textarea>
                              </div>
                        
                            <div style={{ padding: '10px' }}>
                              <div className="input-group masked-input unset checkbox">
                                <input id="chkCreateInv" type="checkbox"/>
                                <label htmlFor="chkCreateInv">Are you sure you want to <span id="invterm" style={{ color: '#04468E' }}>proceed</span>?</label>
                              </div>
                            </div>
                          </div>
                        

                          <table className="table mt-2 mb-0" id="auditJob" style={{ display: 'none' }}>
                            <tbody>
                              <tr>
                                <td colSpan="2">
                                  <div className="form-group mt-3">
                                    <label className="mb-2"><b>Audit comment</b></label>
                                    <div className="input-group masked-input unset" style={{ width: '500px' }}>
                                      <textarea rows="2" className="form-control no-resize" id="txtJobAuditComment" placeholder="Write Comments Here..."></textarea>
                                    </div>
                                  </div>
                                </td>
                                <td colSpan="9"></td>
                              </tr>
                            </tbody>
                          </table>

                          <table className="table mt-2 mb-0" style={{ display: 'none' }} id="viewHistory">
                            <tbody>
                              <tr>
                                <td colSpan="12">
                                  <a id="btnHistory">
                                    <i className="zmdi-plus zmdi mrgn-t5" id="btnHistoryIcon" style={{ color: 'blue' }}></i>
                                  </a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <div style={{ maxHeight: '250px', overflow: 'auto', display: 'none' }} className="tblHistory">
                            <table className="table tblHistory" style={{ display: 'none' }}>
                              <thead>
                                <tr>
                                  <th>#</th>
                                  <th>Start Date</th>
                                  <th>Time Start</th>
                                  <th>Finish Date</th>
                                  <th>Finish Time</th>
                                  <th>Duration</th>
                                  <th>Job Rate</th>
                                  <th>CND Rate</th>
                                  <th>Admin Fee(in %)</th>
                                  <th>VAT (in %)</th>
                                  <th>VAT</th>
                                  <th>Total</th>
                                  <th>Update Date</th>
                                  <th>Updated By</th>
                                  <th>Description</th>
                                </tr>
                              </thead>
                              <tbody id="tbodyJobHistory" className="tbodyJobHistory">
                                <tr>
                                  <td colSpan="14">
                                    Not Available !
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>

                          <div id="divJobCompletionMail" className="col-md-4 offset-md-4" style={{ display: 'none', paddingTop: '20px' }}>
                            <span className="checkbox" id="SMTCL">
                              <input
                                id="chkJobCompletionSendMailToEmp"
                                className="chkClear"
                                name="chkJobCompletionSendMailToEmp"
                                type="checkbox"
                                value="1"
                              />
                              <label htmlFor="chkJobCompletionSendMailToEmp"> Send Mail to client</label>
                            </span>
                            <br />
                            <span className="checkbox" id="SMTCN">
                              <input
                                id="chkJobCompletionSendMailToCnd"
                                className="chkClear"
                                name="chkJobCompletionSendMailToCnd"
                                type="checkbox"
                                value="1"
                              />
                              <label htmlFor="chkJobCompletionSendMailToCnd"> Send Mail to candidate</label>
                            </span>
                          </div>
            </div>
            <div className="modal-footer position_relatie">
              <div className="row">
                <div className="col-md-12">
                  <div className="text-center">
                    <button value="Submit" id="btnEditSave" className="btn btn-primary" data-action="complete" data-val="1006">Complete</button>
                    <button value="Submit" id="btnEditCancel" className="btn btn-outline-danger">Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default Main
