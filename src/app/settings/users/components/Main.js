import React from 'react'
import LeftSidebar from '../../components/LeftSidebar';
import UserTable from './UserTable';


function Main() {
    return (
        <>
            <section className="content">
                <div className="body_scroll">
                    <div className="container-fluid">
                        <div className="row clearfix">
                            <div className="card mb-0">

                                <div className="">
                                    {/* <button className="btn btn-primary btn-sm reveal-click float-left"> <i className="zmdi zmdi-menu"></i></button> */}
                                    <div id="email-nav" className="inbox left pr-0 mr-0 lftfxd">
                                        <LeftSidebar />
                                    </div>
                                    <div className="inbox right rgtinbox">
                                       <UserTable/>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div id="modalAddUpdateUser" className="modal md-one right-quater" tabIndex="-1" role="dialog" aria-labelledby="editsubordinates">
      <div className="modal-dialog ui-draggable" role="document">
        <div className="modal-content">
          <div className="modal-header ui-draggable-handle">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
            <h4 className="modal-title" id="myModalLabel2">
              <b>Add / Update User </b>
            </h4>
          </div>
          <div className="modal-body pl-0 pr-0">
            <div className="row m-0">
              <div className="col-12 mt-2">
                <div className="form-group  mb-1">
                  <label className="col-form-label col-form-label-lg">
                    Name<span>*</span>
                  </label>
                  <input id="txtEmpUserName" type="text" maxLength="50" className="form-control form-control-lg userClear" placeholder="Enter name" />
                </div>
              </div>

              <div className="col-12">
                <div className="form-group mb-1">
                  <label className="col-form-label col-form-label-lg">
                    Email<span>*</span>
                  </label>
                  <input id="txtEmpUserEmail" type="email" maxLength="50" className="form-control form-control-lg userClear" placeholder="Enter email id" />
                </div>
              </div>
              <div className="col-12">
                <div className="form-group mb-1">
                  <label className="col-form-label col-form-label-lg">
                    Mobile<span>*</span>
                  </label>
                  <input id="txtEmpUserMobile" type="text" maxLength="11" className="form-control form-control-lg userClear" placeholder="Enter mobile number" />
                </div>
              </div>

              <div className="col-12">
                <div className="form-group">
                  <label className="col-form-label col-form-label-lg">
                    Role<span>*</span>
                  </label>
                  <select id="ddlEmpUserRole" className="form-control form-control-lg">
                    <option data-role-id="0" data-rate="0" value="0" selected="selected">User Roles</option>
                    <option value="1">Accountant</option>
                    <option value="2">Manager</option>
                    <option value="3">Admin</option>
                  </select>
                </div>
              </div>

              <div className="row col-12 mb-3 cnsdivPassword">
                <label className="col-8 col-form-label col-form-label-lg"><i className="fa fa-key font-20">&nbsp;</i>Account Password</label>
                <span className="col-4 switch  pt-2">
                  <input id="chkPassword" type="checkbox" className="switch clsswichDoc" />
                  <label htmlFor="chkPassword"></label>
                </span>
              </div>
              <div id="divPassword" className="dd_none col-12 mb-1 cnsdivPassword">
                <div className="form-group">
                  <input id="txtuserPassword" type="password" className="form-control form-control-lg" maxLength="30" placeholder="Enter user account password" />
                </div>
              </div>
              {/* Invitation Status */}
              <div className="row col-12 mb-3 clsinvitation_status">
                <label className="col-8 col-form-label col-form-label-lg"><i className="fa fa-envelope font-20">&nbsp;</i>Send invitation</label>
                <span className="col-4 switch pt-2">
                  <input id="chkinvitation_status" type="checkbox" className="switch clsswichDoc" />
                  <label htmlFor="chkinvitation_status"></label>
                </span>
              </div>
              {/* Account Status */}
              <div className="row col-12 mb-3">
                <label className="col-6 col-form-label col-form-label-lg"><i className="fa fa-user"></i> Status</label>
                <div className="col-6 pt-2">
                  <div className="d-flex justify-content-between">
                    <div>
                      <label className="">Inactive</label>
                      <span className="switch ml-1">
                        <input type="checkbox" className="switch clsswichDoc" id="chkUserStatus" />
                        <label htmlFor="chkUserStatus"></label>
                      </span>
                      <label className="">Active</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <div className="row">
              <div className="col-md-12">
                <div className="text-center">
                  <a id="btnAddNewUser" className="btn btn-primary btn-lg cls-user-settings" data-action="add" data-cnd_id="">Add</a>
                  <a className="btn btn-outline-danger btn-lg" data-dismiss="modal"><i className="zmdi zmdi-close"></i> Close</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="modalUserLogHistory" className="modal right-half" tabIndex="-1" role="dialog" aria-labelledby="editsubordinates">
      <div className="modal-dialog ui-draggable" role="document">
        <div className="modal-content">
          <div className="modal-header ui-draggable-handle">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
            <h4 className="modal-title">
              <b><span id="spanLogName"></span> Login History</b>
            </h4>
          </div>
          <div className="modal-body pl-0 pr-0">
            <div className="table-responsive">
              <table className="table table-hover overflow-y rwd-table btdr_none">
                <thead>
                  <tr>
                    <th>SrNo.</th>
                    <th>Session</th>
                    <th>Session Time</th>
                    <th>Session Details</th>
                  </tr>
                </thead>
                <tbody id="LoghistoryList_Placeholder">
                  {/* You can add dynamic content here if needed */}
                </tbody>
              </table>
            </div>
            <div className="col-xs-12 text-center">
              <a id="loadmoreLoghistoryList" data-records="" className="btn btn-md btn-default loadmoreLoghistoryList pointer" data-id="" href="javascript:void(0)">
                Load more..&nbsp; <i className="fa fa-plus">&nbsp;</i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
        </>
    )
}

export default Main
