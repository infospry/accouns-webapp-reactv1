import React from 'react'

export default function Profile() {
  return (
    <>
    <div className="mt-4 mb-1" style={{padding:"10px"}}>
                                <div className="col-md-8 offset-md-2 pro">
                                    <div className="accordion" id="accordionExample2"> 
                                        <div className="item">
                                            <div className="item-header" id="headingPrefrences">
                                                <h2 className="mb-0"> <button className="btn btn-link" type="button"
                                                        data-toggle="collapse" data-target="#collapsePrefrences"
                                                        aria-expanded="true" aria-controls="collapsePrefrences">
                                                        Preferences <i className="zmdi zmdi-chevron-down"></i> </button>
                                                </h2>
                                            </div>
                                            <div id="collapsePrefrences" className="collapse show"
                                                aria-labelledby="headingPrefrences" data-parent="#accordionExample2">
                                                <div className="t-p">
                                                    <div className="row disply_none_rowPrefrences">
                                                        <div className="col-md-12 col-sm-12">
                                                            <div className="">
                                                                <div className="bxsaddow mb-3">
                                                                    <h4> <i className="zmdi zmdi-filter-list mr-1"></i>Job
                                                                        Preferences <a id="btnEditPref"
                                                                            className="btn btn-sm btn-primary jbe clickmode ClsCndProfile float-right"
                                                                            data-block="CHKPREFRENCE" data-action=""
                                                                            data-ids=",1,2,5,6,13"
                                                                            data-hide=".jobprp, .jbe"
                                                                            data-show=".jobprpedt"> <i
                                                                                className="zmdi zmdi-edit mr-1"></i>Edit
                                                                        </a> </h4>
                                                                    <div className="p-3 bdr1 h4show jobprp">
                                                                        <div id="Prefrence_Placeholder"> <span
                                                                                className="badge badge-info mr-1">Online</span>
                                                                            <span className="badge badge-info mr-1">On
                                                                                Call</span> <span
                                                                                className="badge badge-info mr-1">Acute
                                                                                Medical Unit</span> <span
                                                                                className="badge badge-info mr-1">
                                                                                Regular</span> <span
                                                                                className="badge badge-info mr-1">Urgent</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="p-3 bdr1 h4show none_dis jobprpedt">
                                                                        <button className="cross_prof clickmode cro_j"
                                                                            data-hide=".jobprpedt"
                                                                            data-show=".jobprp, .jbe"><i
                                                                                className="zmdi zmdi-close"
                                                                                aria-hidden="true"></i></button>
                                                                        <div id="divEditPrefrence_Placeholder">
                                                                            <div className="checkbox inlineblock m-r-20"
                                                                                style={{width:"300px"}}> <input
                                                                                    type="checkbox" id="chkpref-1"
                                                                                    className="with-gap clschkpref"
                                                                                    value="1" name="Online"/> <label
                                                                                    for="chkpref-1">Online</label>
                                                                            </div>
                                                                            <div className="checkbox inlineblock m-r-20"
                                                                                style={{width:"300px"}}> <input
                                                                                    type="checkbox" id="chkpref-2"
                                                                                    className="with-gap clschkpref"
                                                                                    value="2" name="On Call"/> <label
                                                                                    for="chkpref-2">On Call</label>
                                                                            </div>
                                                                            <div className="checkbox inlineblock m-r-20"
                                                                                style={{width:"300px"}}> <input
                                                                                    type="checkbox" id="chkpref-3"
                                                                                    className="with-gap clschkpref"
                                                                                    value="3" name="F2F"/> <label
                                                                                    for="chkpref-3">F2F</label> </div>
                                                                            <div className="checkbox inlineblock m-r-20"
                                                                                style={{width:"300px"}}> <input
                                                                                    type="checkbox" id="chkpref-4"
                                                                                    className="with-gap clschkpref"
                                                                                    value="4" name="A&amp;E Nursing"/>
                                                                                <label for="chkpref-4">A&amp;E
                                                                                    Nursing</label>
                                                                            </div>
                                                                            <div className="checkbox inlineblock m-r-20"
                                                                                style={{width:"300px"}}> <input
                                                                                    type="checkbox" id="chkpref-5"
                                                                                    className="with-gap clschkpref"
                                                                                    value="5" name="Acute Medical Unit"/>
                                                                                <label for="chkpref-5">Acute Medical
                                                                                    Unit</label>
                                                                            </div>
                                                                            <div className="checkbox inlineblock m-r-20"
                                                                                style={{width:"300px"}}> <input
                                                                                    type="checkbox" id="chkpref-6"
                                                                                    className="with-gap clschkpref"
                                                                                    value="6" name=" Regular"/> <label
                                                                                    for="chkpref-6"> Regular</label>
                                                                            </div>
                                                                            <div className="checkbox inlineblock m-r-20"
                                                                                style={{width:"300px"}}> <input
                                                                                    type="checkbox" id="chkpref-9"
                                                                                    className="with-gap clschkpref"
                                                                                    value="9" name="Walk-in"/> <label
                                                                                    for="chkpref-9">Walk-in</label>
                                                                            </div>
                                                                            <div className="checkbox inlineblock m-r-20"
                                                                                style={{width:"300px"}}> <input
                                                                                    type="checkbox" id="chkpref-10"
                                                                                    className="with-gap clschkpref"
                                                                                    value="10" name="Practice Nurse"/>
                                                                                <label for="chkpref-10">Practice
                                                                                    Nurse</label>
                                                                            </div>
                                                                            <div className="checkbox inlineblock m-r-20"
                                                                                style={{width:"300px"}}> <input
                                                                                    type="checkbox" id="chkpref-11"
                                                                                    className="with-gap clschkpref"
                                                                                    value="11" name="CHEF"/> <label
                                                                                    for="chkpref-11">CHEF</label> </div>
                                                                            <div className="checkbox inlineblock m-r-20"
                                                                                style={{width:"300px"}}> <input
                                                                                    type="checkbox" id="chkpref-12"
                                                                                    className="with-gap clschkpref"
                                                                                    value="12" name="Nurse Clinic"/>
                                                                                <label for="chkpref-12">Nurse
                                                                                    Clinic</label>
                                                                            </div>
                                                                            <div className="checkbox inlineblock m-r-20"
                                                                                style={{width:"300px"}}> <input
                                                                                    type="checkbox" id="chkpref-13"
                                                                                    className="with-gap clschkpref"
                                                                                    value="13" name="Urgent"/> <label
                                                                                    for="chkpref-13">Urgent</label>
                                                                            </div>
                                                                            <div className="checkbox inlineblock m-r-20"
                                                                                style={{width:"300px"}}> <input
                                                                                    type="checkbox" id="chkpref-14"
                                                                                    className="with-gap clschkpref"
                                                                                    value="14" name="Triage"/> <label
                                                                                    for="chkpref-14">Triage</label>
                                                                            </div>
                                                                            <div className="checkbox inlineblock m-r-20"
                                                                                style={{width:"300px"}}> <input
                                                                                    type="checkbox" id="chkpref-15"
                                                                                    className="with-gap clschkpref"
                                                                                    value="15" name="Tri-Role"/> <label
                                                                                    for="chkpref-15">Tri-Role</label>
                                                                            </div>
                                                                            <div className="checkbox inlineblock m-r-20"
                                                                                style={{width:"300px"}}> <input
                                                                                    type="checkbox" id="chkpref-16"
                                                                                    className="with-gap clschkpref"
                                                                                    value="16" name="Walk in Centre"/>
                                                                                <label for="chkpref-16">Walk in
                                                                                    Centre</label>
                                                                            </div>
                                                                            <div className="checkbox inlineblock m-r-20"
                                                                                style={{width:"300px"}}> <input
                                                                                    type="checkbox" id="chkpref-17"
                                                                                    className="with-gap clschkpref"
                                                                                    value="17" name="Vaccination"/>
                                                                                <label
                                                                                    for="chkpref-17">Vaccination</label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="text-center col-lg-12">
                                                                            <hr/> <a
                                                                                className="btn btn-primary btn-lg ClsCndProfile"
                                                                                data-block="PREFRENCE"
                                                                                data-action="INSERT"
                                                                                data-cls=".clschkpref"><b>Save</b></a>
                                                                            <a className="btn btn-outline-danger btn-lg  clickmode"
                                                                                data-hide=".jobprpedt"
                                                                                data-show=".jobprp, .jbe"><b>Cancel</b></a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="bxsaddow mb-3"style={{display:"block"}}>
                                                                    <h4> <i className="zmdi zmdi-laptop mr-1"></i>IT System
                                                                        <a id="btnEditITSys"
                                                                            className="btn btn-sm btn-primary itsyst clickmode ClsCndProfile float-right"
                                                                            data-block="CHKITSYS" data-action=""
                                                                            data-ids=",1,2,3,4,5,6"
                                                                            data-hide=".itsystview, .itsyst"
                                                                            data-show=".itsystedt"> <i
                                                                                className="zmdi zmdi-edit mr-1"></i>Edit
                                                                        </a>
                                                                    </h4>
                                                                    <div className="p-3 bdr1 h4show itsystview">
                                                                        <div id="ITSystem_Placeholder"> <span
                                                                                className="badge badge-info mr-1"
                                                                                 >Adastra </span> <span
                                                                                className="badge badge-info mr-1"
                                                                                 >DGL</span> <span
                                                                                className="badge badge-info mr-1"
                                                                                 >Docman</span> <span
                                                                                className="badge badge-info mr-1"
                                                                                 >EDIS - A&amp;E SYSTEM</span>
                                                                            <span className="badge badge-info mr-1"
                                                                                 >EMIS LV</span> <span
                                                                                className="badge badge-info mr-1"
                                                                                 >EMIS PCS</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="p-3 bdr1 h4show none_dis itsystedt">
                                                                        <button className="cross_prof clickmode cro_it"
                                                                            data-hide=".itsystedt"
                                                                            data-show=".itsystview, .itsyst"><i
                                                                                className="zmdi zmdi-close"
                                                                                aria-hidden="true"></i></button>
                                                                        <div id="EditITSys_Placeholder">
                                                                        <div className="checkbox inlineblock m-r-20" style={{ width: '250px' }}>
        <input type="checkbox" id="ChkIT-1" className="with-gap clschkIt" value="1" name="Adastra" />
        <label htmlFor="ChkIT-1">Adastra</label>
      </div>
      <div className="checkbox inlineblock m-r-20" style={{ width: '250px' }}>
        <input type="checkbox" id="ChkIT-2" className="with-gap clschkIt" value="2" name="DGL" />
        <label htmlFor="ChkIT-2">DGL</label>
      </div>
      {/* Continue adding more IT systems checkboxes */}
      {/* ... */}
      <div className="checkbox inlineblock m-r-20" style={{ width: '250px' }}>
        <input type="checkbox" id="ChkIT-106" className="with-gap clschkIt" value="106" name="Bengali" />
        <label htmlFor="ChkIT-106">Bengali</label>
      </div>
                                                                                    <div className="checkbox inlineblock m-r-20" style={{ width: '250px' }}>
        <input type="checkbox" id="ChkLang-107" className="with-gap clschklang" value="107" name="Bosnian" />
        <label htmlFor="ChkLang-107">Bosnian</label>
      </div>
      <div className="checkbox inlineblock m-r-20" style={{ width: '250px' }}>
        <input
          type="checkbox"
          id="ChkLang-108"
          className="with-gap clschklang"
          value="108"
          name="Brazilian Portuguese"
        />
        <label htmlFor="ChkLang-108">Brazilian Portuguese</label>
      </div>
      {/* Continue adding more languages checkboxes */}
      {/* ... */}
      <div className="checkbox inlineblock m-r-20" style={{ width: '250px' }}>
        <input type="checkbox" id="ChkLang-147" className="with-gap clschklang" value="147" name="Mongolian" />
        <label htmlFor="ChkLang-147">Mongolian</label>
      </div>
                                                                            
                                                                            
                                                                            
                                                                            
                                                                                    <div className="checkbox inlineblock m-r-20" style={{ width: '250px' }}>
        <input type="checkbox" id="ChkLang-148" className="with-gap clschklang" value="148" name="Nepali" />
        <label htmlFor="ChkLang-148">Nepali</label>
      </div>
      <div className="checkbox inlineblock m-r-20" style={{ width: '250px' }}>
        <input
          type="checkbox"
          id="ChkLang-149"
          className="with-gap clschklang"
          value="149"
          name="Nicaraguan Spanish"
        />
        <label htmlFor="ChkLang-149">Nicaraguan Spanish</label>
      </div>
      {/* Continue adding more languages checkboxes */}
      {/* ... */}
      <div className="checkbox inlineblock m-r-20" style={{ width: '250px' }}>
        <input type="checkbox" id="ChkLang-177" className="with-gap clschklang" value="177" name="Welsh" />
        <label htmlFor="ChkLang-177">Welsh</label>
      </div>
                                                                            
                                                                            
                                                                            
                                                                             </div>
                                                                        </div>
                                                                        <div className="text-center col-lg-12">
                                                                            <hr/> <a
                                                                                className="btn btn-primary  btn-lg ClsCndProfile"
                                                                                data-block="LANGUAGE"
                                                                                data-action="INSERT"
                                                                                data-cls=".clschklang"><b>Save</b></a>
                                                                            <a className="btn btn-outline-danger btn-lg  clickmode"
                                                                                data-hide=".langedt"
                                                                                data-show=".langview, .langbtn"><b>Cancel</b></a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row disply_rowPrefrences pt-3 pb-3"
                                                         style={{display:"none"}}> <button className="cross clickmode"
                                                            data-hide=".disply_rowPrefrences"
                                                            data-show=".disply_none_rowPrefrences"><i
                                                                className="zmdi zmdi-close" aria-hidden="true"></i></button>
                                                        <div className="col-md-12"> </div>
                                                        <div className="col-md-12 mb-2 text-center">
                                                            <hr className="m-0 mb-4"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> 
                                        <div className="item">
                                            <div className="item-header" id="headingWorkHistory">
                                                <h2 className="mb-0"> <button className="btn btn-link collapsed" type="button"
                                                        data-toggle="collapse" data-target="#collapseWorkHistory"
                                                        aria-expanded="false" aria-controls="collapseWorkHistory"> Work
                                                        History <i className="zmdi zmdi-chevron-down"></i> </button> </h2>
                                            </div>
                                            <div id="collapseWorkHistory" className="collapse"
                                                aria-labelledby="headingWorkHistory" data-parent="#accordionExample2">
                                                <div className="t-p">
                                                    <div className="row disply_none_rowWorkHistory">
                                                        <div className="col-md-12 col-sm-12">
                                                            <div className="">
                                                                <div className="h4show editshow">
                                                                    <div className="table-responsive clearfix">
                                                                        <table className="table-bordered table">
                                                                            <thead>
                                                                                <tr>
                                                                                    <th style={{width:"28px"}}>SN.</th>
                                                                                    <th>Speciality</th>
                                                                                    <th>Hospital/Employer</th>
                                                                                    <th>From Date</th>
                                                                                    <th>To Date</th>
                                                                                    <th className="text-center">
                                                                                        Actions</th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody id="WorkHistory_Placeholder">
                                                                                <tr id="trwh-2">
                                                                                    <td>1</td>
                                                                                    <td> <span id="spnworkrole-2"
                                                                                            className="whshow-2"><b>GP</b></span>
                                                                                        <span className="whhide-2"
                                                                                             style={{display:"none"}}>
                                                                                            <input id="txtWorkRole-2"
                                                                                                className="form-control"
                                                                                                placeholder="Enter work role"
                                                                                                value="GP"/> </span>
                                                                                    </td>
                                                                                    <td> <span id="spnempname-2"
                                                                                            className="col-brown whshow-2">Hospital1</span>
                                                                                        <span className="whhide-2"
                                                                                             style={{display:"none"}}>
                                                                                            <input id="txtEmployer-2"
                                                                                                className="form-control"
                                                                                                placeholder="Enter employer name"
                                                                                                value="Hospital1"/>
                                                                                        </span>
                                                                                    </td>
                                                                                    <td className="ClsDatepair"> <span
                                                                                            id="spnfromdate-2"
                                                                                            className="col-grey whshow-2">01/09/2021</span>
                                                                                        <span className="whhide-2"
                                                                                             style={{display:"none"}}>
                                                                                            <input id="txtFromDate-2"
                                                                                                className="form-control start date"
                                                                                                placeholder="dd/mm/yyyy"
                                                                                                value="01/09/2021"/>
                                                                                        </span>
                                                                                    </td>
                                                                                    <td className="ClsDatepair"> <span
                                                                                            id="spntodate-2"
                                                                                            className="col-blue whshow-2">10/04/2022</span>
                                                                                        <span className="whhide-2"
                                                                                             style={{display:"none"}}>
                                                                                            <input id="txtTodate-2"
                                                                                                className="form-control start date"
                                                                                                placeholder="dd/mm/yyyy"
                                                                                                value="10/04/2022"/>
                                                                                        </span>
                                                                                    </td>
                                                                                    <td className="text-center"> <span
                                                                                            className=" whshow-2"> <a
                                                                                                className="btn btn-outline-primary btn-sm  clickmode"
                                                                                                data-id="2"
                                                                                                data-block="SOCIAL_PROFILE"
                                                                                                data-hide=".whshow-2"
                                                                                                data-show=".whhide-2"><i
                                                                                                    className="zmdi zmdi-edit"></i></a>
                                                                                            <a className="btn btn-outline-danger btn-sm del_tr ClsCndProfile"
                                                                                                data-id="2"
                                                                                                data-block="DEL_WORK_HIST"
                                                                                                data-action="DELETE"><i
                                                                                                    className="zmdi zmdi-delete"></i></a>
                                                                                        </span> <span className="whhide-2"
                                                                                             style={{display:"none"}}> <a
                                                                                                className="btn btn-outline-primary  ClsCndProfile"
                                                                                                data-id="2"
                                                                                                data-block="WORK_HISTORY"
                                                                                                data-action="UPDATE"
                                                                                                data-hide=".whhide-2"
                                                                                                data-show=".whshow-2">Update</a>
                                                                                            <a className="btn btn-sm btn-danger col-red ml-2 clickmode"
                                                                                                data-hide=".whhide-2"
                                                                                                data-show=".whshow-2">Cancel</a>
                                                                                        </span> </td>
                                                                                </tr>
                                                                            </tbody>
                                                                            <tfoot id="WorkHistory_footer_Placeholder">
                                                                            </tfoot>
                                                                        </table>
                                                                    </div>
                                                                    <div className="text-center"> <a
                                                                            className="btn btn-sm btn-primary mt-3 clkm clickmode"
                                                                            data-hide=".editshow" data-show=".add-evnt">
                                                                            <i
                                                                                className="zmdi zmdi-plus-square mr-1"></i>Add
                                                                            New Work History </a> </div>
                                                                </div>
                                                                <div className="p-3 bdr1 h4show add-evnt"
                                                                     style={{display:"none"}}>
                                                                    <div className="table-responsive clearfix">
                                                                        <table className="table-bordered table">
                                                                            <thead>
                                                                                <tr>
                                                                                    <th>Speciality</th>
                                                                                    <th>Hospital/Employer</th>
                                                                                    <th>From Date</th>
                                                                                    <th>To Date</th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td> <input id="txtWorkRole"
                                                                                            className="form-control"
                                                                                            placeholder="Enter work role"/>
                                                                                    </td>
                                                                                    <td> <input id="txtEmployer"
                                                                                            className="form-control col-brown"
                                                                                            placeholder="Enter Hospital/Employer"/>
                                                                                    </td>
                                                                                    <td className="ClsDatepair"> <input
                                                                                            id="txtFromDate"
                                                                                            className="form-control col-grey  date start"
                                                                                            placeholder="dd/mm/yyyy"/>
                                                                                    </td>
                                                                                    <td className="ClsDatepair"> <input
                                                                                            id="txtTodate"
                                                                                            className="form-control col-blue datepicker date start"
                                                                                            placeholder="dd/mm/yyyy"/>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                    <div className="text-center"> <a
                                                                            className="btn btn-primary  btn-lg mt-2 mb-2 ml-2  ClsCndProfile"
                                                                            data-id="0" data-block="WORK_HISTORY"
                                                                            data-action="INSERT"><b>Save</b></a> <a
                                                                            className="btn btn-outline-danger  btn-lg clickmode"
                                                                            data-hide=".add-evnt"
                                                                            data-show=".editshow"><b>Cancel</b></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row disply_rowWorkHistory pt-3 pb-3"
                                                         style={{display:"none"}}> <button className="cross clickmode"
                                                            data-hide=".disply_rowWorkHistory"
                                                            data-show=".disply_none_rowWorkHistory"><i
                                                                className="zmdi zmdi-close" aria-hidden="true"></i></button>
                                                        <div className="col-md-12"> </div>
                                                        <div className="col-md-12 mb-2 text-center">
                                                            <hr className="m-0 mb-4"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> 
                                        <div className="item">
                                            <div className="item-header" id="headingQualification">
                                                <h2 className="mb-0"> <button className="btn btn-link collapsed" type="button"
                                                        data-toggle="collapse" data-target="#collapseQualification"
                                                        aria-expanded="false" aria-controls="collapseQualification">
                                                        Qualifications <i className="zmdi zmdi-chevron-down"></i> </button>
                                                </h2>
                                            </div>
                                            <div id="collapseQualification" className="collapse"
                                                aria-labelledby="headingQualification" data-parent="#accordionExample2">
                                                <div className="t-p">
                                                    <div className="row disply_none_rowQualification">
                                                        <div className="col-md-12 col-sm-12">
                                                            <div className="">
                                                                <div className="h4show qualshow">
                                                                    <div className="table-responsive clearfix">
                                                                        
                                                                    <table className="table-bordered table">
      <thead>
        <tr>
          <th style={{ width: '28px' }}>SN.</th>
          <th>Date Received</th>
          <th>Qualification</th>
          <th>Institution</th>
          <th className="text-center">Actions</th>
        </tr>
      </thead>
      <tbody id="Qualification_Placeholder">
        <tr id="trQ-2">
          <td>1</td>
          <td className="ClsDatepair">
            <span id="spnReceicedate-2" className="Qshow-2">
              <b>01/01/2022</b>
            </span>
            <span className="Qhide-2" style={{ display: 'none' }}>
              <input
                id="txtReceivedate-2"
                className="form-control date start"
                placeholder="dd/mm/yyyy"
                value="01/01/2022"
              />
            </span>
          </td>
          <td>
            <span id="spnQualification-2" className="text-blue Qshow-2">
              Degree
            </span>
            <span className="Qhide-2" style={{ display: 'none' }}>
              <input
                id="txtQualification-2"
                className="form-control"
                placeholder="Enter qualification"
                value="Degree"
              />
            </span>
          </td>
          <td>
            <span id="spnInstitution-2" className="col-grey Qshow-2">
              XYZ
            </span>
            <span className="Qhide-2" style={{ display: 'none' }}>
              <input
                id="txtInstitution-2"
                className="form-control"
                placeholder="Enter institution name"
                value="XYZ"
              />
            </span>
          </td>
          <td className="text-center">
            <span className="Qshow-2">
              <a
                className="btn btn-outline-primary btn-sm edithover clickmode"
                data-id="2"
                data-block="QUALIFICATION"
                data-hide=".Qshow-2"
                data-show=".Qhide-2"
              >
                <i className="zmdi zmdi-edit"></i>
              </a>
              <a
                className="btn btn-outline-danger btn-sm ClsCndProfile"
                data-id="2"
                data-block="DEL_QUALIFICATION"
                data-action="DELETE"
              >
                <i className="zmdi zmdi-delete"></i>
              </a>
            </span>
            <span className="Qhide-2" style={{ display: 'none' }}>
              <a
                className="btn btn-outline-primary ClsCndProfile"
                data-id="2"
                data-block="QUALIFICATION"
                data-action="UPDATE"
                data-hide=".Qhide-2"
                data-show=".Qshow-2"
              >
                Update
              </a>
              <a
                className="btn btn-sm btn-danger col-red ml-2 clickmode"
                data-hide=".Qhide-2"
                data-show=".Qshow-2"
              >
                Cancel
              </a>
            </span>
          </td>
        </tr>
      </tbody>
      <tfoot id="Qualification_footer_Placeholder"></tfoot>
    </table>
                                                                    </div>
                                                                    <div className="text-center"> <a
                                                                            className="btn btn-sm btn-primary mt-3 clickmode"
                                                                            data-hide=".qualshow"
                                                                            data-show=".d_noneedit"> <i
                                                                                className="zmdi zmdi-plus-square mr-1"></i>Add
                                                                            New Qualification </a> </div>
                                                                </div>
                                                                <div className="d_noneedit">
                                                                    <div className="table-responsive clearfix mb-2">
                                                                        <table className="table-bordered table">
                                                                            <thead>
                                                                                <tr>
                                                                                    <th>Date Received </th>
                                                                                    <th>Qualification</th>
                                                                                    <th>Instution</th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td className="ClsDatepair"> <input
                                                                                            id="txtReceivedate"
                                                                                            className="form-control date start"
                                                                                            placeholder="dd/mm/yyyy"/>
                                                                                    </td>
                                                                                    <td> <input id="txtQualification"
                                                                                            className="form-control col-blue"
                                                                                            placeholder="Enter qualification "/>
                                                                                    </td>
                                                                                    <td> <input id="txtInstitution"
                                                                                            className="form-control col-grey"
                                                                                            placeholder="Enter instution name"/>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                    <div className="text-center"> <a
                                                                            className="btn btn-outline-primary btn-lg editupdate ClsCndProfile"
                                                                            data-id="0" data-block="QUALIFICATION"
                                                                            data-action="INSERT">Save</a> <a
                                                                            className="btn btn-outline-danger btn-lg clickmode"
                                                                            data-hide=".d_noneedit"
                                                                            data-show=".qualshow">Cancel</a> </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row disply_rowQualification pt-3 pb-3"
                                                         style={{display:"none"}}> <button className="cross clickmode"
                                                            data-hide=".disply_rowQualification"
                                                            data-show=".disply_none_rowQualification"><i
                                                                className="zmdi zmdi-close" aria-hidden="true"></i></button>
                                                        <div className="col-md-12"> </div>
                                                        <div className="col-md-12 mb-2 text-center">
                                                            <hr className="m-0 mb-4"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> 
                                        <div className="item">
                                            <div className="item-header" id="headingExperience">
                                                <h2 className="mb-0"> <button className="btn btn-link collapsed" type="button"
                                                        data-toggle="collapse" data-target="#collapseExperience"
                                                        aria-expanded="false" aria-controls="collapseExperience">
                                                        Experiences <i className="zmdi zmdi-chevron-down"></i> </button>
                                                </h2>
                                            </div>
                                            <div id="collapseExperience" className="collapse"
                                                aria-labelledby="headingExperience" data-parent="#accordionExample2">
                                                <div className="t-p">
                                                    <div className="row disply_none_rowExperience">
                                                        <div className="col-md-12 col-sm-12">
                                                            <div className="">
                                                                <div className="h4show show-adition">
                                                                    <div className="table-responsive clearfix">
                                                                        <table className="table bdr">
                                                                            <tbody id="Experience_Placeholder">
                                                                                <tr id="txexp-2" data-row="1">
                                                                                    <td> <br/>1. <span
                                                                                            id="spncategory-2"
                                                                                            className="col-blue font-16 pl-1 bold aeshow-2">GP
                                                                                        </span> <span
                                                                                            className="float-right aeshow-2">
                                                                                            <a id="btnExpedit-2"
                                                                                                className="h-over  clickmode ClsCndProfile"
                                                                                                data-id="2"
                                                                                                data-category="GP "
                                                                                                data-cat-detail="3 Years Expeience<br/>"
                                                                                                data-block="EXP_FILL_CONTROL"
                                                                                                data-action="UPDATE"
                                                                                                data-hide=".show-adition"
                                                                                                data-show=".edit-adition">
                                                                                                <i
                                                                                                    className="zmdi zmdi-edit text-primary"></i>
                                                                                            </a> <a id="btnDel-2"
                                                                                                className="h-over col-red ml-2 ClsCndProfile"
                                                                                                data-id="2"
                                                                                                data-block="DEL_ADD_EXP"
                                                                                                data-action="DELETE"><i
                                                                                                    className="zmdi zmdi-delete"></i></a>
                                                                                        </span> <br/> <span
                                                                                            className="aehide-2"
                                                                                             style={{display:"none"}}>
                                                                                            <input id="txtCategory-2"
                                                                                                className="form-control"
                                                                                                placeholder="Enter Category"
                                                                                                value="GP "/> </span>
                                                                                        <div id="spncatdetail-2"
                                                                                            className="mt-2 col-grey aeshow-2">
                                                                                            <p>3 Years Expeience<br/></p>
                                                                                            <span className="aehide-2"
                                                                                                 style={{display:"none"}}>
                                                                                                <textarea
                                                                                                    id="txtExpDetail-2"
                                                                                                    className="form-control editor"
                                                                                                    placeholder="Write here">3 Years Expeience&lt;br&gt;</textarea>
                                                                                            </span>
                                                                                        </div>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                            <tfoot id="Experience_footer_Placeholder">
                                                                            </tfoot>
                                                                        </table>
                                                                    </div>
                                                                    <div className="text-center"> <a
                                                                            className="btn btn-sm btn-primary mt-3 addtionbtn clickmode ClsCndProfile"
                                                                            data-block="EXP_FILL_CONTROL"
                                                                            data-action="INSERT"
                                                                            data-hide=".show-adition"
                                                                            data-show=".edit-adition"> <i
                                                                                className="zmdi zmdi-plus-square mr-1"></i>Add
                                                                            New Experience </a> </div>
                                                                </div>
                                                                <div className="p-4 bdr1 h4show none_dis edit-adition">
                                                                    <button className="cross_prof clickmode cro_addition"
                                                                        data-hide=".edit-adition"
                                                                        data-show=".show-adition"><i
                                                                            className="zmdi zmdi-close"
                                                                            aria-hidden="true"></i></button>
                                                                    <div className="row mt-3">
                                                                        <div className="col-md-12 p-0"
                                                                            >
                                                                            <div className="form-group"> <label
                                                                                    for="Experience"><b>Category</b><span>*</span></label>
                                                                                <input id="txtCategory"
                                                                                    className="form-control"
                                                                                    placeholder="Enter Category"/>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="row">
                                                                        <div className="col-md-12">
                                                                            <div className="form-group"> <label
                                                                                    for="Experience"><b>Experience
                                                                                        Detail</b><span>*</span></label>
                                                                                <textarea id="txtExpDetail"
                                                                                    className="form-control editor"
                                                                                    placeholder="Write here..."></textarea>
                                                                            </div>
                                                                        </div>
                                                                        <div className="text-center col-lg-12">
                                                                            <hr/> <a id="btnSaveAddExp"
                                                                                className="btn btn-primary  btn-lg ClsCndProfile"
                                                                                data-block="ADDITIONAL_EXP" data-id="0"
                                                                                data-action="INSERT"
                                                                                data-hide=".edit-adition"
                                                                                data-show=".show-adition"><b>Save</b></a>
                                                                            <a className="btn btn-outline-danger  btn-lg  clickmode"
                                                                                data-hide=".edit-adition"
                                                                                data-show=".show-adition"><b>Cancel</b></a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row disply_rowExperience pt-3 pb-3"
                                                         style={{display:"none"}}> <button className="cross clickmode"
                                                            data-hide=".disply_rowExperience"
                                                            data-show=".disply_none_rowExperience"><i
                                                                className="zmdi zmdi-close" aria-hidden="true"></i></button>
                                                        <div className="col-md-12"> </div>
                                                        <div className="col-md-12 mb-2 text-center">
                                                            <hr className="m-0 mb-4"/>
                                                            <button className="btn btn-outline-danger btn-lg  clickmode"
                                                                data-hide=".disply_rowExperience"
                                                                data-show=".disply_none_rowExperience"><b>
                                                                    Cancel</b></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> 
                                        <div className="item">
                                            <div className="item-header" id="headingReferences">
                                                <h2 className="mb-0"> <button className="btn btn-link collapsed" type="button"
                                                        data-toggle="collapse" data-target="#collapseReferences"
                                                        aria-expanded="false" aria-controls="collapseReferences">
                                                        References <i className="zmdi zmdi-chevron-down"></i> </button>
                                                </h2>
                                            </div>
                                            <div id="collapseReferences" className="collapse"
                                                aria-labelledby="headingReferences" data-parent="#accordionExample2">
                                                <div className="t-p">
                                                    <div className="row disply_none_rowReferences">
                                                        <div className="col-md-12 col-sm-12">
                                                            <div className="">
                                                                <div className="bdr1 h4show ref_view">
                                                                    <div className="table-responsive clearfix">
                                                                        

                                                                    <table className="table-bordered table">
        <thead>
          <tr>
            <th style={{ width: '50px' }}>SN.</th>
            <th style={{ width: '200px' }}>Name</th>
            <th style={{ width: '200px' }}>Mobile</th>
            <th style={{ width: '200px' }}>Email</th>
            <th>Address</th>
            <th style={{ width: '180px', textAlign: 'center' }}>Action</th>
          </tr>
        </thead>
        <tbody id="Refrence_Placeholder">
          <tr id="ref-2">
            <td data-id="1">1</td>
            <td>
              <span id="spanrefname-2" className="rshow-2">
                <b>Daisy Jones</b>
              </span>
              <span className="rhide-2" style={{ display: 'none' }}>
                <input
                  id="txtRefName-2"
                  className="form-control"
                  placeholder="Enter name"
                  value="Daisy Jones"
                />
              </span>
            </td>
            <td>
              <span id="spanrefmobile-2" className="col-grey rshow-2">
                1234567895
              </span>
              <span className="rhide-2" style={{ display: 'none' }}>
                <input
                  id="txtRefMobile-2"
                  className="form-control number"
                  maxLength="11"
                  placeholder="Enter mobile"
                  value="1234567895"
                />
              </span>
            </td>
            <td>
              <span id="spnrefemail-2" className="col-grey rshow-2">
                Daisy@thestaffport.com
              </span>
              <span className="rhide-2" style={{ display: 'none' }}>
                <input
                  id="txtRefEmail-2"
                  className="form-control"
                  placeholder="Enter email"
                  value="Daisy@thestaffport.com"
                />
              </span>
            </td>
            <td>
              <span id="spnrefaddres-2" className="col-grey rshow-2">
                B1 1JG
              </span>
              <span className="rhide-2" style={{ display: 'none' }}>
                <input
                  id="txtRefAddress-2"
                  className="form-control"
                  placeholder="Enter address"
                  value="B1 1JG"
                />
              </span>
            </td>
            <td style={{ textAlign: 'center' }}>
              <span className="rshow-2">
                <a
                  className="btn btn-outline-primary btn-sm clickmode"
                  data-id="2"
                  data-hide=".rshow-2"
                  data-show=".rhide-2"
                >
                  <i className="zmdi zmdi-edit text-primary"></i>
                </a>
                <a
                  className="btn btn-outline-danger btn-sm ml-1 del_tr ClsCndProfile"
                  data-id="2"
                  data-block="DEL_REFRENCE"
                  data-action="DELETE"
                >
                  <i className="zmdi zmdi-delete"></i>
                </a>
              </span>
              <span className="rhide-2" style={{ display: 'none' }}>
                <a
                  className="btn btn-sm btn-primary ClsCndProfile"
                  data-id="2"
                  data-block="REFRENCE"
                  data-action="UPDATE"
                  data-hide=".rhide-2"
                  data-show=".rshow-2"
                >
                  Update
                </a>
                <a
                  className="btn btn-sm btn-danger col-red ml-1 clickmode"
                  data-hide=".rhide-2"
                  data-show=".rshow-2"
                >
                  Cancel
                </a>
              </span>
            </td>
          </tr>
        </tbody>
        <tfoot id="Refrence_Footer_Placeholder"></tfoot>
      </table>
      <div className="ref_add none_dis">
        <table className="table-bordered table">
          <tbody>
            <tr>
              <td style={{ width: '53px' }}>&nbsp;</td>
              <td style={{ width: '200px' }}>
                <input
                  id="txtRefName"
                  className="form-control"
                  placeholder="Enter name"
                />
              </td>
              <td style={{ width: '200px' }}>
                <input
                  id="txtRefMobile"
                  className="form-control number"
                  maxLength="11"
                  placeholder="Enter mobile"
                />
              </td>
              <td style={{ width: '200px' }}>
                <input
                  id="txtRefEmail"
                  className="form-control"
                  placeholder="Enter email"
                />
              </td>
              <td>
                <input
                  id="txtRefAddress"
                  className="form-control"
                  placeholder="Enter address"
                />
              </td>
              <td style={{ width: '180px' }}>&nbsp;</td>
            </tr>
          </tbody>
        </table>
        <div className="text-center">
          <a
            className="btn btn-primary btn-lg mt-2 mb-2 ml-2 ClsCndProfile"
            data-id="0"
            data-block="REFRENCE"
            data-action="INSERT"
            data-hide=".ref_add"
            data-show=""
          >
            <b>Save</b>
          </a>
          <a
            className="btn btn-outline-danger btn-lg clickmode"
            data-hide=".ref_add"
            data-show=".hadRef-add"
            title="cancel"
          >
            Cancel
          </a>
        </div>
      </div>
                                                                    </div>
                                                                    <div className="mt-3 mb-2 text-center">
                                                                        <a className="btn btn-sm btn-primary hadRef-add clickmode"
                                                                            data-hide=".hadRef-add"
                                                                            data-show=".ref_add"> <i
                                                                                className="zmdi  zmdi-accounts-add mr-1 font-18"></i>Add
                                                                            Reference </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row disply_rowReferences pt-3 pb-3"
                                                         style={{display:"none"}}> <button className="cross clickmode"
                                                            data-hide=".disply_rowReferences"
                                                            data-show=".disply_none_rowReferences"><i
                                                                className="zmdi zmdi-close" aria-hidden="true"></i></button>
                                                        <div className="col-md-12"> </div>
                                                        <div className="col-md-12 mb-2 text-center">
                                                            <hr className="m-0 mb-4"/>
                                                            <button className="btn btn-outline-danger btn-lg  clickmode"
                                                                data-hide=".disply_rowReferences"
                                                                data-show=".disply_none_rowReferences"><b>
                                                                    Cancel</b></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> 
                                        <div className="item">
                                            <div className="item-header" id="headingSocialProfile">
                                                <h2 className="mb-0"> <button className="btn btn-link collapsed" type="button"
                                                        data-toggle="collapse" data-target="#collapseSocialProfile"
                                                        aria-expanded="false" aria-controls="collapseSocialProfile">
                                                        Social Profiles <i className="zmdi zmdi-chevron-down"></i> </button>
                                                </h2>
                                            </div>
                                            <div id="collapseSocialProfile" className="collapse"
                                                aria-labelledby="headingSocialProfile" data-parent="#accordionExample2">
                                                <div className="t-p">
                                                    <div className="row disply_none_rowSocialProfile">
                                                        <div className="col-md-12 col-sm-12">
                                                            <div className="">
                                                                <div className="h4show social_view">
                                                                    <div className="table-responsive clearfix">
                                                                        <table className="table-bordered table">
                                                                            <thead>
                                                                                <tr>
                                                                                    <th style={{width:"28px"}}>SN.</th>
                                                                                    <th style={{width:"300px"}}>Profile
                                                                                        Type</th>
                                                                                    <th>Profile link</th>
                                                                                    <th className="text-center"
                                                                                        style={{width:"150px"}}>
                                                                                        Actions</th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody id="Social_Profile_Placeholder">
                                                                                <tr id="trsp-3">
                                                                                    <td id="tdrowno-3">1</td>
                                                                                    <td> <span id="spnlbltype-3"
                                                                                            className="spshow-3">Twitter</span>
                                                                                        <span id="spnProfileType-3"
                                                                                            className="sphide-3"
                                                                                             style={{display:"none"}}>
                                                                                            <input id="txtProfileType-3"
                                                                                                className="form-control"
                                                                                                placeholder="Enter profile type"
                                                                                                value="Twitter"/> </span>
                                                                                    </td>
                                                                                    <td> <span id="spnlbllink-3"
                                                                                            className="col-grey spshow-3">Twitter.com</span>
                                                                                        <span id="spnProfileLink-3"
                                                                                            className="sphide-3"
                                                                                             style={{display:"none"}}>
                                                                                            <input id="txtProfileLink-3"
                                                                                                className="form-control"
                                                                                                placeholder="Enter profile link"
                                                                                                value="Twitter.com"/>
                                                                                        </span>
                                                                                    </td>
                                                                                    <td className="text-center"> <span
                                                                                            id="spnEditSec-3"
                                                                                            className="spshow-3"> <a
                                                                                                id="btnEdit-3"
                                                                                                className="h-over clickmode"
                                                                                                data-id="3"
                                                                                                data-block="SOCIAL_PROFILE"
                                                                                                data-hide=".spshow-3"
                                                                                                data-show=".sphide-3">
                                                                                                <i
                                                                                                    className="zmdi zmdi-edit text-primary"></i>
                                                                                            </a> <a id="btnDel-3"
                                                                                                className="h-over col-red ml-2 del_tr ClsCndProfile"
                                                                                                data-id="3"
                                                                                                data-block="DEL_SOCIAL_PRO"
                                                                                                data-action="DELETE"> <i
                                                                                                    className="zmdi zmdi-delete"></i>
                                                                                            </a> </span> <span
                                                                                            id="spnSaveSec-3"
                                                                                            className="sphide-3"
                                                                                             style={{display:"none"}}> <a
                                                                                                id="btnUpdate-3"
                                                                                                className="btn btn-sm btn-primary ClsCndProfile"
                                                                                                data-id="3"
                                                                                                data-block="SOCIAL_PROFILE"
                                                                                                data-action="UPDATE"
                                                                                                data-hide=".sphide-3"
                                                                                                data-show=".spshow-3">Update</a>
                                                                                            <a id="btnCancel-3"
                                                                                                className="btn btn-sm btn-danger col-red ml-2  clickmode"
                                                                                                data-hide=".sphide-3"
                                                                                                data-show=".spshow-3">Cancel</a>
                                                                                        </span> </td>
                                                                                </tr>
                                                                                <tr id="trsp-2">
                                                                                    <td id="tdrowno-2">2</td>
                                                                                    <td> <span id="spnlbltype-2"
                                                                                            className="spshow-2">Facebook</span>
                                                                                        <span id="spnProfileType-2"
                                                                                            className="sphide-2"
                                                                                             style={{display:"none"}}>
                                                                                            <input id="txtProfileType-2"
                                                                                                className="form-control"
                                                                                                placeholder="Enter profile type"
                                                                                                value="Facebook"/>
                                                                                        </span>
                                                                                    </td>
                                                                                    <td> <span id="spnlbllink-2"
                                                                                            className="col-grey spshow-2">facebook.com</span>
                                                                                        <span id="spnProfileLink-2"
                                                                                            className="sphide-2"
                                                                                             style={{display:"none"}}>
                                                                                            <input id="txtProfileLink-2"
                                                                                                className="form-control"
                                                                                                placeholder="Enter profile link"
                                                                                                value="facebook.com"/>
                                                                                        </span>
                                                                                    </td>
                                                                                    <td className="text-center"> <span
                                                                                            id="spnEditSec-2"
                                                                                            className="spshow-2"> <a
                                                                                                id="btnEdit-2"
                                                                                                className="h-over clickmode"
                                                                                                data-id="2"
                                                                                                data-block="SOCIAL_PROFILE"
                                                                                                data-hide=".spshow-2"
                                                                                                data-show=".sphide-2">
                                                                                                <i
                                                                                                    className="zmdi zmdi-edit text-primary"></i>
                                                                                            </a> <a id="btnDel-2"
                                                                                                className="h-over col-red ml-2 del_tr ClsCndProfile"
                                                                                                data-id="2"
                                                                                                data-block="DEL_SOCIAL_PRO"
                                                                                                data-action="DELETE"> <i
                                                                                                    className="zmdi zmdi-delete"></i>
                                                                                            </a> </span> <span
                                                                                            id="spnSaveSec-2"
                                                                                            className="sphide-2"
                                                                                             style={{display:"none"}}> <a
                                                                                                id="btnUpdate-2"
                                                                                                className="btn btn-sm btn-primary ClsCndProfile"
                                                                                                data-id="2"
                                                                                                data-block="SOCIAL_PROFILE"
                                                                                                data-action="UPDATE"
                                                                                                data-hide=".sphide-2"
                                                                                                data-show=".spshow-2">Update</a>
                                                                                            <a id="btnCancel-2"
                                                                                                className="btn btn-sm btn-danger col-red ml-2  clickmode"
                                                                                                data-hide=".sphide-2"
                                                                                                data-show=".spshow-2">Cancel</a>
                                                                                        </span> </td>
                                                                                </tr>
                                                                            </tbody>
                                                                            <tfoot
                                                                                id="SocialProfile_footer_Placeholder">
                                                                            </tfoot>
                                                                        </table>
                                                                        <div className="sodial_add none_dis">
                                                                            <table className="table-bordered table">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td></td>
                                                                                        <td style={{width:"300px"}}> <input
                                                                                                id="txtProfileType"
                                                                                                className="form-control"
                                                                                                placeholder="Enter profile type"/>
                                                                                            <p className="col-grey mb-1">e.g
                                                                                                : Facebook, Instagram,
                                                                                                LinkedIn</p>
                                                                                        </td>
                                                                                        <td> <input id="txtProfileLink"
                                                                                                className="form-control"
                                                                                                placeholder="Enter profile link"/>
                                                                                            <span
                                                                                                className="col-grey mb-1">e.g
                                                                                                :
                                                                                                https://facebook.com/xyz/
                                                                                            </span>
                                                                                        </td>
                                                                                        <td style={{width:"150px"}}></td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                            <div className="text-center"> <a
                                                                                    className="btn btn-primary  btn-lg mt-2 mb-2 ml-2  ClsCndProfile"
                                                                                    data-id="0"
                                                                                    data-block="SOCIAL_PROFILE"
                                                                                    data-action="INSERT"
                                                                                    data-hide=".sodial_add, .cro_add"
                                                                                    data-show=".had-add, .social_view"><b>Save</b></a>
                                                                                <a className="btn btn-outline-danger btn-lg clickmode"
                                                                                    data-hide=".sodial_add, .cro_add"
                                                                                    data-show=".had-add, .social_view"><b>Cancel</b></a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="text-center"> <a
                                                                            className="btn btn-sm btn-primary had-add clickmode mt-3"
                                                                            data-hide=".had-add"
                                                                            data-show=".sodial_add"> <i
                                                                                className="zmdi zmdi-plus-square mr-1"></i>Add
                                                                            New Social Profiles </a> </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row disply_rowSocialProfile pt-3 pb-3"
                                                         style={{display:"none"}}> <button className="cross clickmode"
                                                            data-hide=".disply_rowSocialProfile"
                                                            data-show=".disply_none_rowSocialProfile"><i
                                                                className="zmdi zmdi-close" aria-hidden="true"></i></button>
                                                        <div className="col-md-12"> </div>
                                                        <div className="col-md-12 mb-2 text-center">
                                                            <hr className="m-0 mb-4"/>
                                                            <button className="btn btn-outline-danger btn-lg  clickmode"
                                                                data-hide=".disply_rowSocialProfile"
                                                                data-show=".disply_none_rowSocialProfile"><b>
                                                                    Cancel</b></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                           
      
    </>
  )
}
