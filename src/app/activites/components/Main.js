"use client"
import React from 'react'
import Link from "next/link";
import ApiEndPoints from "../../utils/ApiEndPoints";
import { getData } from "../../services/apiservice";
import { useEffect, useState } from "react";
import { get } from "../../services/api_axios_services";



function Main ({ activitiesList = [] }) {
    const [loader, setLoader] = useState(false);
    const [activities, setActivities] = useState(activitiesList);
    const loadMoreActivities = async (e) => {
        setLoader(true)
        e.preventDefault();
        ns_util.replace_html_in_element("#btn_activitylm", 'Loading...<i class="fa fa-spinner fa-pulse"></i>')
        let offset = activities[activities.length - 1].ROWNUMBER;
        let total_count = activities[activities.length - 1].total_count;
        var activityStatus = $('#ddl_activity_filter').val();
        if (offset < total_count) {
            var params = {"action":"activity","action_on":"leads_main","request_for":"load-more","action_type": activityStatus,"previous":offset,"next":10};
            const response = await get(params, ApiEndPoints.opportunity)
            setActivities([...activities, ...response.data.response.activity_info]);
            setLoader(false)
        }
    }
    const searchActivities = async (e) => {
        setLoader(true)
        e.preventDefault();
        var activityStatus = $('#ddl_activity_filter').val();
        var params = { "action": "activity", "action_on": "leads_main", "request_for": "select", "action_type": activityStatus, "previous": 0, "next": 10 };
        const response = await get(params, ApiEndPoints.opportunity)
        if (response.data.response.activity_info !== '')
            setActivities(response.data.response.activity_info)
        else {
            setSessionList([])
        }
        setLoader(false)
    }
    const refreshList=async(e)=>{
        setLoader(true)
        $('#ddl_activity_filter').val('');
        e.preventDefault();
        var params = {"action":"activity","action_on":"leads_main","request_for":"load-more","previous":1,"next":10};
        const resp = await get(params, ApiEndPoints.opportunity);
        if (resp.response_status === "OK") {
            setActivities(resp.data.response.activity_info)
            setLoader(false)
        }
    }
    useEffect(() => {
        if (activities !== undefined) {
            if (activities.length > 0) {
                let offset = activities[activities.length - 1].ROWNUMBER;
                let total_count = activities[activities.length - 1].total_count;
                
                if (offset < total_count) {
                    ns_util.replace_html_in_element("#btn_activitylm", "Load more")
                    ns_util.show_element("#btn_activitylm");
                }
                else {
                    ns_util.hide_element("#btn_activitylm");
                }
            }
            else {
                ns_util.hide_element("#btn_activitylm");
            }
        }
        else {
            setLoader(false);
        }
    })
  return (
    <section className="content">
        <div className="loader"></div>
        <div className="body_scroll">
            <div className="scrolfx">
                <div className="booktab d-flex justify-content-between align-items-center bdrb">
                    <div className="p-2">
                        <h2 className="font-bold mb-0">Activity </h2>
                    </div>
                    <div className="pagination-email"></div>
                </div>
                <div className="bdrb d-flex justify-content-between align-items-center p-2"style={{ borderTop: "0px" }}>
                        <div className="mt-0 bdrl hidden-xs">
                            <div className="input-group" style={{ width: "300px" }}>
                                <select id="ddl_activity_filter"  onChange={searchActivities} className="form-select radius_l">
                                    <option value="">All</option>
                                    <option value="1">Important</option>
                                </select>
                                <button id="btnSearchActivity" onClick={searchActivities} disabled={loader} className="btn btn-outline-secondary radius_r">Search</button>
                               
                            </div>
                        </div>
                        {loader && <span>Loading...</span>}
                        <div className="bdbdtn">
                            <div className="btn-group">
                                <button className="btn btn-outline-primary " disabled={loader} onClick={refreshList}><i className="zmdi zmdi-rotate-left">&nbsp;</i>Refresh</button>
                            </div>
                        </div>
                       
                    </div>
            </div>
            <div className="scroll_bar">
                <div className="container-fluid"> 
                    <div className="row justify-content-center">
                        <div className="col-md-12 col-lg-10 offset-lg-1 pro mt-3 mb-4 mb-3">

                            <div className="timeline-centered">
                                        {activities.map((act, i) => (
                                                <article key={i} className="timeline-entry">
                                                    <div className="timeline-entry-inner">
                                                        <time className="timeline-time" dateTime="2014-01-10T03:45"><span>{act.action_date} </span></time>
                                                        <div className="timeline-icon bg-primary">
                                                            <b>{act.action_time}</b>
                                                        </div>
                                                        <div className="timeline-label">
                                                            <h2><b>{act.user_name}</b></h2>
                                                            <p className="col-blue">{act.entity_type} | {act.entity_section}</p>
                                                            <p className="font-16">
                                                                <span className="col-grey">{act.entity_type === 'LEAD' ? "#Lead no{" : "#Org no"} {act.entity_id}</span>
                                                                <span className={"bold"}>- </span>{act.action_desc !== '' ? act.action_desc : act.msg_desc}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </article>
                                            ))}

                            </div>
                            <hr/>
                            <div className="text-center">
                                <button disabled={loader} id="btn_activitylm" onClick={loadMoreActivities} className="btn btn-outline-primary mb-5">
                                    <b className="col-blue">Load More</b> →</button>
                            </div>
    {/* 
                            <div className="text-center pt-2 pb-4 pl-4 mt-5">
                                <h5><span style={{ color: "red" }}>Sorry! no activity found!</span></h5>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Main
