
import ReportsMenu from "../../components/ReportsMenu"
import Head from 'next/head';
import { useEffect, useState } from "react";
import ApiEndPoints from "../../../utils/ApiEndPoints";
import { get } from "../../../services/api_axios_services";
import { getData } from "../../../services/apiservice";

const scheduledleads = ({ scheduled_leads = [] }) => {
    const [s_leads, setS_leads] = useState(scheduled_leads);
    const [loader, setLoader] = useState(false);
    const[searchInput,setSearchInput]=useState();//txt_daterangeSheduledLeads
    const selectdateRange = (e) => {
        daterange();
    }
    const searchSchduleLeads=async(e)=>{
        setLoader(true)
        e.preventDefault();
        var dateRange1 = $('#txt_daterangeSheduledLeads').val();
        let frmDt="";
        let toDt="";
        if (dateRange1 !== "") {
            frmDt=dateRange1.split('-')[0].trim()
            toDt=dateRange1.split('-')[1].trim()
        }
        
        var params = {"str_search": searchInput, "from_date": frmDt, "to_date": toDt, "action": "scheduled-leads", "request_for": "filter", "route": "Reports/ScheduledLeads", "previous": "0", "next": "10" };
            const response = await get(params, ApiEndPoints.ReportsApi)
            if(response.data.response !=='')
            setS_leads(response.data.response.report);
            else{
                setS_leads([])
            }
            setLoader(false)
    }
    const refreshList=async(e)=>{
        setLoader(true)
        setSearchInput('');
        $('#txt_daterangeSheduledLeads').val('');
        e.preventDefault();
        var params = { "action": "scheduled-leads", "request_for": "refresh", "route": "Reports/ScheduledLeads", "previous": "0", "next": "10" };
        const response = await get(params, ApiEndPoints.ReportsApi);
        console.log(response)
        if(response.data.response !=='')
        setS_leads(response.data.response.report);
        else{
            setS_leads([])
        }
        setLoader(false)
    }
    
    const loadMore = async (e) => {
        setLoader(true)
        e.preventDefault();
        var dateRange1 = $('#txt_daterangeSheduledLeads').val();
        let frmDt="";
        let toDt="";
        if (dateRange1 !==""){
            frmDt=dateRange1.split('-')[0].trim()
            toDt=dateRange1.split('-')[1].trim()
        }
        ns_util.replace_html_in_element("#txt_daterangeSheduledLeads", 'Loading...<i class="fa fa-spinner fa-pulse"></i>')
        let offset = s_leads[s_leads.length - 1].ROWNUMBER;
        let total_count = s_leads[s_leads.length - 1].total_count;
        if (offset < total_count) {
            var params = {"str_search": searchInput, "from_date": frmDt, "to_date": toDt, "action": "scheduled-leads", "request_for": "load-more", "route": "Reports/ScheduledLeads", "previous": offset, "next": "10" };
            const response = await get(params, ApiEndPoints.ReportsApi)
            setS_leads([...s_leads, ...response.data.response.report]);
            setLoader(false)
        }
    }
    useEffect(() => {
        if (s_leads !== undefined) {
            if (s_leads.length > 0) {
                let offset = s_leads[s_leads.length - 1].ROWNUMBER;
                let total_count = s_leads[s_leads.length - 1].total_count;
                
                if (offset < total_count) {
                    ns_util.replace_html_in_element("#loadMoreScheduleLeads", "Load more")
                    ns_util.show_element("#loadMoreScheduleLeads");
                }
                else {
                    ns_util.hide_element("#loadMoreScheduleLeads");
                }
            }
            else {
                ns_util.hide_element("#loadMoreScheduleLeads");
            }
        }
        else {
            setLoader(false);
        }
    })

    return (
        <>
           
            <section className="content">
                <div className="loader"></div>
                <div className="body_scroll ">
                    <div className="scrolfx">
                        <div className="booktab d-flex justify-content-between align-items-center bdrb p-2">
                            <div className="">
                                <h2 className="font-bold"><i className="zmdi zmdi-trending-up">&nbsp;</i>Scheduled Leads</h2>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 d-flex ps-0 pe-0">
                                <div className="mobile-left">
                                    <a className="btn btn-info btn-icon toggle-email-nav collapsed" data-toggle="collapse" href="#email-nav" role="button" aria-expanded="false" aria-controls="email-nav">
                                        <span className="btn-label"><i className="zmdi zmdi-more"></i></span>
                                    </a>
                                </div>
                                <ReportsMenu />
                                <div className="inbox right mt-0">
                                    
                                    <div class="bdrb d-flex justify-content-between align-items-center p-2" style={{borderTop:"0px"}}>
                                        <div class="bdbdtn">
                                            <div class="btn-group mt-0 bdrl hidden-xs">
                                            <div className="input-group">
                                                    <input type="text" id="txt_userinput"
                                                     onChange={(e)=>setSearchInput(e.target.value)} value={searchInput || ''} defaultValue={searchInput}
                                                    className="form-control" placeholder="Search by user" autoComplete="off" />&nbsp;
                                                    <input id="txt_daterangeSheduledLeads" type="text" className="form-control daterange" placeholder="Search by date range" onFocus={selectdateRange} />&nbsp;
                                                    <div className="input-group-append">
                                                        <a id="btnSearch" onClick={searchSchduleLeads} className="input-group-text btn-outline-info" data-action="scheduled-leads" data-request-for="filter">Search</a>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </div>
                                        <div className="btn-group n-lg">
                                                <button type="button" className="btn btn-outline-primary dropdown-toggle dr-breakout-btn mb-0" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="zmdi zmdi-more-vert"></i> Action <span className="caret"></span></button>
                                                <ul className="dropdown-menu dr-breakout">
                                                    <li className="btn btn-outline-primary" onClick={refreshList} data-action="scheduled-leads" data-request-for="refresh" type="button"> <i className="zmdi zmdi-rotate-left"></i><span>Refresh</span></li>
                                                </ul>
                                            </div>
                                            
                                    </div>
                                    {loader && <span>Loading...</span>}
                                    <div className="p-2">
                                        <div className="card bdr5 p-1">
                                        {console.log(s_leads)}
                                            {s_leads.length > 0 ?
                                                <div className="table-responsive">
                                                    <table className="table table-hover rwd-table btdr_none mb-0" id="sortable">
                                                        <thead className="dnone-mob">
                                                            <tr className="font_btd">
                                                                <th>#</th>
                                                                <th className="pt-3 pb-3">Lead Name</th>
                                                                <th>Company Name</th>
                                                                <th>Email</th>
                                                                <th>City</th>
                                                                <th>Added Date & Time</th>
                                                                <th>Event Added Date & Time</th>
                                                                <th>Event Added By</th>
                                                                <th>Event Start</th>
                                                                <th>Event End</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {s_leads.map((lead,i)=>(
                                                            <tr key={i}>
                                                                <td>{lead.ROWNUMBER}</td>
                                                                <td className="pt-3 pb-3 bold">{lead.ead_details.lead_name}</td>
                                                                <td>{lead.lead_details.lead_company_name}</td>
                                                                <td>{lead.lead_details.lead_email}</td>
                                                                <td>{lead.lead_details.lead_city}</td>
                                                                <td className="col-grey">{lead.create_date} {lead.create_time}</td>
                                                                <td className="col-grey">{lead.event_create_date} {lead.event_create_time}</td>
                                                                <td>{lead.user_name}</td>
                                                                <td className="col-grey">{lead.event_start_date} {lead.event_start_time}</td>
                                                                <td className="col-grey">{lead.event_end_date} {lead.event_end_time}</td>
                                                            </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                    <div className="text-center">
                                                        <a id="loadMoreScheduleLeads" onClick={loadMore} className="btn btn-outline-primary mt-3 mb-4 " data-action="scheduled-leads" data-request-for="load-more" data-cnt="{count}" data-previous="{previous}"><b className="col-blue">Load More</b> →</a>
                                                    </div>
                                                </div>
                                                :
                                                <div className="text-center pt-2 pb-4 pl-4 mt-5">
                                                    <h5><span style={{ color: "red" }}>Sorry! no record found!</span></h5>
                                                </div>
                                            }
                                        </div>    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export const getServerSideProps = async ({ req, res }) => {
    try {
        //scheduled leads data
        var params = { "action": "scheduled-leads", "request_for": "select", "route": "Reports/ScheduledLeads", "previous": "0", "next": "10" };
        const lang = req.cookies['signin_token']
        if ((lang === "''") || (lang === undefined)) {
            res.writeHead(302, { Location: "/login" })
            res.end()
        }
        const response = await getData(params, lang, ApiEndPoints.ReportsApi)

        return {
            props: {
                // scheduled_leads: JSON.parse(response).response_status === "OK" ? JSON.parse(response).data.response.report : '[]',
                scheduled_leads: JSON.parse(response).data.response.report !== "" ? JSON.parse(response).data.response.report : [],
            },
        }
    } catch (err) {
        // Handle error
        return {
            props: null
        }
    }
}
export default scheduledleads