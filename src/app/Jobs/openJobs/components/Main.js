import React from 'react'
import Link from 'next/link'
import All from './All'

export default function Main() {
  return (
    <>
      <section className="content">
      <div className="body_scroll">
        <div className="container-fluid">
          <div className="row clearfix">
            <div className="col-md-12 p-0">
              <div id="PgJobs" className="card mb-0">
                {/* Inner Tabs and Job list... */}
                <div className="pl-2 pr-2">
                <div className="booktab d-flex justify-content-between align-items-center p-2 bdrb">
      <div className="d-flex justify-content-start align-items-center">
        <div>
          <p className="col-grey mb-0">We found <b id="jobs_found" className="col-black">10</b> of <b id="total_jobs" className="col-black">108</b> jobs matching your criteria</p>
        </div>
        {/* Search Criteria */}
        <div className="d-flex justify-content-start align-items-center ml-3">
          <p className="mb-0 font-bold mr-1 col-grey filterlabel" style={{ display: 'none' }}>FILTER:</p>
          <div className="searchTags"></div>
        </div>
      </div>

      {/* Filters */}
      <div className="btn-group bdrr pr-2">
        <Link id="37" data-key="WZBOOKEDJOBEMPLOYER" className="btn btn-outline-info clsCallPage" href="/Jobs/bookedJbobs"title="View booked jobs">
          <i className="fa fa-external-link"></i> Booked Jobs
        </Link>

        <Link className="btn btn-success" href="https://empapp.thestaffport.com/Rota/jobPlanner#rota" title="View Rota">
          <b><i className="fa fa-external-link"></i> View Rota</b>
        </Link>

        <a className="btn btn-primary ml-1 opacity_8 cls-myopenjobs" data-toggle="modal" data-target="#ModalFilter">
          <i className="ti ti-filter"> </i>
        </a>
        <a className="btn btn-primary ml-1 cls-myopenjobs" data-action="refresh">
          <i className="zmdi zmdi-refresh"></i>
        </a>
      </div>
    </div>


    <div id="divInnerTabs" className="booktab p-0 bdrb">
      <ul className="nav nav-tabs nav-justified ul-main-tabs1 ul-myopenjobs-tabs">
        <li className="nav-item">
          <Link id="taball" data-status="" href="#all" className="nav-link active show" data-toggle="tab">
            <b>All </b>
            <span className="bubl-light cls-All">108</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link id="taboffline" data-status="offline" href="#offline" className="nav-link" data-toggle="tab">
            <b>Offline </b>
            <span className="bubl-light cls-OFFLINE">48</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link id="tablive" data-status="live" href="#live" className="nav-link" data-toggle="tab">
            <b>Live</b>
            <span className="bubl-light cls-LIVE">40</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link id="tabapplied" data-status="applied" href="#applied" className="nav-link" data-toggle="tab">
            <b>Applied </b>
            <span className="bubl-light cls-APPLIED">0</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link id="tabexpired" data-status="expired" className="nav-link" data-toggle="tab" href="#expired">
            <b>Expired</b>
            <span className="bubl-light cls-EXPIRED">20</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link id="tabdeleted" data-status="deleted" className="nav-link" data-toggle="tab" href="#deleted">
            <b>Deleted </b>
            <span className="bubl-light bg-pink bdr-none cls-DELETED">0</span>
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
                </div>
                {/* Load More... */}
                <div className="text-center pt-2 mb-2">
                  <a
                    id="btn_loadmore_myopenjobs"
                    className="text-center btn btn-info font-14 loadmore-myopenjobs"
                    style={{}}
                  >
                    Load more..&nbsp; <i className="fa fa-plus">&nbsp;</i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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

    </>
  )
}
