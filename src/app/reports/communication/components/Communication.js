import React from 'react'
import Head from 'next/head'
import ReportsMenu from '../../components/ReportsMenu';
import ApiEndPoints from '../../../utils/ApiEndPoints';
import { getData } from '../../../services/apiservice';
const communication = ({communicationList=[]}) => {
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
                                        <div className="bdbdtn">
                                            <div className="btn-group mt-9px ml-2 pl-3 mt-0 bdrl hidden-xs">
                                                <div className="input-group">
                                                    <input type="text" id="txt_userinput" className="form-control" placeholder="Search by user" autoComplete="off" />&nbsp;
                                                    <input id="txt_daterange" type="text" className="form-control daterange" placeholder="Search by date range" onfocus="daterange()" />&nbsp;
                                                    <div className="input-group-append">
                                                        <a id="btnSearch" className="input-group-text btn-outline-info evt-reports-action" data-action="communication" data-request-for="filter">Search</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="btn-group n-lg">
                                                <ul className="dropdown-menu dr-breakout">
                                                    <li className="btn btn-outline-primary evt-reports-action" type="button" data-action="communication" data-request-for="refresh"> <i className="zmdi zmdi-rotate-left"></i><span>Refresh</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="body mb-1 p-3">
                                        <div className="container-fluid">
                                            <div className="row">
                                                <div className="col-12 col-md-6 col-lg-3 col-xs-3 items">
                                                    <div className="card bdr5 mt-0">
                                                        <div className="header pt-2 pl-2">
                                                            <h2><i className="zmdi zmdi-view-dashboard">&nbsp;</i>{"message_type"}<br /></h2>
                                                        </div>
                                                        <div className="body pt-1 pb-0">
                                                            <div className="icon-small">
                                                                <div className="w_icon cyan">{"message_count"}</div><h4>{"message_type"}</h4>
                                                            </div>
                                                            <div className="state_w1 mb-1 mt-0 ml-3">
                                                                <div className="d-flex justify-content-between">
                                                                    <div>
                                                                        <a className="btn btn-brimary float-right text-right font-14 btnnn mt-2 evt-reports-action" data-action="communication" data-request-for="leads-list" data-message-type="{message_type}">View →</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-lg-3 col-xs-3 items">
                                                    <div className="card bdr5 mt-0">
                                                        <div className="header pt-2 pl-2">
                                                            <h2><i className="zmdi zmdi-view-dashboard">&nbsp;</i>Total<br /></h2>
                                                        </div>
                                                        <div className="body pt-1 pb-0">
                                                            <div className="icon-small">
                                                                <div className="w_icon cyan">{"count"}</div><h4>Leads</h4>
                                                            </div>
                                                            <div className="state_w1 mb-1 mt-0 ml-3">
                                                                <div className="d-flex justify-content-between">
                                                                    <div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* {{ else}} */}
                                        <div className="text-center pt-2 pb-4 pl-4 mt-5">
                                            <h5><span style={{color:"red"}}>Sorry! no record found!</span></h5>
                                        </div>
                                        <h5 className="text-center"><b id="messageheader"></b></h5>
                                        <div className="card bdr5 p-1 mt-2">
                                            <div className="table-responsive mt-2">
                                                <table className="table rwd-table mb-0" id="sortable">
                                                    <thead className="dnone-mob">
                                                        <tr className="font_btd">
                                                            <th>#</th>
                                                            <th className="pt-3 pb-3">Lead Name</th>
                                                            <th>Company Name</th>
                                                            <th>Email</th>
                                                            <th>City</th>
                                                            <th>User Name</th>
                                                            <th>Added Date & Time</th>
                                                            <th>Action Date & Time</th>
                                                            <th>Elapsed Time</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>

                                                        <tr>
                                                            <td className="bold">{"ROWNUMBER"}</td>
                                                            <td className="pt-3 pb-3">{"lead_name".toUpperCase()}</td>
                                                            <td>{"lead_company_name"}</td>
                                                            <td>{"lead_email"}</td>
                                                            <td>{"lead_city"}</td>
                                                            <td>{"user_name"}</td>
                                                            <td className="col-grey">{"create_date"} {"create_time"}</td>
                                                            <td className="col-grey">{"status_date"} {"status_time"}</td>
                                                            <td className="bg-info"><span className="text-white">{"datetime_diff"}</span></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <div className="text-center">
                                                    <a id="ls_loadMore" className="btn btn-outline-primary mt-3 mb-4 evt-reports-action" data-lead-note="" data-action="status-leads" data-request-for="load-more" data-cnt="{count}" data-previous="{previous}"><b className="col-blue">Load More</b> →</a>
                                                </div>
                                            </div>
                                        </div>
                                        <span style={{ display: "none" }} id="span_filtersattr" data-message-type=""></span>
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
        var params = {"action":"communication","request_for":"count","route":"Reports/Communication"};
        const lang = req.cookies['signin_token']
        if ((lang === "''") || (lang === undefined)) {
            res.writeHead(302, { Location: "/login" })
            res.end()
        }
        const response = await getData(params, lang, ApiEndPoints.ReportsApi)

        return {
            props: {
                communicationList: JSON.parse(response).data.response.message_count !== "" ? JSON.parse(response).data.response.message_count : [],
            },
        }
    } catch (err) {
        // Handle error
        return {
            props: null
        }
    }
}
export default communication