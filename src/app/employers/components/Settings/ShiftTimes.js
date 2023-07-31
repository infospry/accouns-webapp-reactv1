import React from 'react'
import { useState,useEffect } from 'react';
import { asyncGet } from '@/app/services/HttpServices';
import { endpoint_employer } from '@/app/services/ApiEndPoints'

export default function ShiftTimes() {
    const [empShifttime, setEmployerShifttime] = useState([]);
    
    useEffect(() => {
      async function fetchData() {
        try {
            const response = await asyncGet(endpoint_employer + '/14/shifttime');
          setEmployerShifttime(response.Response[0].EmployerShifttime);
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
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text"> <i
                                    class="zmdi zmdi-filter-list"></i></span>
                            </div>
                            <select id="ddlfilterrole" class="form-control">
                                <option value="" selected="selected">Select Role</option>
                                <option value="0">Default</option>
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
                                <option data-role-id="0" data-rate="30" value="119" title="Home Care">
                                    Home Care</option>
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
                        <div class="input-group mr-1 ml-1">
                            <div class="input-group-prepend">
                                <span class="input-group-text"> <i
                                    class="zmdi zmdi-filter-list"></i></span>
                            </div>

                            <input type="text" id="txtfilterSearch" class="form-control"
                                placeholder="Enter shift name" />
                        </div>
                        <div class="btn-group">
                            <a class="btn btn-primary btnSearchShiftTimming"><i
                                class="zmdi zmdi-search">&nbsp;</i>Search</a>
                        </div>
                    </div>
                </div>

                <div class="btn-group bdrr">
                    <a class="btn btn-success btn-add ClsRotaShiftTimming" data-action="openmodal"
                        data-toggle="modal" data-target="#ModalShiftTimming"> <i
                            class="ti ti-plus mr-1"></i>Shift
                        Time</a>

                    <a class="btn btn-primary ClsRotaShiftTimming ml-1" data-action="refresh"><i
                        class="zmdi zmdi-refresh">&nbsp; </i></a>
                </div>
            </div>
            <div class="table-responsive leave_management">
                <table class="table mb-0 table-hover rwd-table btdr_none emptbl">
                    <thead>
                        <tr>
                            <th style={{width:"32px"}}>SN</th>
                            <th>Shift name </th>
                            <th>Shift Time / Duration</th>
                            <th>Role Name</th>
                            <th>Status</th>
                            <th>Create Date</th>
                        </tr>
                    </thead>
                    <tbody id="tblRotaShiftTimming" class="tblRotaShiftTimming">
                    {empShifttime.map((item) => (
                        <tr>
                            <td class="text-left"><strong>{item.ROWNUMBER}</strong></td>
                            <td> <span class="colourSelectorItemtable" style={{ backgroundColor: 'item.shift_timing_color' }}></span><b
                                style={{ color: 'item.shift_timing_color' }}>{item.shift_timing_name}</b> </td>
                            <td><b class="col-black">{item.shift_start_time} - {item.shift_end_time}</b>
                            <b class="pl-3 col-blue">{item.hrs}
                                hr(s)</b></td>
                            <td><b class="col-black">{item.emp_id}</b></td>
                            <td> <a class="btn btn-success sm ClsRotaShiftTimming"
                                data-action="changestatus" data-status="1"
                                title="Click to make active or inactive">{item.status}</a>
                                <span class="table-row-btn"> <a 
                                    class="btn btn-outline-primary btn-sm ClsRotaShiftTimming"
                                    data-action="edit" data-toggle="modal"
                                    data-target="#ModalShiftTimming"><i
                                        class="zmdi zmdi-edit"></i></a> <a id="Del-41"
                                            class="ion btn btn-outline-danger btn-sm ClsRotaShiftTimming"
                                            data-action="delete">
                                        <div class="lid"></div>
                                        <div class="lidcap"></div>
                                        <div class="bin"></div>
                                    </a> </span>
                            </td>
                            <td><b class="col-grey"><i class="zmdi zmdi-calendar"></i> {item.create_date}</b>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
