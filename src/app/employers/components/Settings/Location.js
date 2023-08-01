import React from 'react'
import { useState, useEffect } from 'react';
import { asyncGet } from '@/app/services/HttpServices';
import { endpoint_employer } from '@/app/services/ApiEndPoints';

export default function Location() {
    const [empLocations, setEmployerLocations] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await asyncGet(endpoint_employer + '/14/location');
                setEmployerLocations(response.Response[0].EmployerLocations);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, []);
    return (
        <>
            <div class="clearfix">
                <div class="card mb-0">
                    <div class="i_action d-flex justify-content-between align-items-center p-2 mb-0">
                        <button type="button" class="btn btn-primary dr-breakout-btn">
                            <i class="zmdi zmdi-more"></i> <span class="caret"></span>
                        </button>
                        <div class="dr-breakout displayblk">
                            <h2> Location(s)</h2>
                            <small>All locations listed here.</small>
                        </div>
                        <div class="btn-group bdrr">
                            <a id="btnAddProOtherLocation" class="btn btn-success btn-add ClsEmpProfile"
                                data-action="add" data-toggle="modal"
                                data-target="#ModalProfileLocation"> <i class="ti ti-plus mr-1"></i>Add
                                Location</a>
                            <a id="btnRefreshLocation" class="btn btn-primary ml-1"><i
                                class="zmdi zmdi-refresh">&nbsp; </i></a>

                        </div>
                    </div>
                </div>
                <div class="p-3 bdr1 h4show">


                    <div class="row" id="Location_Placeholder">
                        {empLocations.map((item) => (
                            <div class="bxsaddow col-md-6 mb-2 pl-2 pr-2">
                                <h4> <i class="zmdi zmdi-pin mr-1"></i>{item.emp_location_name} <a
                                    class="btn btn-sm btn-danger hvr ClsEmpProfile"
                                    data-action="DELETE_LOCATION"
                                    title="delete"><i class="zmdi zmdi-delete"></i></a> <a
                                        class="btn btn-sm btn-primary hvr mr-1 ClsEmpProfile"
                                        data-action="edit" data-toggle="modal"
                                        data-target="#ModalProfileLocation"> <i
                                            class="zmdi zmdi-edit mr-1"></i>Edit </a> <span
                                                class="col-green mr-2 float-right"><b><i
                                                    class="zmdi zmdi-check-all">&nbsp;</i>Default</b></span> <a class="btn btn-sm btn-success mr-2 hvr ClsEmpProfile"
                                                        data-default-status="1" data-action="CHANGE_LOCATION_STATUS"
                                                        data-status={item.emp_main_status} title="change status">Active</a> </h4>
                                <div class="p-3 bdr1 h4show cls-location-part">
                                    <p class="mb-1"> <span class="wd-16px">Name</span> <span>:</span> <span
                                        id="Span5">{item.emp_location_name}</span> </p>
                                    <p class="mb-1"> <span class="wd-16px">Address</span> <span>:</span>
                                        <span id="Span6">{item.emp_address1} {item.emp_city} {item.emp_country} {item.emp_postcode}</span> </p>
                                    <p class="mb-1"> <span class="wd-16px">Contact No. </span>
                                        <span>:</span> <span id="Span7">{item.emp_phone}</span> </p>
                                    <p class="mb-1"> <span class="wd-16px">Email </span> <span>:</span>
                                        <span id="Span8">{item.emp_email}</span> </p>
                                    <p class="mb-1"> <span class="wd-16px">Onsite Parking</span>
                                        <span>:</span> <span id="Span9" class="col-grey">{item.parking_status}</span>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

        </>
    )
}
