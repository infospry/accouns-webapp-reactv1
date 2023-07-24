import React from 'react'

const UserTable = () => {
    return (
     <>
        <div className="body bdr-0 pt-0 pl-0 pr-0 pb-2">
          <div className="i_action d-flex justify-content-between align-items-center p-2 mb-0">
            <button type="button" className="btn btn-primary dr-breakout-btn">
              <i className="zmdi zmdi-more"></i> <span className="caret"></span>
            </button>
            <div className="dr-breakout displayblk">
              <div className="d-flex justify-content-between align-items-center">
                <div className="input-group">
                  <select className="form-control" id="ddlEmployeeRolesPermission">
                    <option data-role-id="0" data-rate="0" value="0" selected="selected">User Roles</option>
                    <option value="1">Accountant</option>
                    <option value="2">Manager</option>
                    <option value="3">Admin</option>
                  </select>
  
                  <input id="txtuserSearch" className="form-control" placeholder="Enter Name or Email" />
                </div>
                <div className="btn-group ml-1">
                  <a id="btnSearchEmployeesPermission" className="btn btn-primary"><i className="zmdi zmdi-search">&nbsp;</i>Search</a>
                </div>
              </div>
            </div>
  
            <div className="btn-group bdrr">
              <a className="btn btn-success btn-add cls-user-settings" data-action="adduser" data-id="" data-toggle="modal" data-target="#modalAddUpdateUser">
                <i className="ti ti-plus mr-1"></i>User
              </a>
  
              <a id="btnSearchEmployeesPermissionRefresh" className="btn btn-primary ml-1" data-action="cancel">
                <i className="zmdi zmdi-refresh">&nbsp; </i>
              </a>
            </div>
          </div>
  
          <div className="table-responsive leave_management">
            <table className="table mb-0 table-hover rwd-table btdr_none emptbl">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>Role</th>
                  <th>Create Date</th>
                  <th>Invitation</th>
                  <th className="text-center">Status</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody id="CndProfileList_Placeholder">
                <tr>
                  <td>
                    <div className="d-flex">
                      {/*<div _tmplitem="25"  className="avatar w_55 float-left">
                        <span _tmplitem="25"  className="cbptmicon bdr_rad mt-0">
                          <img _tmplitem="25"  src="/images/user.png" alt="user" className="bdr_rad" width="37" height="37">
                        </span>
                      </div>*/}
                      <div className="float-left mt-2 col-black"> <i className="fa fa-user-md"></i> Healthcare Demo </div>
                    </div>
                  </td>
                  <td>demo.healthcare@thestaffport.com</td>
                  <td><span className="col-grey">NA</span> </td>
                  <td> Admin </td>
                  <td>08/06/2023 12:31PM</td>
                  <td>
                    <a id="invite-12"  className="btn btn-outline-primary btn-sm cls-user-settings" data-cnd_id="12" data-name="Healthcare Demo " data-email="demo.healthcare@thestaffport.com" data-mobile="" data-action="invite" title="Send Invitation">
                      Send
                    </a>
                  </td>
                  <td className="text-center col-green">
                    <a >ACTIVE</a>
                  </td>
                  <td className="text-center">
                    <a id="viewpermission-12" className="btn btn-outline-primary btn-sm disabled" data-user_id="12" data-name="Healthcare Demo " data-email="demo.healthcare@thestaffport.com" data-mobile="" data-role_id="3" data-action="viewpermission" title="Permission">
                      <i className="zmdi zmdi-settings"></i>
                    </a>
                    &nbsp;
                    <a id="edit-12" className="btn btn-outline-primary btn-sm cls-user-settings" data-name="Healthcare Demo " data-email="demo.healthcare@thestaffport.com" data-mobile="" data-role_id="3" data-status="1" data-auth_status="0" data-auth_type="SMS" data-action="edit" title="Edit">
                      <i className="zmdi zmdi-edit"></i>
                    </a>
                    &nbsp;
                    <a id="history-12" className="btn btn-outline-primary btn-sm cls-user-settings" data-name="Healthcare Demo " data-action="loghistory" title="Logging History" data-toggle="modal" data-target="#modalUserLogHistory">
                      <i className="zmdi zmdi-view-list"></i>
                    </a>
                    &nbsp;
                    {/*<a _tmplitem="25"  id="delete-12" className="ion btn btn-outline-danger btn-sm cls-user-settings" data-action="delete" title="Move to Trash">                 
                      <div _tmplitem="25"  className="lid"></div>                 
                      <div _tmplitem="25"  className="lidcap"></div>                 
                      <div _tmplitem="25"  className="bin"></div>
                    </a>*/}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-xs-12 text-center">
            <a id="loadmoreUsersPermission" data-records="" className="btn btn-md btn-info loadmoreUsersPermission dd_none pointer" href="javascript:void(0)">
              Load more..&nbsp; <i className="fa fa-plus">&nbsp;</i>
            </a>
          </div>
        </div>
     </>
    );
  };
  
  export default UserTable;