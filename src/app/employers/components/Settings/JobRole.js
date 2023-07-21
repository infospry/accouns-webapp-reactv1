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

                        <div class="modal right-quater" id="ModalCustomRole" tabindex="-1" role="dialog" aria-labelledby="ModalRoleColor">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                    <h4 class="modal-title" id="myModalLabel9">
                        <b>Role</b>
                    </h4>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-lg-12">

                            <div class="form-group mt-3">
                                <span class="col-blue">Role<span class="col-red">*</span></span>
                                <input id="txtRolename" class="form-control" type="text" placeholder="Enter role name"/>
                            </div>
                            <div class="form-group mt-3">
                                <span class="col-blue">Role Alias<span class="col-red">*</span></span>
                                <input id="txtRoleAlias" class="form-control" type="text"
                                    placeholder="Enter role alias"/>
                            </div>
                            <div class="row">
                                <div class="form-group mt-3 col-md-6">
                                    <span class="col-blue">Default Break (in min)</span>
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" style={{borderRadius:"0px"}}> <i
                                                class="zmdi zmdi-time"></i></span>

                                        <input id="txtDefaultBreak" class="form-control number"
                                            style={{borderRadius:"0px"}} maxlength="3" type="text" placeholder="0"/>
                                    </div>
                                </div>
                                <div class="form-group mt-3 col-md-6">
                                    <span class="col-blue">Default Rate (£)</span>
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" style={{borderRadius:"0px"}}> £</span>

                                        <input id="txtDefaultRate" class="form-control decimal"
                                            style={{borderRadius:"0px"}} maxlength="10" type="text" placeholder="0"/>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group mt-3">
                                <span class="col-blue">Role Color<span class="col-red">*</span>
                                    <span class="col-grey">(eg:#009688)</span></span>
                                <input id="txtLabelColorCode" class="form-control" maxlength="7" type="text"
                                    placeholder="Select color"/>
                                <hr/>
                                <div class="mt-3">
                                    <span>
                                        <span class="round pull-left colourSelectorItem">
                                            <input type="checkbox" name="lblcolor" id="ChkColor-1" class="ClslblMaster"
                                                data-action="radio" value="#888"/>
                                            <label for="ChkColor-1" class="bg-default"></label>
                                        </span>
                                        <span class="round pull-left colourSelectorItem">
                                            <input type="checkbox" name="lblcolor" id="ChkColor-2" class="ClslblMaster"
                                                data-action="radio" value="#009688"/>
                                            <label for="ChkColor-2" class="bg-teal"></label>
                                        </span>
                                        <span class="round pull-left colourSelectorItem">
                                            <input type="checkbox" name="lblcolor" id="ChkColor-3" class="ClslblMaster"
                                                data-action="radio" value="#98f"/>
                                            <label for="ChkColor-3" class="bg-indigo"></label>
                                        </span>
                                        <span class="round pull-left colourSelectorItem">
                                            <input type="checkbox" name="lblcolor" id="ChkColor-4" class="ClslblMaster"
                                                data-action="radio" value="#607D8B"/>
                                            <label for="ChkColor-4" class="bg-blue-grey"></label>
                                        </span>
                                        <span class="round pull-left colourSelectorItem">
                                            <input type="checkbox" name="lblcolor" id="ChkColor-5" class="ClslblMaster"
                                                data-action="radio" value="#9E9E9E"/>
                                            <label for="ChkColor-5" class="bg-grey"></label>
                                        </span>
                                    </span>
                                    <span>
                                        <span class="round pull-left colourSelectorItem">
                                            <input type="checkbox" name="lblcolor" id="ChkColor-6" class="ClslblMaster"
                                                data-action="radio" value="#fdd932"/>
                                            <label for="ChkColor-6" class="bg-yellow"></label>
                                        </span>
                                        <span class="round pull-left colourSelectorItem">
                                            <input type="checkbox" name="lblcolor" id="ChkColor-7" class="ClslblMaster"
                                                data-action="radio" value="#e47297"/>
                                            <label for="ChkColor-7" class="bg-blush"></label>
                                        </span>
                                        <span class="round pull-left colourSelectorItem">
                                            <input type="checkbox" name="lblcolor" id="ChkColor-8" class="ClslblMaster"
                                                data-action="radio" value="#FFC107"/>
                                            <label for="ChkColor-8" class="bg-amber"></label>
                                        </span>
                                        <span class="round pull-left colourSelectorItem">
                                            <input type="checkbox" name="lblcolor" id="ChkColor-9" class="ClslblMaster"
                                                data-action="radio" value="#03A9F4"/>
                                            <label for="ChkColor-9" class="bg-light-blue"></label>
                                        </span>
                                        <span class="round pull-left colourSelectorItem">
                                            <input type="checkbox" name="lblcolor" id="ChkColor-10" class="ClslblMaster"
                                                data-action="radio" value="#795548"/>
                                            <label for="ChkColor-10" class="bg-brown"></label>
                                        </span>
                                    </span>
                                    <span>
                                        <span class="round pull-left colourSelectorItem">
                                            <input type="checkbox" name="lblcolor" id="ChkColor-11" class="ClslblMaster"
                                                data-action="radio" value="#ff4dab"/>
                                            <label for="ChkColor-11" class="bg-pink"></label>
                                        </span>
                                        <span class="round pull-left colourSelectorItem">
                                            <input type="checkbox" name="lblcolor" id="ChkColor-12" class="ClslblMaster"
                                                data-action="radio" value="#04BE5B"/>
                                            <label for="ChkColor-12" class="bg-success"></label>
                                        </span>
                                        <span class="round pull-left colourSelectorItem">
                                            <input type="checkbox" name="lblcolor" id="ChkColor-13" class="ClslblMaster"
                                                data-action="radio" value="#82c885"/>
                                            <label for="ChkColor-13" class="bg-lime"></label>
                                        </span>
                                        <span class="round pull-left colourSelectorItem">
                                            <input type="checkbox" name="lblcolor" id="ChkColor-14" class="ClslblMaster"
                                                data-action="radio" value="#ee2558"/>
                                            <label for="ChkColor-14" class="bg-danger"></label>
                                        </span>
                                        <span class="round pull-left colourSelectorItem">
                                            <input type="checkbox" name="lblcolor" id="ChkColor-15" class="ClslblMaster"
                                                data-action="radio" value="#1cbfd0"/>
                                            <label for="ChkColor-15" class="bg-info"></label>
                                        </span>
                                    </span>
                                    <span>
                                        <span class="round pull-left colourSelectorItem">
                                            <input type="checkbox" name="lblcolor" id="ChkColor-16" class="ClslblMaster"
                                                data-action="radio" value="#0388d1"/>
                                            <label for="ChkColor-16" class="bg-primary"></label>
                                        </span>
                                        <span class="round pull-left colourSelectorItem">
                                            <input type="checkbox" name="lblcolor" id="ChkColor-17" class="ClslblMaster"
                                                data-action="radio" value="#6f42c1"/>
                                            <label for="ChkColor-17" class="bg-purple"></label>
                                        </span>
                                        <span class="round pull-left colourSelectorItem">
                                            <input type="checkbox" name="lblcolor" id="ChkColor-18" class="ClslblMaster"
                                                data-action="radio" value="#FF9948"/>
                                            <label for="ChkColor-18" class="bg-orange"></label>
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <a class="btn btn-primary ClsCustomRole" id="btnCustomRole" data-id="0"
                        data-action="insertupdate">Save</a>
                    <a class="btn btn-outline-danger" data-dismiss="modal">Cancel</a>
                </div>
            </div>
        </div>
    </div>

    </>
  )
}
