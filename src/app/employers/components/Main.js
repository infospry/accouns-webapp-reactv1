import Link from "next/link";
import Settings from "./Settings";
function Main() {

    return(
        <>
<section className="content">
        <div className="body_scroll ">
            <div className="container-fluid">
                <div className="row clearfix">
                    <div className="col-md-12 p-0">
                        <div className="card mb-0">
                            <div className="booktab d-flex justify-content-between align-items-center sadow p-2">
                                <h2><i className="zmdi zmdi-widgets"></i> Employers</h2>
                                <span id="div_planner_tour">
                                    <button id="startTourEmployees" data-tour-action="create_employee"
                                        className="btn btn-success">Start Tour</button>
                                </span>
                            </div>
                            <div className="tab-content bg-white border-top">
                               
                                <div role="tabpanel" className="tab-pane pt-0 pl-0 pr-0 pb-2 active show" id="list_view">
                                    <div className="i_action d-flex justify-content-between align-items-center p-2 mb-0">
                                        <button type="button" className="btn btn-primary dr-breakout-btn">
                                            <i className="zmdi zmdi-filter-list"></i> <span className="caret"></span>
                                        </button>
                                        <div className="dr-breakout displayblk">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="input-group mr-1">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text"> <i
                                                                className="zmdi zmdi-account"></i></span>
                                                    </div>
                                                    <select className="form-control" id="ddlEmployeeRoles">
                                                        <option data-role-id="0" data-rate="0" value="0"
                                                            selected="selected">Select Sector</option>
                                                        <option data-role-id="0" data-rate="50" value="111"
                                                            title="Advance Nurse Practitioner">Advance Nurse
                                                            Practitioner</option>
                                                        <option data-role-id="0" data-rate="60" value="114"
                                                            title="Care Assistant">Care Assistant</option>
                                                        <option data-role-id="0" data-rate="70" value="115"
                                                            title="Clinical Practitioner">Clinical Practitioner</option>
                                                        <option data-role-id="0" data-rate="48.25" value="116"
                                                            title="Forensic Nurse">Forensic Nurse</option>
                                                        <option data-role-id="0" data-rate="100" value="117"
                                                            title="General Practitioner">General Practitioner</option>
                                                        <option data-role-id="0" data-rate="60" value="118" title="HCA">
                                                            HCA</option>
                                                        <option data-role-id="0" data-rate="30" value="119"
                                                            title="Home Care">Home Care</option>
                                                        <option data-role-id="0" data-rate="80" value="120"
                                                            title="Hospital Doctor">Hospital Doctor</option>
                                                        <option data-role-id="0" data-rate="80" value="122"
                                                            title="Opthalmologist">Opthalmologist</option>
                                                        <option data-role-id="0" data-rate="70.75" value="123"
                                                            title="Pharmacist">Pharmacist</option>
                                                        <option data-role-id="0" data-rate="45.5" value="127"
                                                            title="Practice Nurse">Practice Nurse</option>
                                                        <option data-role-id="0" data-rate="45.25" value="130"
                                                            title="Receptionist">Receptionist</option>
                                                        <option data-role-id="0" data-rate="50" value="131"
                                                            title="Registered General Nurse">Registered General Nurse
                                                        </option>
                                                        <option data-role-id="0" data-rate="40" value="133"
                                                            title="Support Worker">Support Worker</option>
                                                    </select>
                                                </div>

                                                <div className="input-group mr-1">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text"> <i
                                                                className="zmdi zmdi-search-for"></i></span>
                                                    </div>
                                                    <input id="txtEmployeesname" className="form-control"
                                                        placeholder="Enter Employer"/>
                                                </div>

                                                <div className="btn-group">
                                                    <Link id="btnSearchEmployees" href="/" className="btn btn-primary"
                                                        data-action="save"><i
                                                            className="zmdi zmdi-search">&nbsp;</i>Search</Link>
                                                    <Link id="btnSearchEmployeesRefresh"href="/" 
                                                        className="btn btn-primary ml-1 font-16 btnSearchEmployeesRefresh"
                                                        data-action="cancel"><i className="zmdi zmdi-refresh">&nbsp;
                                                        </i></Link>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                    <ul className="nav nav-tabs nav-justified p-0 bdr-tp-n nav-tabs-responsive">
                                        <li id="tab_emp_all" className="nav-item cnd-navigation-tabs active" data-get="All">
                                            <Link className="nav-link  show active"href="/"  data-toggle="tab">
                                                <b>All</b>
                                            </Link>
                                        </li>
                                        <li className="nav-item cnd-navigation-tabs" data-get="P">
                                            <Link href="/"  className="nav-link show" data-toggle="tab">
                                                <b>Active</b>
                                            </Link>
                                        </li>
                                        <li className="nav-item cnd-navigation-tabs prev" data-get="S">
                                            <Link href="/"  className="nav-link show" data-toggle="tab">
                                                <b>Inactive</b>
                                            </Link>
                                        </li>
                                    </ul>
                                    <div className="tab-content p-2">
                                        <div role="tabpanel" className="tab-pane in active show" id="emp_all">
                                            <div className="table-responsive leave_management">
                                                <table className="table mb-0 table-hover rwd-table btdr_none emptbl">
                                                    <thead>
                                                        <tr>
                                                            <th>EMP#</th>
                                                            <th>Employer name</th>
                                                            <th>Sector</th>
                                                            <th>Total Employee(s)</th>
                                                            <th>Category</th>
                                                            <th>Create Date</th>
                                                            <th>Account Status</th>
                                                            <th>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody id="CndProfiles_Placeholder">
                                                        <tr>
                                                            <td scope="row"> 1 </td>
                                                            <td>
                                                                <div className="d-flex">

                                                                    <div className="float-left mt-2 col-black"> <Link href="/" 
                                                                            className="btn-cnd-profiles-view"
                                                                            data-toggle="modal" data-val="107"
                                                                            data-sub-type="Agency"><b>A to Z Health
                                                                                Center</b></Link> </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                Healthcare
                                                            </td>
                                                            <td>
                                                                25
                                                            </td>
                                                            <td className="col-blue">
                                                                General Practice
                                                            </td>
                                                            <td>
                                                                20/04/2023 10:50AM
                                                            </td>
                                                            <td> <Link href="/" className="badge badge-success cursor"> ACTIVE </Link>
                                                            </td>
                                                            <td>
                                                                <button className="btn btn-outline-primary btn-sm"
                                                                    data-toggle="modal" data-target="#emp_settings"><i
                                                                        className="zmdi zmdi-settings"></i></button>

                                                            </td>
                                                        </tr>

                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <div class="modal right-full" id="emp_settings" tabindex="-1" role="dialog" aria-labelledby="emp_settings"
        aria-modal="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content hightauto">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close" id="btnPopClose">
                        <span aria-hidden="true">×</span>
                    </button>
                    <h4 class="modal-title"><b>Employer Settings</b></h4>
                </div>
                <div class="modal-body pl-0 pr-0">                  
<Settings></Settings>
                </div>
                <div class="modal-footer position_relatie">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="text-center">
                                <button value="Submit" id="btnEditSave" class="btn btn-primary"> Update</button>
                                <button value="Submit" id="btnEditCancel" class="btn btn-outline-danger">Close</button>
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
export default Main;