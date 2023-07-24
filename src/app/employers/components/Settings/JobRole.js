import React from 'react'
import Link from "next/link";

export default function JobRole() {
  return (
    <>
      <div class="i_action d-flex justify-content-between align-items-center p-2 mb-0">
                            <button type="button" class="btn btn-primary dr-breakout-btn">
                                <i class="zmdi zmdi-more"></i> <span class="caret"></span>
                            </button>
                            <div class="dr-breakout displayblk">
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="input-group mr-1">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text"> <i class="zmdi zmdi-account"></i></span>
                                        </div>
                                        <select class="form-control" id="ddlEmployeeRoles">
                                            <option data-role-id="0" data-rate="0" value="0" selected="selected">
                                                Select Employer</option>
                                        </select>
                                    </div>
                                    <div class="input-group mr-1">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text"> <i
                                                    class="zmdi zmdi-filter-list"></i></span>
                                        </div>
                                        <input type="text" id="txtfilterSearch" class="form-control"
                                            placeholder="Search by role name/alias"/>
                                    </div>
                                    <div class="btn-group">
                                        <a class="btn btn-primary btnSearchCustomRole"><i
                                                class="zmdi zmdi-search">&nbsp;</i>Search</a>
                                    </div>
                                </div>
                            </div>

                            <div class="btn-group bdrr">
                                <a id="BtnAddNewRole" class="btn btn-success btn-add ClsCustomRole"
                                    data-action="openmodal" data-toggle="modal" data-target="#ModalCustomRole"> <i
                                        class="ti ti-plus mr-1"></i>Role</a>

                                <a class="btn btn-primary ml-1 ClsCustomRole" data-action="refresh"><i
                                        class="zmdi zmdi-refresh">&nbsp; </i></a>
                            </div>
                        </div>

                        <div class="table-responsive leave_management">
                            <table class="table mb-0 table-hover rwd-table btdr_none emptbl">
                                <thead>
                                    <tr>

                                        <th>Role </th>
                                        <th>Alias</th>
                                        
                                        <th>Default Break</th>
                                        <th>Default Rate</th>
                                        <th>Job(s)</th>
                                        <th>Shift(s)</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody id="tblCustomRole" class="tblCustomRole">
                                    <tr id="tr-131">
                                        <td class="nowrap"> <span class="colourSelectorItemtable"></span>
                                            <b class="col-info">Registered General Nurse</b>
                                        </td>
                                        <td class="nowrap"> <span> <b>Registered General
                                                    Nurse</b> </span> </td>
                                        <td class="text-center"> <span class="font-bold">15
                                                min(s)</span> </td>
                                        <td class="text-center"> <span class="col-blue font-bold">£50</span> </td>
                                        <td class="text-center">0</td>
                                        <td class="text-center">0</td>
                                        <td class="text-center"> <a id="Status-131"
                                                class="btn btn-success btn-sm ClsCustomRole"
                                                data-action="changestatus" data-status="1"
                                                title="Click to make active or inactive">Active</a>
                                        </td>
                                        <td> 
                                            <span class="table-row-btn"> <a id="Edit-131"
                                                    class="btn btn-outline-primary btn-sm ClsCustomRole"
                                                    data-action="edit" data-toggle="modal"
                                                    data-target="#ModalCustomRole"><i
                                                        class="zmdi zmdi-edit">&nbsp;</i></a>
                                                <a id="del-131"
                                                    class="ion btn btn-outline-danger btn-sm ClsCustomRole"
                                                    data-total="0-0" data-action="delete">
                                                    <div class="lid"></div>
                                                    <div class="lidcap"></div>
                                                    <div class="bin"></div>
                                                </a> </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        
    </>
  )
}
