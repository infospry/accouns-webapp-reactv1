import React from 'react'

const MdlImport = ({ leadTypeList = [], CategoryList = [] }) => {
    return (
        <><div className="modal right-half md-one" id="modalimport" tabIndex="1" role="dialog" aria-labelledby="shortModal" data-backdrop="static">
            <div className="modal-dialog ui-draggable ui-draggable-handle" role="document">
                <div className="modal-content" style={{ height: "auto!important" }}>
                    <div className="modal-header bg-blu-lite fixed-top">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                        <h4 className="modal-title"><b>Import CSV File</b></h4>
                    </div>
                    <div className="modal-body pr-0 pl-0 pb-0">
                        <div className="row  m-0">
                            <div className="col-md-12 pl-0 pr-0">
                                <div className="loader"></div>
                                <div className="tab-content p-0">
                                    <div role="tabpanel" className=" tab-pane in active" id="" style={{ height: "91vh" }}>
                                        <div className="row m-0 justify-content-center">
                                            <div className="col-md-6 mt-3 divupload">
                                                <input type="file" id="csvfile" className="form-control" multiple="" />
                                            </div>
                                            <div className="col-md-2 mt-3 divupload">
                                                <a className="btn btn-primary evt-leads-main" data-action="leads-main" data-request_for="import-csv"><i className="zmdi zmdi-upload">&nbsp;</i>Upload</a>
                                            </div>
                                            <div className="col-md-4 mt-3 divupload">
                                                <small className="col-blue" id="spnCsvRowCount"></small>
                                            </div>
                                            <div className="col-md-6 mt-3 csvddl disableform" style={{ display: "none" }}>
                                                <div className="group_lead">
                                                    <select className="custom-select select_f" defaultValue={"0"} id="ddl_leadtype_csv">
                                                        <option value="0" >Choose Lead Type</option>
                                                        {leadTypeList.map((lead, i) => (
                                                            <option key={i} value={lead.id}>{lead.lead_type_name}</option>
                                                        ))}
                                                    </select>
                                                    <label className="lablefilled">Lead Type<span>*</span></label>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mt-3 csvddl disableform" style={{ display: "none" }}>
                                                <div className="group_lead">
                                                    <select className="custom-select select_f" defaultValue={"0"} id="ddl_category_csv">
                                                        <option value="0" >Choose Category</option>
                                                        {CategoryList.map((cat, i) => (
                                                            <option key={i} value={cat.cat_id}>{cat.cat_name}</option>
                                                        ))}
                                                    </select>
                                                    <label className="lablefilled">Category</label>
                                                </div>
                                            </div>
                                            <div className="col-md-12 csvddl" style={{ display: "none" }}>
                                                <div className="group_lead custom-control custom-checkbox">
                                                    <input type="checkbox" id="chk_override" className="custom-control-input" />
                                                    <label className="custom-control-label font-18" htmlFor="chk_override"> <b> Override the existing record </b></label>
                                                </div>
                                            </div>
                                            <div id="csv_ddl_placeholder" className="col-md-6"></div>
                                            <div id="dbfields_placeholder" className="col-md-6"></div>
                                            <div id="csv_tbl_placeholder" className="col-md-12 mt-2"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="model-footer">
                            <div className="row m-0">
                                <div className="col-md-12">
                                    <div className="text-center">
                                        <a id="btnvwsbmt" className="btn btn-primary btn-lg evt-leads-main" data-action="leads-main" data-request_for="view-csv">View</a>
                                        <a id="btncnclcsv" className="btn btn-danger btn-lg" data-dismiss="modal"><i className="zmdi zmdi-rotate-left">&nbsp;</i>Close</a>
                                        <a id="btnbckcsv" className="btn btn-primary btn-lg evt-leads-main" data-action="leads-main" data-request_for="back"><i className="zmdi zmdi-arrow-left">&nbsp;</i>Back</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div></>
    )
}

export default MdlImport