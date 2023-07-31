import React from 'react'

import { useState,useEffect } from 'react';
import { asyncGet } from '@/app/services/HttpServices';
import { endpoint_employer } from '@/app/services/ApiEndPoints';
import { endpoint_employer_ddl } from '@/app/services/ApiEndPoints';

export default function JobRole() {

   
    const [empjobRole, setEmployerRoles] = useState([]);
    
        useEffect(() => {
          async function fetchData() {
            try {
                const response = await asyncGet(endpoint_employer + '/14/roles');
              setEmployerRoles(response.Response[0].EmployerRoles);
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          }
      
          fetchData();
        }, []);


        const [employerdropdown, setEmployers] = useState([]);
      
        useEffect(() => {
          async function fetchData() {
            try {
              const response = await asyncGet(endpoint_employer_ddl);
              setEmployers(response.Response[0].Employers);
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          }
      
          fetchData();
        }, []);
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
                                        <select className="form-control" id="ddlEmployeeRoles">
                                                            <option data-role-id="0" data-rate="0" value="0"
                                                                    selected="selected">Select Employer</option>
                                                            { employerdropdown.map((item) => (  
                                                            <option value={item.emp_id}>
                                                                {item.emp_name}
                                                            </option>
                                                            ))} 
                                                                
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
                                <tbody class="tblCustomRole">
                                {empjobRole.map((item) => (
                                     
                                    <tr>
                                        <td class="nowrap"> <span class="colourSelectorItemtable"style={{color: item.cnd_custom_role_color}}></span>
                                            <b class="col-info">{item.cnd_custom_role_name}</b>
                                        </td>
                                        <td class="nowrap"> <span> <b>{item.cnd_custom_role_alias}</b> </span> </td>
                                        <td class="text-center"> <span class="font-bold">{item.cnd_custom_break_min}
                                                min(s)</span> </td>
                                        <td class="text-center"> <span class="col-blue font-bold">£{item.cnd_custom_role_rate}</span> </td>
                                        <td class="text-center">{item.total_jobs}</td>
                                        <td class="text-center">{item.total_shift}</td>
                                        <td class="text-center"> <a class="btn btn-success btn-sm ClsCustomRole"
                                                data-action="changestatus" title="Click to make active or inactive">{item.status}</a>
                                        </td>
                                        <td> 
                                            <span class="table-row-btn"> <a 
                                                    class="btn btn-outline-primary btn-sm ClsCustomRole"
                                                    data-action="edit" data-toggle="modal"
                                                    data-target="#ModalCustomRole"><i
                                                        class="zmdi zmdi-edit">&nbsp;</i></a>
                                                <a class="ion btn btn-outline-danger btn-sm ClsCustomRole"
                                                    data-total="0-0" data-action="delete">
                                                    <div class="lid"></div>
                                                    <div class="lidcap"></div>
                                                    <div class="bin"></div>
                                                </a> </span>
                                        </td>
                                    </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        
    </>
  )
}
