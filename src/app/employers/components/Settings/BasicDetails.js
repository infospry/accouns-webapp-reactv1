import React from 'react'

export default function BasicDetails({employerProfile}) {  
    console.log('Basic Details');
    console.log(employerProfile); 
       return (
        <>
         {employerProfile.map((item) => (   
            <div class="panel-group">
                <div class="panel panel-primary  bdr-1">
                    <div class="panel-body pt-0 pb-0">
                        <div class="row">
                            <div class="col-sm-12 formbg p-0">
                                <div class="avt_bg d-flex justify-content-between align-items-center">
                                    <h3 class="mb-0"><b>Basic Information</b></h3>
                                </div>
                                <div class="p-4 bdr_b1 View_General_info">
                                    <div class="row justify-content-start">
                                        <div class="col-12 col-lg-6">
                                            <h4>Company Name</h4>
                                            <p class="mb-3 profileView">
                                                <span id="spanProName" class="col-black font-16 font-600">
                                                {item.company_name} </span>
                                            </p>
                                            <div class="tools">
                                                <h4>Profile completion(%) </h4>
                                                <div class="tools-progres">
                                                    <div class="progres pb-0 mb-3 mt-1">
                                                        <p>{item.profile_completion_in_percent}</p>
                                                        <div class="prog">
                                                            <span class="bg-lnir" style={{ width: "30%" }}></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <h4> User id
                                            </h4>
                                            <p class="mb-3">
                                                <span class="col-black font-16 font-600">
                                                    {item.emp_userid}</span>
                                            </p>
                                            <h4> Company Registration Number
                                            </h4>
                                            <p class="mb-3">
                                                <span class="col-black font-16 font-600">
                                                    {item.company_reg_no}
                                                </span>
                                            </p>

                                            <h4> Ownership</h4>
                                            <p class="mb-3">
                                                <span class="col-black font-16 font-600">
                                                    {item.ownership}
                                                </span>
                                            </p>

                                            <h4> Owner name</h4>
                                            <p class="mb-3">
                                                <span class="col-black font-16 font-600">
{item.owner_name}
                                                </span>
                                            </p>


                                        </div>
                                        <div class="col-12 col-lg-6">
                                            <div class="mb-3 emailView">
                                                <h4>Email
                                                    Address</h4>
                                                <span id="spanProEmail" class="col-black font-16 font-600">
                                                    {item.emp_email}
                                                </span>
                                            </div>

                                            <div class="mb-3 phoneView">
                                                <h4>Mobile
                                                    Number</h4>
                                                <span id="spanProMob" class="col-black font-16 font-600">
                                                {item.emp_mobile}
                                                </span>
                                            </div>

                                            <h4> Number of Employees</h4>
                                            <p class="mb-3">
                                                <span class="col-black font-16 font-600">
                                                    {item.number_of_employees}
                                                </span>
                                            </p>
                                            <h4>Industry</h4>
                                            <p class="mb-3">
                                                <span class="col-black font-16 font-600">
                                                    {item.industry}
                                                </span>
                                            </p>


                                            <h4>Category</h4>
                                            <p class="mb-3">
                                                <span class="col-black font-16 font-600">
                                                {item.category}
                                                </span>
                                            </p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
 ))}
         
      <div class="panel-group">
                <div class="panel panel-primary  bdr-1">
                    <div class="panel-body pt-0 pb-0">
                        <div class="row">
                            <div class="col-sm-12 formbg p-0">
                                <div class="avt_bg d-flex justify-content-between align-items-center">
                                    <h3 class="mb-0"><b>Users</b>
                                    </h3>
                                </div>
                                <div class="p-4 bdr_b1 View_General_info">
                                    <div class="row justify-content-start">
                                    
                                        <div class="col-12 col-lg-6">
                                            <div class="bxsaddow mb-2 p-2">

                                                <div class="p-3 bdr1 h4show cls-location-part">
                                                    <p class="mb-1"> <span class="wd--16px">User role</span> <span>:</span> <span id="Span5">{item.user_role}</span> </p>
                                                    <p class="mb-1"> <span class="wd--16px">Name</span> <span>:</span><span id="Span6">{item.name} </span>   </p>
                                                    <p class="mb-1"> <span class="wd--16px">Contact No. </span><span>:</span> <span id="Span7">{item.sr_no}</span> </p>
                                                    <p class="mb-1"> <span class="wd--16px">Email </span> <span>:</span><span id="Span8">{item.sr_no}</span> </p>

                                                </div>
                                            </div>

                                        </div>
))}
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
