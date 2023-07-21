import React from 'react';

const Terms = () => {
  return (
    <div className="row mt-4 mb-1 cls-hover">
    <div className="col-md-8 offset-md-2 pro">
        <div className="accordion" id="accordion-Example"> 
        {/* <!--- Contract Summary--> */}
            <div className="item">
                <div className="item-header" id="headingOne">
                    <h2 className="mb-0"> <button className="btn btn-link" type="button"
                            data-toggle="collapse" data-target="#collapseContract"
                            aria-expanded="true" aria-controls="collapseContract"> Contract
                            Summary <i className="zmdi zmdi-chevron-down"></i> </button> </h2>
                </div>
                <div id="collapseContract" className="collapse show"
                    aria-labelledby="headingOne" data-parent="#accordion-Example">
                    <div className="t-p">
                        <div className="row disply_none_rowsummery">
                            <div className="col-md-12 col-sm-12"> <a value="Submit" data-json=""
                                    className="btn btn-sm btn-primary hover clickmode clseditgeneralPattern"
                                    data-show=".disply_rowsummery"
                                    data-hide=".disply_none_rowsummery"
                                    style={{ position: 'absolute',  right: 0,}}> <i
                                        className="zmdi zmdi-edit"></i> Edit </a>
                                <div className="p-3">
                                    <div className="row mb-2"> 
                                        <div className="col-lg-12">
                                            <p className="mb-3"> <span className="wd-180px">Employee
                                                    type</span> <span>:</span> <span
                                                    className="col-black font-16 font-bold ml-1">
                                                    Agency (<span
                                                        style={{color:"#1cbfd0"}}>Agency2</span>)
                                                </span> </p>
                                            <p className="mb-3"> <span className="wd-180px">Employee
                                                    start date</span> <span>:</span> <span
                                                    className="col-black font-16 font-bold ml-1">Nov
                                                    16 2022</span> </p>
                                        </div>
                                        <div className="col-lg-12">
                                        </div> 
                                        <div className="col-12  display-none">
                                            <hr/>
                                            <h5><b>Working time Pattern &amp; Hours per
                                                    week</b></h5>
                                            <p className="mb-3 mt-3 pt-3"> <span
                                                    className="wd-180px">Work pattern is
                                                    applicable</span> <span>:</span> <span
                                                    className="col-black font-16 font-bold ml-1">No</span>
                                            </p>
                                            <div className="dd_none">
                                                <p className="mb-3"> <span
                                                        className="wd-180px">Apply this
                                                        pattern</span> <span>:</span> <span
                                                        className="col-black font-16  ml-1">From:
                                                        <b className="col-blue">16/11/2022</b>
                                                        To: <b
                                                            className="col-blue">NA</b></span>
                                                </p>
                                                <p className="mb-3"> <span
                                                        className="wd-180px">Pattern Name</span>
                                                    <span>:</span> <span
                                                        className="col-black font-16 font-bold ml-1"></span>
                                                </p>
                                                <div className="table-responsive">
                                                <table className="table table-bordered table-hover remdi clsworkingpatrrentime">
      <thead>
        <tr>
          <th className="text-left" style={{ width: '120px' }}>
            <b>DAY</b>
          </th>
          <th className="text-left">
            <b>WORKING TIME</b>
          </th>
          <th className="text-left" style={{ width: '200px' }}>
            <b>DURATION</b>
          </th>
        </tr>
      </thead>
      <tbody id="CndWorkTimePattern_Placeholder" className="ClsDatepair" data-pattern="undefined">
        {/* Your table body content goes here */}
        {/* You can add <tr> and <td> elements to populate the table */}
        {/* For example: */}
        {/* <tr> */}
        {/*   <td>Monday</td> */}
        {/*   <td>9:00 AM - 5:00 PM</td> */}
        {/*   <td>8 hours</td> */}
        {/* </tr> */}
      </tbody>
    </table>
                                                    <p className="mb-3 mt-3"> <span
                                                            className="wd-180px">Working Pattern
                                                            hours per week</span>
                                                        <span>:</span> <span
                                                            id="spanTotalWokingDays"
                                                            className="col-black font-16 font-bold ml-1"></span>
                                                    </p>
                                                    <p className="mb-3 mt-3"> <span
                                                            className="wd-180px">Contracted
                                                            hours per week</span>
                                                        <span>:</span> <span
                                                            id="spanTotalWokingDaysContracted"
                                                            className="col-black font-16 font-bold ml-1">0
                                                            hr(s) in week.</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 mb-2 text-center">
                                <hr className="m-0 mb-4"/> <button value="Submit" data-json=""
                                    className="btn btn-primary btn-lg clickmode clseditgeneralPattern"
                                    data-show=".disply_rowsummery"
                                    data-hide=".disply_none_rowsummery"><i
                                        className="zmdi zmdi-edit"></i> <b>Edit</b></button>
                                <button className="btn btn-outline-danger btn-lg"><b>
                                        Cancel</b></button>
                            </div>
                        </div>
                    </div>
                    <div className="row disply_rowsummery pt-1 pb-3" style={{display:"none"}}>
                        <button className="cross clickmode" data-hide=".disply_rowsummery"
                            data-show=".disply_none_rowsummery"><i className="zmdi zmdi-close"
                                aria-hidden="true"></i></button>
                        <div className="col-md-12"> 
                        <div className="bxsaddow mt-3" style={{ minHeight: '30px' }}>
      <h4>
        <b>Employee Joining Date</b>
      </h4>
      <div className="p-3 bdr1" style={{ minHeight: '30px' }}>
        <div className="form-group row mb-0">
          <label htmlFor="txtEmployeeStartDate" className="col-sm-4 col-lg-3 col-form-label col-form-label-lg">
            Employee start date<span>*</span>
          </label>
          <div className="col-sm-8 col-lg-5 ClsDatepair">
            <input
              id="txtEmployeeStartDate"
              type="text"
              value="16/11/2022"
              placeholder="DD/MM/YYYY"
              className="form-control form-control-lg date start"
            />
          </div>
        </div>
      </div>
    </div>

                            <div className="bxsaddow mt-3 display-none">
                                <h4>Work Time Pattern &amp; Hours per week</h4>
                                <div className="p-3 bdr1 h4show">
                                    <div className="form-group row  pt-3"> <label for=""
                                            className="col-sm-4 col-lg-3  col-form-label col-form-label-lg">Work
                                            pattern is applicable?</label>
                                        <div className="col-sm-8 col-lg-5"> <span
                                                className="switch"> <input
                                                    id="chk_work_pattern_status"
                                                    type="checkbox" className="switch"/> <label
                                                    for="chk_work_pattern_status"></label>
                                            </span> </div>
                                    </div>
                                    <div id="div_work_pattern_slot" style={{ display: 'none' }}>
      <div className="form-group row">
        <label className="col-sm-4 col-lg-3 col-form-label col-form-label-lg">Select a pattern<span>*</span></label>
        <div className="col-sm-8 col-lg-5">
          <div className="input-group">
            <select id="ddlWorkingTimePattern" data-selected-id="0" className="form-control form-control-lg">
              <option selected="" value="0" data-json="">
                Select a Pattern..
              </option>
              {/* Add other option elements here */}
            </select>
            <a data-toggle="modal" data-target="#modelalert" className="btn btn-primary cursor ml-1" style={{ lineHeight: '30px', fontSize: '14px' }} data-tippy="" data-original-title="Add Work Pattern">
              <i className="ti ti-plus"></i> Create New
            </a>
          </div>
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-4 col-lg-3 col-form-label col-form-label-lg">Apply this pattern from<span>*</span></label>
        <div className="col-sm-8 col-lg-5">
          <div className="row ClsDatepair">
            <div className="col-6 pr-0">
              <input
                id="txtPatternStartDate"
                value="16/11/2022"
                placeholder="Start Date"
                title="DD/MM/YYYY"
                className="form-control form-control-lg date btn-outline-primary"
                type="text"
              />
            </div>
            <div className="col-6 pl-1">
              <input
                id="txtPatternEndDate"
                value=""
                placeholder="End Date"
                title="DD/MM/YYYY"
                className="form-control form-control-lg ml-1 date btn-outline-primary"
                type="text"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-4 col-lg-3 col-form-label col-form-label-lg">Work pattern time slot<span></span></label>
        <div className="col-sm-8 col-lg-9">
          <div id="divShowWorkPatern" className="table-responsive" style={{ display: 'none' }}>
            <table className="table table-bordered table-hover remdi clsworkingpatrrentime">
              <thead>
                <tr>
                  <th className="text-left" style={{ width: '120px' }}>
                    <b>Start Time</b>
                  </th>
                  <th className="text-left" style={{ width: '120px' }}>
                    <b>Finish Time</b>
                  </th>
                  <th className="text-left" style={{ width: '80px' }}>
                    <b>Break</b>
                  </th>
                  <th className="text-left">
                    <b>Repeat</b>
                  </th>
                </tr>
              </thead>
              <tbody id="viewSelectedPatternTime_Placeholder" className="ClsDatepair"></tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

                                    <div className="form-group row pt-4"> <label
                                            className="col-sm-4 col-lg-3  col-form-label col-form-label-lg">Contracted
                                            hours per week<span>*</span></label>
                                        <div className="col-sm-8 col-lg-5">
                                            <div className="row">
                                                <div className="col-6 pr-0">
                                                    <div className="input-group input-group-lg">
                                                        <div className="input-group-prepend">
                                                            <span
                                                                className="input-group-text border-radius-none">hrs</span>
                                                        </div> <input
                                                            id="txtWorkingWeekHour"
                                                            type="number" min="1" max="100"
                                                            maxlength="10"
                                                            placeholder="0 hrs" value="0"
                                                            className="form-control form-control-lg number"/>
                                                    </div>
                                                </div>
                                                <div className="col-6 pl-1">
                                                    <div className="input-group input-group-lg">
                                                        <div className="input-group-prepend">
                                                            <span
                                                                className="input-group-text border-radius-none">min</span>
                                                        </div> <input id="txtWorkingWeekMin"
                                                            type="number" min="1" max="59"
                                                            maxlength="2"
                                                            placeholder="0 mins" value="0"
                                                            className="form-control form-control-lg number"/>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <p><small></small></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                          


                            <div className="bxsaddow mt-3" style={{ display: 'none' }}>
      <h4>
        <b>Annual leave entitlement</b>
      </h4>
      <div className="p-3 bdr1">
        <div className="form-group row">
          <label className="col-sm-4 col-lg-3 col-form-label col-form-label-lg">Annual leave year start<span>*</span></label>
          <div className="col-sm-8 col-lg-5">
            <div className="row">
              <div className="col-6 pr-0">
                <input
                  id="txtAnnualLeaveStartDay"
                  type="number"
                  min="1"
                  max="31"
                  maxLength="2"
                  value="0"
                  className="form-control form-control-lg number"
                  placeholder="DD"
                />
              </div>
              <div className="col-6 pl10">
                <select id="ddlAnnualLeaveStartMonth" className="form-control form-control-lg">
                  <option selected="" value="0">
                    Month...
                  </option>
                  <option value="1">January</option>
                  <option value="2">February</option>
                  <option value="3">March</option>
                  <option value="4">April</option>
                  <option value="5">May</option>
                  <option value="6">June</option>
                  <option value="7">July</option>
                  <option value="8">August</option>
                  <option value="9">September</option>
                  <option value="10">October</option>
                  <option value="11">November</option>
                  <option value="12">December</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="" className="col-sm-4 col-lg-3 col-form-label col-form-label-lg">Company's full-time annual leave entitlement</label>
          <div className="col-sm-8 col-lg-5">
            <div className="input-group input-group-lg">
              <input
                id="txtFullTimeAnnualLeaveInDays"
                type="number"
                min="1"
                max="365"
                maxLength="3"
                placeholder="0"
                value="0"
                className="form-control form-control-lg number"
              />
              <div className="input-group-append">
                <span className="input-group-text">Days</span>
              </div>
            </div>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="" className="col-sm-4 col-lg-3 col-form-label col-form-label-lg">Min. annual leave entitlement</label>
          <div className="col-sm-8 col-lg-5">
            <div className="input-group input-group-lg">
              <input
                id="txtMinAnnualLeaveInDays"
                type="number"
                min="1"
                max="365"
                maxLength="3"
                placeholder="0"
                value="0"
                className="form-control form-control-lg number"
              />
              <div className="input-group-append">
                <span className="input-group-text">Days</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
                            <div className="bxsaddow mt-3">
                                <h4> <b> Reason for Update</b> </h4>
                                <div className="p-3 bdr1">
                                    <div className="form-group row mt-3"> <label for=""
                                            className="col-sm-4 col-lg-3  col-form-label col-form-label-lg">Reason
                                            for Update<span>*</span></label>
                                        <div className="col-sm-6 col-lg-4"> <select
                                                id="ddlContractUpdateReason"
                                                className="form-control form-control-lg">
                                                <option value="0">Select a Reason</option>
                                                <option value="1">Additional
                                                    responsibilities </option>
                                                <option value="2">Adjustment </option>
                                                <option value="3">Demotion </option>
                                                <option value="4">Employee Setup </option>
                                                <option value="5">Job Change </option>
                                                <option value="6">Length of service
                                                </option>
                                                <option value="7">Light duties </option>
                                                <option value="8">Pay rise </option>
                                                <option value="9">Promotion </option>
                                                <option value="10">Restructure </option>
                                                <option value="11">Secondment </option>
                                                <option value="12">Other </option>
                                            </select> </div>
                                    </div>
                                    <div className="form-group row"> <label for=""
                                            className="col-sm-4 col-lg-3  col-form-label col-form-label-lg">Note</label>
                                        <div className="col-sm-6 col-lg-6"> <textarea
                                                id="txtContractUpdateReason"
                                                placeholder="Wrire here..."
                                                className="form-control form-control-lg"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-md-12 mb-2 mt-2 text-left">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 mb-2 text-center">
                            <hr className="m-0 mb-4"/> <a id="btnUpdateGeneralTerms"
                                data-action="General-Terms"
                                className="btn btn-primary btn-lg btn-update-terms"
                                data-hide=".disply_rowsummery"
                                data-show=".disply_none_rowsummery"><b>Update</b></a> <a
                                className="btn btn-outline-danger btn-lg clickmode"
                                data-hide=".disply_rowsummery"
                                data-show=".disply_none_rowsummery"><b> Cancel</b></a>
                        </div>
                    </div>
                </div>
            </div> 
            <div className="item">
                <div className="item-header" id="headingTwo">
                    <h2 className="mb-0"> <button className="btn btn-link collapsed" type="button"
                            data-toggle="collapse" data-target="#collapseSalary"
                            aria-expanded="false" aria-controls="collapseSalary"> Salary
                            Information <i className="zmdi zmdi-chevron-down"></i> </button>
                    </h2>
                </div>
                <div id="collapseSalary" className="collapse" aria-labelledby="headingTwo"
                    data-parent="#accordion-Example">
                    <div className="t-p">
                        <div className="row disply_none_rowpersonal">
                            <div className="col-md-12 col-sm-12"> <a
                                    className="btn btn-sm btn-primary hover clickmode"
                                    data-show=".disply_rowpersonal"
                                    data-hide=".disply_none_rowpersonal"> <i
                                        className="zmdi zmdi-edit"></i> Edit </a>
                                <div className="p-3">
                                    <p className="mb-3"> <span className="wd-180px">Payroll number
                                        </span> <span>:</span> <span
                                            className="col-black font-16 font-bold ml-1">
                                            456123789 </span> </p>
                                    <p className="mb-3"> <span className="wd-180px"> Salary</span>
                                        <span>:</span> <span
                                            className="col-black font-16 font-bold ml-1"> £100
                                            Hourly </span>
                                    </p>
                                    <p className="mb-3"> <span className="wd-180px"> Payment
                                            Frequency</span> <span>:</span> <span
                                            className="col-black font-16 font-bold ml-1"> Weekly
                                        </span> </p>
                                    <hr/>
                                    <h5><b>Payment</b></h5>
                                    <p className="mb-3"> <span className="wd-180px">Payment
                                            method</span> <span>:</span> <span
                                            className="col-black font-16 font-bold ml-1"> Cheque
                                        </span> </p>
                                    <hr/>
                                    <h5><b>Pension</b></h5>
                                    <p className="mb-3"> <span className="wd-180px">Pension
                                            eligible?</span> <span>:</span> <span
                                            className="col-black font-16 font-bold ml-1"> No
                                        </span> </p>
                                    <p className="mb-3"> <span className="wd-180px">Opsted
                                            Out?</span> <span>:</span> <span
                                            className="col-black font-16 font-bold ml-1"> No
                                        </span> </p>
                                    <p className="mb-3"> <span className="wd-180px"> Employee
                                            contribution</span> <span>:</span> <span
                                            className="col-black font-16 font-bold ml-1"> 0 %
                                        </span> </p>
                                    <p className="mb-3"> <span className="wd-180px"> Employer
                                            contribution</span> <span>:</span> <span
                                            className="col-black font-16 font-bold ml-1"> 0 %
                                        </span> </p>
                                    <p className="mb-3"> <span className="wd-180px"> Enrolment
                                            date</span> <span>:</span> <span
                                            className="col-black font-16 font-bold ml-1">
                                        </span> </p>
                                </div>
                            </div>
                            <div className="col-md-12 mb-2 text-center">
                                <hr className="m-0 mb-4"/> <button value="Submit"
                                    className="btn btn-primary btn-lg clickmode"
                                    data-show=".disply_rowpersonal"
                                    data-hide=".disply_none_rowpersonal"><b>Edit</b></button>
                                <button className="btn btn-outline-danger btn-lg clickmode"
                                    data-hide=".disply_rowpersonal"
                                    data-show=".disply_none_rowpersonal"><b>
                                        Cancel</b></button>
                            </div>
                        </div>
                        <div className="row disply_rowpersonal pt-3 pb-3 dd_none">
                            <button className="cross clickmode" data-hide=".disply_rowpersonal"
                                data-show=".disply_none_rowpersonal"><i
                                    className="zmdi zmdi-close" aria-hidden="true"></i></button>
                            <div className="col-md-12">
                                <div className="form-group row"> <label for=""
                                        className="col-sm-4 col-lg-3  col-form-label col-form-label-lg">Payroll
                                        number</label>
                                    <div className="col-sm-8 col-lg-5"> <input
                                            id="txt_payroll_number" type="text"
                                            className="form-control form-control-lg"
                                            placeholder="Enter Payroll Number"
                                            value="456123789"/> </div>
                                </div>
                                <div className="form-group row"> <label
                                        className="col-sm-4 col-lg-3  col-form-label col-form-label-lg">Salary</label>
                                    <div className="col-sm-8 col-lg-5">
                                        <div className="row">
                                            <div className="col-6 pr-0">
                                                <div className="input-group input-group-lg">
                                                    <div className="input-group-prepend"> <span
                                                            className="input-group-text border-radius-none">£</span>
                                                    </div> <input id="txt_salary"
                                                        type="text"
                                                        className="form-control form-control-lg decimal"
                                                        placeholder="0" value="100"/>
                                                </div>
                                            </div>
                                            <div className="col-6 pl-1"> <select
                                                    id="ddl_salary_mode"
                                                    className="form-control form-control-lg">
                                                    <option value="">Select Mode</option>
                                                    <option selected="" value="Hourly">
                                                        Hourly</option>
                                                </select> </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group row"> <label
                                        className="col-sm-4 col-lg-3  col-form-label col-form-label-lg">Payment
                                        Frequency </label>
                                    <div className="col-sm-8 col-lg-5">
                                        <div className="row">
                                            <div className="col-12 pl-1"> <select
                                                    id="ddl_payment_frequency"
                                                    className="form-control form-control-lg">
                                                    <option value="">Select Mode</option>
                                                    <option value="Yearly">Yearly</option>
                                                    <option value="Monthly">Monthly</option>
                                                    <option value="Biweekly">Biweekly
                                                    </option>
                                                    <option selected="" value="Weekly">
                                                        Weekly</option>
                                                </select> </div>
                                        </div>
                                    </div>
                                </div> 
                                <div className="form-group row display-none"> <label for=""
                                        className="col-sm-4 col-lg-3  col-form-label col-form-label-lg">Is
                                        Overtime Allowed?</label>
                                    <div className="col-sm-8 col-lg-5"> <span className="switch">
                                            <input id="chk_overtime_allowed" type="checkbox"
                                                className="switch"/> <label
                                                for="chk_overtime_allowed"></label> </span>
                                    </div>
                                </div>
                                <div id="divOvertimeDetails" class="dd_none">
                                    <div className="form-group row"> <label for=""
                                            className="col-sm-4 col-lg-3  col-form-label col-form-label-lg">Overtime
                                            rate per hour</label>
                                        <div className="col-sm-8 col-lg-5">
                                            <div className="input-group input-group-lg">
                                                <div className="input-group input-group-lg">
                                                    <div className="input-group-prepend"> <span
                                                            className="input-group-text border-radius-none">£</span>
                                                    </div> <input
                                                        id="txt_overtime_rate_per_hour"
                                                        className="form-control form-control-lg decimal border-radius-none"
                                                        placeholder="0" value="0"/>
                                                    <div className="input-group-append"> <span
                                                            className="input-group-text">per
                                                            hr</span> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group row"> <label for=""
                                            className="col-sm-4 col-lg-3  col-form-label col-form-label-lg">Maximmum
                                            overtime allowed</label>
                                        <div className="col-sm-8 col-lg-5">
                                            <div className="input-group input-group-lg"> <input
                                                    id="txt_maximmum_duration_overtime"
                                                    className="form-control form-control-lg decimal"
                                                    placeholder="0" value="0"/>
                                                <div className="input-group-append"> <span
                                                        className="input-group-text">hrs per
                                                        month</span> </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group row"> <label for=""
                                        className="col-sm-4 col-lg-3  col-form-label col-form-label-lg">Payment
                                        method</label>
                                    <div className="col-sm-8 col-lg-5"> <select
                                            id="ddl_paymentment_method"
                                            className="form-control form-control-lg">
                                            <option value="">Select method</option>
                                            <option value="tfr">Bank Transfer</option>
                                            <option selected="" value="cheque">Cheque
                                            </option>
                                            <option value="cash">Cash</option>
                                        </select> </div>
                                </div>
                                <h5><b>Pension</b></h5>
                                <div className="form-group row"> <label for=""
                                        className="col-sm-4 col-lg-3  col-form-label col-form-label-lg">Pension
                                        eligible?</label>
                                    <div className="col-sm-8 col-lg-5"> <span className="switch">
                                            <input id="chk_salary_pension_eligible"
                                                type="checkbox" className="switch"/> <label
                                                for="chk_salary_pension_eligible"></label>
                                        </span> </div>
                                </div>
                                <div className="form-group row"> <label for=""
                                        className="col-sm-4 col-lg-3  col-form-label col-form-label-lg">Opted
                                        out?</label>
                                    <div className="col-sm-8 col-lg-5"> <span className="switch">
                                            <input id="chk_salary_opsted_out"
                                                type="checkbox" className="switch"/> <label
                                                for="chk_salary_opsted_out"></label> </span>
                                    </div>
                                </div>
                                <div id="divPensionDetails" class="dd_none">
                                    <div className="form-group row"> <label for=""
                                            className="col-sm-4 col-lg-3  col-form-label col-form-label-lg">Employee
                                            contribution</label>
                                        <div className="col-sm-8 col-lg-5">
                                            <div className="input-group input-group-lg"> <input
                                                    id="txt_salary_employee_contribution"
                                                    className="form-control form-control-lg decimal"
                                                    placeholder="0" value="0"/>
                                                <div className="input-group-append"> <span
                                                        className="input-group-text">%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group row"> <label for=""
                                            className="col-sm-4 col-lg-3  col-form-label col-form-label-lg">Employer
                                            contribution</label>
                                        <div className="col-sm-8 col-lg-5">
                                            <div className="input-group input-group-lg"> <input
                                                    id="txt_salary_employer_contribution"
                                                    className="form-control form-control-lg decimal"
                                                    placeholder="0" value="0"/>
                                                <div className="input-group-append"> <span
                                                        className="input-group-text">%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group row"> <label for=""
                                            className="col-sm-4 col-lg-3  col-form-label col-form-label-lg">Enrolment
                                            date</label>
                                        <div className="col-sm-8 col-lg-5 ClsDatepair"> <input
                                                id="txt_salary_enrolment_date" type="text"
                                                maxlength="10"
                                                className="form-control form-control-lg date start"
                                                placeholder="dd/mm/yyyy" value=""/> </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 mb-2 text-center">
                                <hr className="m-0 mb-4"/> <button id="btnUpdateGeneralTerms"
                                    data-action="Salary-Terms"
                                    className="btn btn-primary btn-lg btn-update-terms"
                                    data-hide=".disply_rowsummery"
                                    data-show=".disply_none_rowsummery"><b>Update</b></button>
                                <button className="btn btn-outline-danger btn-lg clickmode"
                                    data-hide=".disply_rowpersonal"
                                    data-show=".disply_none_rowpersonal"><b>
                                        Cancel</b></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            <div className="item">
                <div className="item-header" id="headingfour">
                    <h2 className="mb-0"> <button className="btn btn-link collapsed" type="button"
                            data-toggle="collapse" data-target="#collaptermination"
                            aria-expanded="false" aria-controls="collaptermination">
                            Termination <i className="zmdi zmdi-chevron-down"></i> </button>
                    </h2>
                </div>
                <div id="collaptermination" className="collapse" aria-labelledby="headingfour"
                    data-parent="#accordion-Example">
                    <div className="t-p">
                        <div className="row disply_none_rowter">
                            <div className="col-md-12 col-sm-12"> <a
                                    className="btn btn-sm btn-primary hover clickmode"
                                    data-show=".disply_rowter"
                                    data-hide=".disply_none_rowter"> <i
                                        className="zmdi zmdi-edit"></i> Edit </a>
                                <div className="p-3">
                                    <p className="mb-3"> <span className="wd-180px"> Termination
                                            date </span> <span>:</span> <span
                                            className="col-black font-16 font-bold ml-1"> Sep 10
                                            2024 </span> </p>
                                    <p className="mb-3"> <span className="wd-180px"> Exit interview
                                            performed? </span> <span>:</span> <span
                                            className="col-black font-16 font-bold ml-1"> Yes
                                        </span> </p>
                                    <p className="mb-3"> <span className="wd-180px">Suitable for
                                            Re-engagement? </span> <span>:</span> <span
                                            className="col-black font-16 font-bold ml-1"> Yes
                                        </span> </p>
                                    <p className="mb-3"> <span className="wd-180px"> Reason </span>
                                        <span>:</span> <span
                                            className="col-black font-16 font-bold ml-1"> End of
                                            Contract </span>
                                    </p>
                                    <p className="mb-3"> <span className="wd-180px"> Reason Comments
                                        </span> <span>:</span> <span
                                            className="col-black font-16 font-bold ml-1">
                                        </span> </p>
                                </div>
                            </div>
                            <div className="col-md-12 mb-2 text-center">
                                <hr className="m-0 mb-4"/> <button value="Submit"
                                    className="btn btn-primary btn-lg clickmode"
                                    data-show=".disply_rowter"
                                    data-hide=".disply_none_rowter"><b>Edit</b></button>
                                <button className="btn btn-outline-danger btn-lg"><b>
                                        Cancel</b></button>
                            </div>
                        </div>
                        <div className="row disply_rowter pt-3 pb-3" style={{display:"none"}}>
                            <button className="cross clickmode" data-hide=".disply_rowter"
                                data-show=".disply_none_rowter"><i className="zmdi zmdi-close"
                                    aria-hidden="true"></i></button>
                            <div className="col-md-12">
                                <div className="form-group row"> <label for=""
                                        className="col-sm-4 col-lg-3  col-form-label col-form-label-lg">Termination
                                        date</label>
                                    <div className="col-sm-8 col-lg-5 ClsDatepair"> <input
                                            id="txt_termination_date" type="text"
                                            className="form-control form-control-lg date start"
                                            placeholder="dd/mm/yyyy" value="10/09/2024"/>
/                                    </div>
                                </div>
                                <div className="form-group row"> <label
                                        className="col-sm-4 col-lg-3  col-form-label col-form-label-lg">Reason
                                        *</label>
                                    <div className="col-sm-8 col-lg-5"> <select
                                            id="ddlTerminationReason"
                                            className="form-control form-control-lg">
                                            <option value="0">Select a Reason</option>
                                            <option value="1">Compromise Agreement </option>
                                            <option value="2">Deceased </option>
                                            <option value="3">Dismissed </option>
                                            <option selected="" value="4">End of Contract
                                            </option>
                                            <option value="5">Resigned </option>
                                            <option value="6">Retired </option>
                                        </select> </div>
                                </div>
                                <div className="form-group row"> <label for=""
                                        className="col-sm-4 col-lg-3  col-form-label col-form-label-lg">Reason
                                        Comments</label>
                                    <div className="col-sm-8 col-lg-5"> <textarea
                                            id="txt_termination_reason_comments"
                                            className="form-control form-control-lg"
                                            placeholder="Write here..."></textarea>
/                                    </div>
                                </div>
                                <div className="form-group row"> <label for=""
                                        className="col-sm-4 col-lg-3  col-form-label col-form-label-lg">Exit
                                        interview performed?</label>
                                    <div className="col-sm-8 col-lg-5"> <span className="switch">
                                            <input id="chk_exit_interview_performed"
                                                type="checkbox" className="switch"
                                                checked="checked"/> <label
                                                for="chk_exit_interview_performed"></label>
                                        </span> </div>
                                </div>
                                <div className="form-group row"> <label for=""
                                        className="col-sm-4 col-lg-3  col-form-label col-form-label-lg">Suitable
                                        for Re-engagement</label>
                                    <div className="col-sm-8 col-lg-5"> <span className="switch">
                                            <input id="chk_suitable_for_reengagement"
                                                type="checkbox" className="switch"
                                                checked="checked"/> <label
                                                for="chk_suitable_for_reengagement"></label>
                                        </span> </div>
                                </div>
                            </div>
                            <div className="col-md-12 mb-2 text-center">
                                <hr className="m-0 mb-4"/> <button value="Submit"
                                    data-action="Termination-Terms"
                                    className="btn btn-primary btn-lg btn-update-terms"
                                    data-hide=".disply_rowter"
                                    data-show=".disply_none_rowter"><b>Update</b></button>
                                <button className="btn btn-outline-danger btn-lg clickmode"
                                    data-hide=".disply_rowter"
                                    data-show=".disply_none_rowter"><b> Cancel</b></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            <div className="item">
                <div className="item-header" id="headingcollapnote">
                    <h2 className="mb-0"> <button className="btn btn-link collapsed" type="button"
                            data-toggle="collapse" data-target="#collapnote"
                            aria-expanded="false" aria-controls="collapnote"> Notes <i
                                className="zmdi zmdi-chevron-down"></i> </button> </h2>
                </div>
                <div id="collapnote" className="collapse" aria-labelledby="headingcollapnote"
                    data-parent="#accordion-Example">
                    <div className="t-p">
                        <div className="row disply_none_rownote">
                            <div className="col-md-12 col-sm-12"> <a
                                    className="btn btn-sm btn-primary hover clickmode"
                                    data-show=".disply_rownote"
                                    data-hide=".disply_none_rownote"> <i
                                        className="zmdi zmdi-edit"></i> Edit </a>
                                <div className="p-3">
                                    <p className="mb-3"> </p>
                                    <p className="col-black font-16 font-bold ml-1 term-notes">
                                        Notes 1 </p>
                                    <p></p>
                                </div>
                            </div>
                            <div className="col-md-12 mb-2 text-center">
                                <hr className="m-0 mb-4"/> <button value="Submit"
                                    className="btn btn-primary btn-lg clickmode"
                                    data-show=".disply_rownote"
                                    data-hide=".disply_none_rownote"><b>Edit
                                        -&gt;</b></button>
                            </div>
                        </div>
                        <div className="row disply_rownote pt-3 pb-3" style={{display:"none"}}>
                            <button className="cross clickmode" data-hide=".disply_rownote"
                                data-show=".disply_none_rownote"><i className="zmdi zmdi-close"
                                    aria-hidden="true"></i></button>
                            <div className="col-md-12">
                                <div className="form-group row">
                                    <div className="col-sm-12 col-lg-12"> <textarea
                                            id="txtTermNotes" style={{height:"140px"}}
                                            className="form-control form-control-lg">Notes 1</textarea>
                                        <p><small>Max 500 characters</small></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 mb-2 text-center">
                                <hr className="m-0 mb-4"/> <button value="Submit"
                                    data-action="NOTES"
                                    className="btn btn-primary btn-lg btn-update-terms"
                                    data-hide=".disply_rownote"
                                    data-show=".disply_none_rownote"><b>Update</b></button>
                                <button className="btn btn-outline-danger btn-lg clickmode"
                                    data-hide=".disply_rownote"
                                    data-show=".disply_none_rownote"><b> Cancel</b></button>
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

export default Terms;
