"use client"
import React from 'react'
import { useState, useEffect } from 'react';
import { asyncGet } from '@/app/services/HttpServices';
import { endpoint_users } from '@/app/services/ApiEndPoints';

const UserTable = () => {

  const [listUsers, setUsers] = useState([]);

  useEffect(() => {

    async function fetchUsersData() {
      try {
        const response = await asyncGet(endpoint_users);
        setUsers(response.Response[0].Users);
      } catch (error) {
        console.error('Error fetching Users data:', error);
      }
    }

    fetchUsersData();
  }, []);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [role, setRole] = useState(0);
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [isInvitationStatus, setInvitationStatus] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [mobileError, setMobileError] = useState('');


  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameError('');
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError('');
  };

  const handleMobileChange = (e) => {
    setMobile(e.target.value);
    setMobileError('');
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordVisibilityToggle = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const handleInvitationStatusToggle = () => {
    setInvitationStatus(!isInvitationStatus);
  };

  const handleUserStatusToggle = () => {
    setIsActive(!isActive);
  };

  const handleSubmit = () => {
    // Validate form data
    let isValid = true;
    if (name.trim() === '') {
      setNameError('Name is required');
      isValid = false;
    }
    if (email.trim() === '') {
      setEmailError('Email is required');
      isValid = false;
    }
    if (mobile.trim() === '') {
      setMobileError('Mobile Number is required');
      isValid = false;
    }

    if (isValid) {
      // Perform form submission logic here
      // e.g., send data to the server
      // You can also reset the form after successful submission
      resetForm();
    }
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setMobile('');
    setRole(0);
    setPassword('');
    setPasswordVisible(false);
    setInvitationStatus(false);
    setIsActive(false);
    setNameError('');
    setEmailError('');
    setMobileError('');
  };


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
                {/* <th>Invitation</th> */}
                <th className="text-center">Status</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody id="CndProfileList_Placeholder">
              {listUsers.map((item) => (
                <tr>
                  <td>
                    <div className="d-flex">
                      <div className="float-left col-black"> <i className="fa fa-user col-grey"></i> {item.user_full_name} </div>
                    </div>
                  </td>
                  <td>{item.email}</td>
                  <td><span className="col-grey">{item.mobile}</span> </td>
                  <td key={item.role_id}> {item.user_role} </td>
                  <td>{item.create_date}</td>
                 
                  <td className="text-center col-green">
                    <span class="badge badge-success cursor">{item.status}</span>
                  </td>
                  <td className="text-center">
                   
                    <a className="btn btn-outline-primary btn-sm cls-user-settings mr-1" data-toggle="modal" data-target="#modalAddUpdateUser" title="Edit">
                      <i className="zmdi zmdi-edit"></i>
                    </a>                   
                    <a  className="btn btn-outline-primary btn-sm cls-user-settings" data-action="loghistory" title="Logging History" data-toggle="modal" data-target="#modalUserLogHistory">
                      <i className="zmdi zmdi-view-list"></i>
                    </a>


                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-xs-12 text-center">
          <a id="loadmoreUsersPermission" data-records="" className="btn btn-md btn-info loadmoreUsersPermission dd_none pointer" href="javascript:void(0)">
            Load more..&nbsp; <i className="fa fa-plus">&nbsp;</i>
          </a>
        </div>
      </div>

      <div id="modalAddUpdateUser" className="modal md-one right-quater" tabIndex="-1" role="dialog"
        aria-labelledby="editsubordinates">
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
                  <div className="form-group mb-1">
                    <label className="col-form-label col-form-label-lg">
                      Name<span>*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      maxLength="50"
                      className="form-control form-control-lg userClear"
                      placeholder="Enter name"
                      value={name}
                      onChange={handleNameChange}
                    />
                    {nameError && <div className="error">{nameError}</div>}
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-group mb-1">
                    <label className="col-form-label col-form-label-lg">
                      Email<span>*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="form-control form-control-lg userClear"
                      placeholder="Enter email id"
                      value={email}
                      onChange={handleEmailChange}
                    />
                    {emailError && <div className="error">{emailError}</div>}
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group mb-1">
                    <label className="col-form-label col-form-label-lg">
                      Mobile<span>*</span>
                    </label>
                    <input
                      id="mobile"
                      type="text"
                      maxLength="11"
                      className="form-control form-control-lg userClear"
                      placeholder="Enter mobile number"
                      value={mobile}
                      onChange={handleMobileChange}
                    />
                    {mobileError && <div className="error">{mobileError}</div>}
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-group">
                    <label className="col-form-label col-form-label-lg">
                      Role<span>*</span>
                    </label>
                    <select
                      id="ddlEmpUserRole"
                      className="form-control form-control-lg"
                      value={role}
                      onChange={handleRoleChange}
                    >
                      <option data-role-id="0" data-rate="0" value="0" selected="selected">
                        User Roles
                      </option>
                      <option value="1">Accountant</option>
                      <option value="2">Manager</option>
                      <option value="3">Admin</option>
                    </select>
                  </div>
                </div>

                <div className="row col-12 mb-3 cnsdivPassword">
                  <label className="col-8 col-form-label col-form-label-lg">
                    <i className="fa fa-key font-20">&nbsp;</i>Account Password
                  </label>
                  <span className="col-4 switch  pt-2">
                    <input
                      id="chkPassword"
                      type="checkbox"
                      className="switch clsswichDoc"
                      checked={isPasswordVisible}
                      onChange={handlePasswordVisibilityToggle}
                    />
                    <label htmlFor="chkPassword"></label>
                  </span>
                </div>
                {isPasswordVisible && (
                  <div id="divPassword" className="col-12 mb-1 cnsdivPassword">
                    <div className="form-group">
                      <input
                        id="txtuserPassword"
                        type="password"
                        className="form-control form-control-lg"
                        maxLength="30"
                        placeholder="Enter user account password"
                        value={password}
                        onChange={handlePasswordChange}
                      />
                    </div>
                  </div>
                )}
                {/* Invitation Status */}
                <div className="row col-12 mb-3 clsinvitation_status">
                  <label className="col-8 col-form-label col-form-label-lg">
                    <i className="fa fa-envelope font-20">&nbsp;</i>Send invitation
                  </label>
                  <span className="col-4 switch pt-2">
                    <input
                      id="chkinvitation_status"
                      type="checkbox"
                      className="switch clsswichDoc"
                      checked={isInvitationStatus}
                      onChange={handleInvitationStatusToggle}
                    />
                    <label htmlFor="chkinvitation_status"></label>
                  </span>
                </div>
                {/* Account Status */}
                <div className="row col-12 mb-3">
                  <label className="col-6 col-form-label col-form-label-lg">
                    <i className="fa fa-user"></i> Status
                  </label>
                  <div className="col-6 pt-2">
                    <div className="d-flex justify-content-between">
                      <div>
                        <label className="">Inactive</label>
                        <span className="switch ml-1">
                          <input
                            type="checkbox"
                            className="switch clsswichDoc"
                            id="chkUserStatus"
                            checked={isActive}
                            onChange={handleUserStatusToggle}
                          />
                          <label htmlFor="chkUserStatus"></label>
                        </span>
                        <label className="">Active</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <div className="row">
                  <div className="col-md-12">
                    <div className="text-center">
                      <a
                        id="btnAddNewUser"
                        className="btn btn-primary btn-lg cls-user-settings"
                        data-action="add"
                        data-cnd_id=""
                        onClick={handleSubmit}
                      >
                        Add
                      </a>
                      <a className="btn btn-outline-danger btn-lg" data-dismiss="modal">
                        <i className="zmdi zmdi-close"></i> Close
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="modalUserLogHistory" className="modal right-half" tabIndex="-1" role="dialog"
        aria-labelledby="editsubordinates">
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
              <div className="col-12 text-center pt-3">
                <a id="loadmoreLoghistoryList" data-records=""
                  className="btn btn-md btn-default loadmoreLoghistoryList pointer" data-id=""
                  href="javascript:void(0)">
                  Load more..&nbsp; <i className="fa fa-plus">&nbsp;</i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default UserTable;