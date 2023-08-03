"use client"
import Link from "next/link";
import Settings from "./Settings";
import { useState, useEffect } from "react";
import { asyncGet,asyncPost } from '@/app/services/HttpServices';
import { endpoint_category_ddl, endpoint_employer } from "@/app/services/ApiEndPoints";

function Main() {
    const [errors, setErrors] = useState({});
    const [employer, setEmployer] = useState([]);
    const [employerProfilep, setEmployerProfile] = useState([]);
    const [category_ddl, setcategory_ddl] = useState([]);
    const [Emp_id, setEmp_id] = useState();
    const [empType, setEmpType] = useState('All');
    const [accountStatus, setAccountStatus] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        mobile: '',
        company_name: '',
        company_reg_no: '',
        industry: '',
        category: '',
        invitation_status: 0,
    });    
    
    useEffect(() => {
        getEmployers('');
        FillDropdown();
    }, []);

    function viewDetails(id){
       viewEmployerProfile(id);
      }     
  
     const viewEmployerProfile = async (id) => {
        try {
            const response = await asyncGet(endpoint_employer + '/' + id);
            console.log(response.Response[0].employer_details);
            setEmployerProfile(response.Response[0].employer_details);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
      }; 

     const getEmployers = async (Status) => {
          try {
        console.log(Status);
              const response = await asyncGet(endpoint_employer+'?status='+Status+'&serachkey=&offset=0&next=10');
              setEmployer(response.Response[0].Employers);
          } catch (error) {
              console.error('Error fetching data:', error);
          }
      };
  
      const FillDropdown = async () => {
          try {
              const response = await asyncGet(endpoint_category_ddl);
              setcategory_ddl(response.Response[0].Industries);
          } catch (error) {
              console.error('Error fetching data:', error);
          }
      };     
  
      const AddNewEmployer = async () => {
          try {

            if(formData!==null)
            {
               let payload=[formData];               
              console.log(payload);
           
              const response = await asyncPost(endpoint_employer + '/registration', payload);
              console.log(response);
  
              if (response.Status === "OK") {

                  getEmployers('');
                  alert(response.Response);
                  reSetForm();
  
              }
              else {           
                  console.error(response.Error, error);
              }
            }
            else
            {
                alert('Invalid Jason');
            }
          } catch (error) {
              console.error(error, error);
          }
      };


   
//*******************************Validation************************************ */
//Add New Employer

function handleTabClick(tab_status){   
    // alert(tab_status);     
    // setAccountStatus(tab_status);
    getEmployers(tab_status);
   } 

const handleChange = (e) => {
const { name, value} = e.target;    
if(name=='sentInvitations')
{ 
    setFormData((prevFormData) => ({
        ...prevFormData,
        ['invitation_status']: e.target.checked?1:0,
    }));
}
else if(name=='category')
{
    var country_select = document.querySelector("#ddl_category");
    var industry_id = country_select.options[country_select.selectedIndex].getAttribute('industry');
    setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value  ,
        ['industry']: industry_id,
    }));
}
else
{
    setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
    }));
}

};

const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    // Perform validation here
    if (!formData.first_name.trim()) {
        validationErrors.first_name = 'First name is required';
    }

    if (!formData.last_name.trim()) {
        validationErrors.last_name = 'Last name is required';
    }

    if (!formData.email.trim()) {
        validationErrors.email = 'Email is required';
    }

    // Validate mobile number format using a regular expression
    const mobileNumberRegex = /^[0-9]{10}$/; // Assuming a 10-digit mobile number format
    if (!formData.mobile.trim()) {
        validationErrors.mobile = 'Mobile number is required';
    } else if (!mobileNumberRegex.test(formData.mobile)) {
        validationErrors.mobile = 'Invalid mobile number format. Please enter a 10-digit number.';
    }

    if (!formData.company_name.trim()) {
        validationErrors.company_name = 'Company name is required';
    }

    if (!formData.company_reg_no.trim()) {
        validationErrors.company_reg_no = 'Registration number is required';
    }

    if (!formData.category.trim()) {
        validationErrors.category = 'Industry is required';
    }

    setErrors(validationErrors);

    // If there are no errors, proceed with form submission
    if (Object.keys(validationErrors).length === 0) {
        // Handle form submission here (e.g., send data to server)
       //setIsValid(true);
        // console.log('Form submitted successfully:', formData);
        AddNewEmployer();
    }
};

const reSetForm=()=>{
    setFormData({
        first_name: '',
        last_name: '',
        email: '',
        mobile: '',
        company_name: '',
        company_reg_no: '',
        industry: '',
        category: '',
        invitation_status: 0,
    })
};
// Add role::::
const [formDataRole, setformDataRole] = useState({
    roleName: '',
    roleAlias: '',
    defaultBreak: '',
    defaultRate: '',
    roleColor: '',
});
   
const handleChangeRole = (e) => {
    const { name, value } = e.target;
    setformDataRole((prevformDataRole) => ({
        ...prevformDataRole,
        [name]: value,
    }));
};

const handleSubmitRole = (e) => {
    e.preventDefault();

    const validationErrors = {};

    // Validate required fields
    if (!formDataRole.roleName.trim()) {
        validationErrors.roleName = 'Role name is required';
    }

    if (!formDataRole.roleAlias.trim()) {
        validationErrors.roleAlias = 'Role alias is required';
    }
    // if (!formDataRole.defaultBreak.trim()) {
    //     validationErrors.defaultBreak = 'Role Default Break is required';
    //   }

    //   if (!formDataRole.defaultRate.trim()) {
    //     validationErrors.defaultRate = 'Role defaultis required';
    //   }


    if (!formDataRole.roleColor.trim()) {
        validationErrors.roleColor = 'Role color is required';
    }

    setErrors(validationErrors);

    // If there are no errors, proceed with form submission
    if (Object.keys(validationErrors).length === 0) {
        // Handle form submission here (e.g., send data to server)
        console.log('Form submitted successfully:', formDataRole);
    }
};


// :::Add Shifttime:::::::
const [formDataShiftTime, setFormDataShiftTime] = useState({
    roleShiftTime: '0',
    shiftTimeFrom: '',
    shiftTimeTo: '',
    duration: '0.0',
    labelColorCode: '#04BE5B',
    shiftTimingName: '',
    // Add other form fields here
});
const handleInputShiftTime = (e) => {
    const { id, value } = e.target;
    setFormDataShiftTime((prevFormDataShiftTime) => ({
        ...prevFormDataShiftTime,
        [id]: value,
    }));
};

const validateFormShiftTime = () => {
    const newErrors = {};

    // Perform form validation here

    if (formDataShiftTime.roleShiftTime === '0') {
        newErrors.roleShiftTime = 'Select Role is required';
    }
    if (!formDataShiftTime.shiftTimingName.trim()) {
        newErrors.shiftTimingName = 'Shift Timing Name is required';
    }
    if (!formDataShiftTime.shiftTimeFrom.trim()) {
        newErrors.shiftTimeFrom = 'Shift Time From is required';
    }
    if (!formDataShiftTime.shiftTimeTo.trim()) {
        newErrors.shiftTimeTo = 'Shift Time To is required';
    }
    if (!formDataShiftTime.labelColorCode.trim()) {
        newErrors.labelColorCode = 'Choose color is required';
    }
    // Add other validation rules for other fields

    setErrors(newErrors);

    // Return true if there are no errors
    return Object.keys(newErrors).length === 0;
};

const handleSubmitShiftTime = (e) => {
    e.preventDefault();
    const isValid = validateFormShiftTime();

    if (isValid) {
        // Submit the form data to the server or process it as needed
        console.log(formDataShiftTime);
    }
};


 // :::Add Location:::::::
 const [formDataLocation, setFormDataLocation] = useState({
    locationName: '',
    postCode: '',
    location: '0', // Default value for the "Select Location" dropdown
    postCode: '',
    addressLine: '',
    city: '',
    county: '',
    email: '',
    mobile: '',
    onsiteParking: '0',
});

const handleInputChangeLocation = (e) => {
    const { id, value } = e.target;
    setFormDataLocation((prevFormDataLocation) => ({
        ...prevFormDataLocation,
        [id]: value,
    }));
};

const validateForm = () => {
    const newErrors = {};

    // Perform form validation here
    if (!formDataLocation.locationName.trim()) {
        newErrors.locationName = 'Location Name is required';
    }
    if (!formDataLocation.postCode.trim()) {
        newErrors.postCode = 'PostCode is required';
    }

    if (formDataLocation.location === '0') {
        newErrors.location = 'Please select a location';
    }
    if (!formDataLocation.postCode.trim()) {
        newErrors.postCode = 'Post Code is required';
    }
    if (!formDataLocation.addressLine.trim()) {
        newErrors.addressLine = 'Address line is required';
    }
    if (!formDataLocation.city.trim()) {
        newErrors.city = 'City / Town is required';
    }
    if (!formDataLocation.county.trim()) {
        newErrors.county = 'County is required';
    }
    // Add other validation rules for other fields

    setErrors(newErrors);

    // Return true if there are no errors
    return Object.keys(newErrors).length === 0;
};

const handleSubmitLocation = (e) => {
    e.preventDefault();
    const isValid = validateForm();

    if (isValid) {
        // Submit the form data to the server or process it as needed
        console.log(formDataLocation);
    }
};


//********************End Validation ********************************** */

    return (
        <>
            <section className="content">
                <div className="body_scroll ">
                    <div className="container-fluid">
                        <div className="row clearfix">
                            <div className="col-md-12 p-0">
                                <div className="card mb-0">
                                    <div className="booktab d-flex justify-content-between align-items-center sadow p-2">
                                        <h2><i className="zmdi zmdi-widgets"></i> Employers</h2>
                                        <span id="div_planner_tour">
                                            <button id="startTourEmployees" data-tour-action="create_employee"
                                                className="btn btn-success">Start Tour</button>
                                        </span>
                                    </div>
                                    <div className="tab-content bg-white border-top">
                                        <div role="tabpanel" className="tab-pane pt-0 pl-0 pr-0 pb-2 active show" id="list_view">
                                            <div className="i_action d-flex justify-content-between align-items-center p-2 mb-0">
                                                <button type="button" className="btn btn-primary dr-breakout-btn dd_none">
                                                    <i className="zmdi zmdi-filter-list"></i> <span className="caret"></span>
                                                </button>
                                                <div className="dr-breakout displayblk">
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <div className="input-group mr-1">
                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text"> <i
                                                                    className="zmdi zmdi-account"></i></span>
                                                            </div>
                                                            <select className="form-control">
                                                                <option value="" disabled="disabled" selected="selected">Select an industry </option>
                                                                {category_ddl.map((item) => (
                                                                    <optgroup label={item.industry_name}>
                                                                        {item.categories.map((categories) => {
                                                                            return (
                                                                                <option industry={item.industry_id} value={categories.cat_id}>
                                                                                    {categories.cat_name}
                                                                                </option>
                                                                            );
                                                                        })}
                                                                    </optgroup>
                                                                ))}
                                                            </select>
                                                        </div>

                                                        <div className="input-group mr-1">
                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text"> <i
                                                                    className="zmdi zmdi-search-for"></i></span>
                                                            </div>
                                                            <input id="txtEmployeesname" className="form-control"
                                                                placeholder="Enter Employer" />
                                                        </div>

                                                        <div className="btn-group">
                                                            <Link id="btnSearchEmployees" href="/" className="btn btn-primary"
                                                                data-action="save"><i
                                                                    className="zmdi zmdi-search">&nbsp;</i>Search</Link>
                                                            <Link id="btnSearchEmployeesRefresh" href=""
                                                                className="btn btn-primary ml-1 font-16 btnSearchEmployeesRefresh" value="" onClick={e => handleTabClick('')} 
                                                                data-action="cancel"><i className="zmdi zmdi-refresh">&nbsp;
                                                                </i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button id="btnAddNewEmp" class="btn btn-success  btn-add  mr-1" data-toggle="modal" data-target="#add_new"><i class="ti ti-plus"></i> Add New</button>
                                            </div>
                                            <ul className="nav nav-tabs nav-justified p-0 bdr-tp-n nav-tabs-responsive">
                                                <li id="tab_emp_all" className="nav-item cnd-navigation-tabs active"  value="" onClick={e => handleTabClick('')}  >
                                                    <Link className="nav-link  show active" href="" data-toggle="tab">
                                                        <b>All</b>
                                                    </Link>
                                                </li>
                                                <li className="nav-item cnd-navigation-tabs"  value="active" onClick={e => handleTabClick('active')} >
                                                    <Link href="" className="nav-link show" data-toggle="tab">
                                                        <b>Active</b>
                                                    </Link>
                                                </li>
                                                <li className="nav-item cnd-navigation-tabs prev"  value="inactive" onClick={e => handleTabClick('inactive')} >
                                                    <Link href="" className="nav-link show" data-toggle="tab">
                                                        <b>Inactive</b>
                                                    </Link>
                                                </li>
                                            </ul>
                                            <div className="tab-content p-2">
                                                <div role="tabpanel" className="tab-pane in active show" id="emp_all">
                                                    <div className="table-responsive leave_management">
                                                        <table className="table mb-0 table-hover rwd-table btdr_none emptbl">
                                                            <thead>
                                                                <tr>
                                                                    <th>EMP#</th>
                                                                    <th>Employer name</th>
                                                                    <th>Email / Mobile</th>
                                                                    <th>Sector</th>
                                                                    <th>Category</th>
                                                                    <th>Total Employee(s)</th>
                                                                    <th>Profile completion(%)</th>
                                                                    <th>Create Date</th>
                                                                    <th>Account Status</th>
                                                                    <th>Action</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody id="CndProfiles_Placeholder">
                                                                {employer.map((item) => (
                                                                    <tr>
                                                                        <td scope="row"> {item.emp_id} </td>
                                                                        <td>
                                                                            <div className="d-flex">

                                                                                <div className="float-left mt-2 col-black"> <b>{item.company_name}</b> </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>{item.emp_email}<br />Mob:{item.emp_mobile}</td>

                                                                        <td>{item.industry}</td>
                                                                        <td className="col-blue">{item.category}</td>
                                                                        <td className="text-center">
                                                                            {item.number_of_employees}
                                                                        </td>
                                                                        <td className="cursor" style={{ width: "30%" }} title={item.profile_completion_in_percent} >
                                                                        <div class="tools">
                                                                        <div class="tools-progres">
                                                    <div class="progres pb-0 mb-3 mt-1">
                                                      
                                                        <div class="prog">
                                                            <span class="bg-lnir" style={{ width:item.profile_completion_in_percent }}></span>
                                                        </div>
                                                    </div>
                                                </div>  </div>
                                                                            
                                                                        </td>
                                                                        <td>
                                                                            {item.create_date}
                                                                        </td>
                                                                        <td>                                                                        

    {
            item.account_status=='ACTIVE' ? <span className="cursor w-50 badge bg-success"> {item.account_status} </span> 
            : <span className="badge  cursor w-50 badge-warning"> {item.account_status} </span>
        } 
                                                                      
                                                                        </td>
                                                                        <td>
                                                                          
        <button value={item.emp_id} onClick={e => viewDetails(e.target.value)}  data-toggle="modal" data-target="#emp_settings" className="btn btn-outline-primary btn-sm"><i className="fa fa-eye"></i> View</button>
                                                                        </td>
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <div class="modal right-full" id="emp_settings" tabindex="-1" role="dialog" aria-labelledby="emp_settings"
                aria-modal="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content hightauto">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close" id="btnPopClose">
                                <span aria-hidden="true">×</span>
                            </button>
                            <h4 class="modal-title"><b>Employer Settings</b></h4>
                        </div>
                        <div class="modal-body pl-0 pr-0">
                            <Settings employerProfile={employerProfilep} ></Settings>
                        </div>
                        <div class="modal-footer position_relatie">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="text-center">
                                        <button value="Submit" id="btnEditSave" class="btn btn-primary"> Update</button>
                                        <button value="Submit" id="btnEditCancel" class="btn btn-outline-danger">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Role */}
            <div class="modal right-quater" id="ModalCustomRole" tabindex="-1" role="dialog" aria-labelledby="ModalRoleColor">
                <div class="modal-dialog" role="document">
                    <form onSubmit={handleSubmitRole} class="modal-content">
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

                                    <div className="form-group mt-3">
                                        <span className="col-blue">Role<span className="col-red">*</span></span>
                                        <input
                                            id="txtRolename"
                                            className="form-control"
                                            type="text"
                                            placeholder="Enter role name"
                                            name="roleName"
                                            value={formDataRole.roleName}
                                            onChange={handleChangeRole}
                                        />
                                        {errors.roleName && <div className="error">{errors.roleName}</div>}
                                    </div>
                                    <div className="form-group mt-3">
                                        <span className="col-blue">Role Alias<span className="col-red">*</span></span>
                                        <input
                                            id="txtRoleAlias"
                                            className="form-control"
                                            type="text"
                                            placeholder="Enter role alias"
                                            name="roleAlias"
                                            value={formDataRole.roleAlias}
                                            onChange={handleChangeRole}
                                        />
                                        {errors.roleAlias && <div className="error">{errors.roleAlias}</div>}
                                    </div>
                                    <div class="row">
                                        <div class="form-group mt-3 col-md-6">
                                            <span class="col-blue">Default Break (in min)</span>
                                            <div class="input-group-prepend">
                                                <span class="input-group-text" style={{ borderRadius: "0px" }}> <i
                                                    class="zmdi zmdi-time"></i></span>
                                                <input
                                                    id="txtDefaultBreak"
                                                    className="form-control"
                                                    type="text"
                                                    placeholder="0" maxlength="3"
                                                    name="defaultBreak" style={{ borderRadius: "0px" }}
                                                    value={formDataRole.defaultBreak}
                                                    onChange={handleChangeRole}
                                                />
                                                {errors.defaultBreak && <div className="error">{errors.defaultBreak}</div>}

                                            </div>
                                        </div>
                                        <div class="form-group mt-3 col-md-6">
                                            <span class="col-blue">Default Rate (£)</span>
                                            <div class="input-group-prepend">
                                                <span class="input-group-text" style={{ borderRadius: "0px" }}> £</span>
                                                <input
                                                    id="txtDefaultRate"
                                                    className="form-control decimal"
                                                    type="text"
                                                    placeholder="0" maxlength="10"
                                                    name="defaultRate" style={{ borderRadius: "0px" }}
                                                    value={formDataRole.defaultRate}
                                                    onChange={handleChangeRole}
                                                />
                                                {errors.defaultRate && <div className="error">{errors.defaultRate}</div>}

                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group mt-3">
                                        <span className="col-blue">Role Color<span className="col-red">*</span>
                                            <span className="col-grey">(eg:#009688)</span></span>
                                        <input
                                            id="txtLabelColorCode"
                                            className="form-control"
                                            maxLength="7"
                                            type="text"
                                            placeholder="Select color"
                                            name="roleColor"
                                            value={formDataRole.roleColor}
                                            onChange={handleChangeRole}
                                        />
                                        {errors.roleColor && <div className="error">{errors.roleColor}</div>}

                                        <hr />
                                        <div class="mt-3">
                                            <span>
                                                <span class="round pull-left colourSelectorItem">
                                                    <input type="checkbox" name="lblcolor" id="ChkColor-1" class="ClslblMaster"
                                                        data-action="radio" value="#888" />
                                                    <label for="ChkColor-1" class="bg-default"></label>
                                                </span>
                                                <span class="round pull-left colourSelectorItem">
                                                    <input type="checkbox" name="lblcolor" id="ChkColor-2" class="ClslblMaster"
                                                        data-action="radio" value="#009688" />
                                                    <label for="ChkColor-2" class="bg-teal"></label>
                                                </span>
                                                <span class="round pull-left colourSelectorItem">
                                                    <input type="checkbox" name="lblcolor" id="ChkColor-3" class="ClslblMaster"
                                                        data-action="radio" value="#98f" />
                                                    <label for="ChkColor-3" class="bg-indigo"></label>
                                                </span>
                                                <span class="round pull-left colourSelectorItem">
                                                    <input type="checkbox" name="lblcolor" id="ChkColor-4" class="ClslblMaster"
                                                        data-action="radio" value="#607D8B" />
                                                    <label for="ChkColor-4" class="bg-blue-grey"></label>
                                                </span>
                                                <span class="round pull-left colourSelectorItem">
                                                    <input type="checkbox" name="lblcolor" id="ChkColor-5" class="ClslblMaster"
                                                        data-action="radio" value="#9E9E9E" />
                                                    <label for="ChkColor-5" class="bg-grey"></label>
                                                </span>
                                            </span>
                                            <span>
                                                <span class="round pull-left colourSelectorItem">
                                                    <input type="checkbox" name="lblcolor" id="ChkColor-6" class="ClslblMaster"
                                                        data-action="radio" value="#fdd932" />
                                                    <label for="ChkColor-6" class="bg-yellow"></label>
                                                </span>
                                                <span class="round pull-left colourSelectorItem">
                                                    <input type="checkbox" name="lblcolor" id="ChkColor-7" class="ClslblMaster"
                                                        data-action="radio" value="#e47297" />
                                                    <label for="ChkColor-7" class="bg-blush"></label>
                                                </span>
                                                <span class="round pull-left colourSelectorItem">
                                                    <input type="checkbox" name="lblcolor" id="ChkColor-8" class="ClslblMaster"
                                                        data-action="radio" value="#FFC107" />
                                                    <label for="ChkColor-8" class="bg-amber"></label>
                                                </span>
                                                <span class="round pull-left colourSelectorItem">
                                                    <input type="checkbox" name="lblcolor" id="ChkColor-9" class="ClslblMaster"
                                                        data-action="radio" value="#03A9F4" />
                                                    <label for="ChkColor-9" class="bg-light-blue"></label>
                                                </span>
                                                <span class="round pull-left colourSelectorItem">
                                                    <input type="checkbox" name="lblcolor" id="ChkColor-10" class="ClslblMaster"
                                                        data-action="radio" value="#795548" />
                                                    <label for="ChkColor-10" class="bg-brown"></label>
                                                </span>
                                            </span>
                                            <span>
                                                <span class="round pull-left colourSelectorItem">
                                                    <input type="checkbox" name="lblcolor" id="ChkColor-11" class="ClslblMaster"
                                                        data-action="radio" value="#ff4dab" />
                                                    <label for="ChkColor-11" class="bg-pink"></label>
                                                </span>
                                                <span class="round pull-left colourSelectorItem">
                                                    <input type="checkbox" name="lblcolor" id="ChkColor-12" class="ClslblMaster"
                                                        data-action="radio" value="#04BE5B" />
                                                    <label for="ChkColor-12" class="bg-success"></label>
                                                </span>
                                                <span class="round pull-left colourSelectorItem">
                                                    <input type="checkbox" name="lblcolor" id="ChkColor-13" class="ClslblMaster"
                                                        data-action="radio" value="#82c885" />
                                                    <label for="ChkColor-13" class="bg-lime"></label>
                                                </span>
                                                <span class="round pull-left colourSelectorItem">
                                                    <input type="checkbox" name="lblcolor" id="ChkColor-14" class="ClslblMaster"
                                                        data-action="radio" value="#ee2558" />
                                                    <label for="ChkColor-14" class="bg-danger"></label>
                                                </span>
                                                <span class="round pull-left colourSelectorItem">
                                                    <input type="checkbox" name="lblcolor" id="ChkColor-15" class="ClslblMaster"
                                                        data-action="radio" value="#1cbfd0" />
                                                    <label for="ChkColor-15" class="bg-info"></label>
                                                </span>
                                            </span>
                                            <span>
                                                <span class="round pull-left colourSelectorItem">
                                                    <input type="checkbox" name="lblcolor" id="ChkColor-16" class="ClslblMaster"
                                                        data-action="radio" value="#0388d1" />
                                                    <label for="ChkColor-16" class="bg-primary"></label>
                                                </span>
                                                <span class="round pull-left colourSelectorItem">
                                                    <input type="checkbox" name="lblcolor" id="ChkColor-17" class="ClslblMaster"
                                                        data-action="radio" value="#6f42c1" />
                                                    <label for="ChkColor-17" class="bg-purple"></label>
                                                </span>
                                                <span class="round pull-left colourSelectorItem">
                                                    <input type="checkbox" name="lblcolor" id="ChkColor-18" class="ClslblMaster"
                                                        data-action="radio" value="#FF9948" />
                                                    <label for="ChkColor-18" class="bg-orange"></label>
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="submit" class="btn btn-primary ClsCustomRole" id="btnCustomRole" >Save</button>
                            <a class="btn btn-outline-danger" data-dismiss="modal">Cancel</a>
                        </div>
                    </form>
                </div>
            </div>
            {/* shift Timming */}
            <div className="modal right-quater" id="ModalShiftTimming" tabIndex="-1" role="dialog" aria-labelledby="ModalShiftTimming" aria-hidden="true">
                <div className="modal-dialog ui-draggable" role="document">
                    <form onSubmit={handleSubmitShiftTime} className="modal-content hightauto">
                        <div className="modal-header ui-draggable-handle">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                            <h4 className="modal-title" id="myModalLabel9">
                                <b>Shift Time</b>
                            </h4>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-group mt-3">
                                        <span className="col-blue">Role<span className="col-red">*</span></span>
                                        <div className="input-group">
                                            <select
                                                id="roleShiftTime"
                                                className="form-control clsRoleList"
                                                value={formDataShiftTime.roleShiftTime}
                                                onChange={handleInputShiftTime}
                                            >

                                                <option value="0">Default</option>
                                                <option data-role-id="0" data-rate="50" value="111" title="Advance Nurse Practitioner">Advance Nurse
                                                    Practitioner</option>
                                                <option data-role-id="0" data-rate="60" value="114" title="Care Assistant">Care Assistant</option>
                                                <option data-role-id="0" data-rate="70" value="115" title="Clinical Practitioner">Clinical Practitioner
                                                </option>
                                                <option data-role-id="0" data-rate="48.25" value="116" title="Forensic Nurse">Forensic Nurse</option>
                                                <option data-role-id="0" data-rate="100" value="117" title="General Practitioner">General Practitioner
                                                </option>
                                                <option data-role-id="0" data-rate="60" value="118" title="HCA">HCA</option>
                                                <option data-role-id="0" data-rate="30" value="119" title="Home Care">Home Care</option>
                                                <option data-role-id="0" data-rate="80" value="120" title="Hospital Doctor">Hospital Doctor</option>
                                                <option data-role-id="0" data-rate="80" value="122" title="Opthalmologist">Opthalmologist</option>
                                                <option data-role-id="0" data-rate="70.75" value="123" title="Pharmacist">Pharmacist</option>
                                                <option data-role-id="0" data-rate="45.5" value="127" title="Practice Nurse">Practice Nurse</option>
                                                <option data-role-id="0" data-rate="45.25" value="130" title="Receptionist">Receptionist</option>
                                                <option data-role-id="0" data-rate="50" value="131" title="Registered General Nurse">Registered General
                                                    Nurse</option>
                                                <option data-role-id="0" data-rate="40" value="133" title="Support Worker">Support Worker</option>
                                            </select>
                                            <a href="https://empapp.thestaffport.com/Settings/JobRoles" className="btn btn-outline-primary cursor ml-1" data-tippy="" data-original-title="Add Role">
                                                <i className="ti ti-plus"></i>
                                            </a>
                                        </div>
                                        {errors.roleShiftTime && <span className="error">{errors.roleShiftTime}</span>}
                                    </div>

                                    <div className="form-group mt-3">
                                        <span className="col-blue">Shift Timings Name<span className="col-red">*</span></span>

                                        <input
                                            id="shiftTimingName"
                                            className="form-control"
                                            type="text"
                                            placeholder="Enter shift timings name"
                                            value={formDataShiftTime.shiftTimingName}
                                            onChange={handleInputShiftTime}
                                        />
                                        {errors.shiftTimingName && <span className="error">{errors.shiftTimingName}</span>}

                                    </div>

                                    <div className="form-group mt-3">
                                        <span className="col-blue">Shift Time (from-to)<span className="col-red">*</span></span>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="input-group masked-input unset mb-1">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text"><i className="zmdi zmdi-time"></i></span>
                                                    </div>

                                                    <input
                                                        type="text"
                                                        id="shiftTimeFrom"
                                                        className="form-control time24 w-90 TimeFrom"
                                                        placeholder="hh:mm"
                                                        value={formDataShiftTime.shiftTimeFrom}
                                                        onChange={handleInputShiftTime}
                                                    />

                                                </div>
                                                {errors.shiftTimeFrom && <span className="error">{errors.shiftTimeFrom}</span>}
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="input-group masked-input unset mb-1">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text"><i className="zmdi zmdi-time"></i></span>
                                                    </div>
                                                    <input
                                                        type="text"
                                                        id="shiftTimeTo"
                                                        className="form-control time24 w-90 TimeTo"
                                                        placeholder="hh:mm"
                                                        value={formDataShiftTime.shiftTimeTo}
                                                        onChange={handleInputShiftTime}
                                                    />
                                                </div>
                                                {errors.shiftTimeTo && <span className="error">{errors.shiftTimeTo}</span>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group mt-3 dd_none" >
                                        <span className="col-blue">Duration</span>

                                        <input
                                            id="txtDuration"
                                            className="form-control txtDuration"
                                            type="text"
                                            disabled
                                            placeholder="0.0"
                                            value={formDataShiftTime.duration}
                                            onChange={handleInputShiftTime}
                                        />
                                    </div>
                                    <div className="form-group mt-3">
                                        <span className="col-blue">Select Shift Color<span className="col-red">*</span></span>

                                        <input
                                            id="labelColorCode"
                                            className="form-control"
                                            maxLength="7"
                                            type="text"
                                            placeholder="Select color"
                                            value={formDataShiftTime.labelColorCode}
                                            onChange={handleInputShiftTime}
                                        />
                                        {errors.labelColorCode && <span className="error">{errors.labelColorCode}</span>}

                                        
                                        <div class="mt-3">
                                          
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                        <div className="modal-footer position_relatie">
                            <button type="submit" className="btn btn-primary ClsRotaShiftTimming" id="btnRotaShiftTimming" data-id="40" data-action="insertupdate">
                                Update
                            </button>                            <a className="btn btn-outline-danger" data-dismiss="modal">Cancel</a>
                        </div>
                    </form>
                </div>
            </div>
            {/* Add New */}

            <div id="add_new" className="modal md-one right-quater" tabindex="-1" role="dialog" aria-labelledby="add_new" aria-hidden="true">

                <div className="modal-dialog" role="document">
                    <form onSubmit={handleSubmit} className="modal-content hightauto">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                            <h4 className="modal-title" id="myModalLabel2">
                                <b id="lblDocMasterTitle">Add New Employer</b>
                            </h4>
                        </div>

                        <div className="modal-body">
                            <div className="row m-0">
                                <div className="col-12 col-md-6 mt-2">
                                    <div className="form-group">
                                        <label className="col-form-label col-form-label-lg">
                                            <i class="fa fa-user"></i> First name<span>*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="first_name"
                                            value={formData.first_name}
                                            onChange={handleChange}
                                            className="form-control form-control-lg"
                                            placeholder="Enter first name"
                                        />
                                        {errors.first_name && <div className="error">{errors.first_name}</div>}
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 mt-2">
                                    <div className="form-group">
                                        <label className="col-form-label col-form-label-lg">
                                            <i class="fa fa-user"></i> Last name<span>*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="last_name"
                                            value={formData.last_name}
                                            onChange={handleChange}
                                            className="form-control form-control-lg"
                                            placeholder="Enter Last name"
                                        />
                                        {errors.last_name && <div className="error">{errors.last_name}</div>}
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <label className="col-form-label col-form-label-lg">
                                            <i class="fa fa-envelope"></i> Email Id<span>*</span>
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="form-control form-control-lg"
                                            placeholder="Enter Email Id"
                                        />
                                        {errors.email && <div className="error">{errors.email}</div>}
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <label className="col-form-label col-form-label-lg">
                                            <i class="fa fa-phone"></i> Mobile Number<span>*</span>
                                        </label>

                                        <input
                                            type="text"
                                            name="mobile"
                                            value={formData.mobile}
                                            onChange={handleChange}
                                            className="form-control form-control-lg"
                                            placeholder="Enter Mobile number"
                                        />
                                        {errors.mobile && <div className="error">{errors.mobile}</div>}
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="form-group">
                                        <label className="col-form-label col-form-label-lg">
                                            <i class="fa fa-industry"></i>  Company / Organisation Name<span>*</span>
                                        </label>

                                        <input
                                            type="text"
                                            name="company_name"
                                            value={formData.company_name}
                                            onChange={handleChange}
                                            className="form-control form-control-lg"
                                            placeholder="Enter  Company / Organisation Name"
                                        />
                                        {errors.company_name && <div className="error">{errors.company_name}</div>}
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="form-group">
                                        <label className="col-form-label col-form-label-lg">
                                            <i class="fa fa-text-width" aria-hidden="true"></i> Registration Number<span>*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="company_reg_no"
                                            value={formData.company_reg_no}
                                            onChange={handleChange}
                                            className="form-control form-control-lg"
                                            placeholder="Enter Registration Number"
                                        />
                                        {errors.company_reg_no && <div className="error">{errors.company_reg_no}</div>}

                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <label className="col-form-label col-form-label-lg">
                                            <i class="fa fa-industry"></i> Industry<span>*</span>
                                        </label>
                                        {/* Dropdown select with options */}
                                        <select
                                            id="ddl_category"
                                            className="form-control form-control-lg"
                                            data-step="3"
                                            name="category"
                                            value={formData.category}
                                            onChange={handleChange}
                                        >
                                            <option value="" disabled>
                                                Select an industry
                                            </option>
                                            {category_ddl.map((item) => (
                                                <optgroup label={item.industry_name} key={item.industry_id}>
                                                    {item.categories.map((categories) => (
                                                        <option
                                                            key={categories.cat_id}
                                                            industry={item.industry_id}
                                                            value={categories.cat_id}
                                                        >
                                                            {categories.cat_name}
                                                        </option>
                                                    ))}
                                                </optgroup>
                                            ))}
                                        </select>
                                        {errors.category && <div className="error">{errors.category}</div>}
                                    </div>
                                </div>
                                <div className="col-12 mb-3">
                                    <div class="custom-control custom-checkbox checkbox-inline pl-4">
                                        <input id="sentInvitations" onChange={handleChange} name="sentInvitations" type="checkbox" class="custom-control-input" />
                                        <label for="sentInvitations" class="custom-control-label line24 pointer">Sent Invitations</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="text-center">
                                        <button type="submit"  className="btn btn-primary btn-lg mr-1"> Save </button>
                                        <a className="btn btn-outline-danger btn-lg" onClick={reSetForm} data-dismiss="modal"><i className="zmdi zmdi-close"></i> Close</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
            {/* Add New Location */}
            <div className="modal right-quater" id="ModalProfileLocation" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel2">
                <div className="modal-dialog" role="document">
                    <form onSubmit={handleSubmitLocation} className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                            <div className="row">
                                <h4 className="modal-title" id="myModalLabel2">
                                    <b>LOCATION</b>
                                </h4>
                            </div>
                        </div>
                        <div className="modal-body pb-0 pl-0">

                            <div className="row">
                                <div className="col-md-12 col-sm-12 pr-0 formbg bdr-r h-100prnt">
                                    <div className="col-md-12">
                                        <div className="form-group mb-2">
                                            <label htmlFor="txtEmpLocationName">Location Name<span>*</span></label>
                                            <input
                                                id="txtEmpLocationName"
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter Location Name"
                                                value={formDataLocation.locationName}
                                                onChange={handleInputChangeLocation}
                                            />
                                            {errors.locationName && <span className="error">{errors.locationName}</span>}
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group mb-1">
                                            <label>Post Code<span>*</span></label>
                                            <div className="input-group">

                                                <input
                                                    id="txtEmpprofilePostcode"
                                                    type="text"
                                                    className="form-control mr-1 txtPostcode"
                                                    placeholder="Enter Postcode"
                                                    value={formDataLocation.postCode}
                                                    onChange={handleInputChangeLocation}
                                                />

                                                <a id="btnEmpProfileFindAddress" className="btn btn-outline-primary clk GetAddress2"><i className="zmdi zmdi-pin mr-1"></i>Find Address</a>
                                                <span id="spannotfound2" className="spannotfound2"></span>
                                            </div>
                                            {errors.postCode && <span className="error">{errors.postCode}</span>}
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group mb-2 divselectAddres2">
                                            <label>Select Location <span>*</span></label>
                                            <select
                                                className="form-control"
                                                id="location"
                                                value={formDataLocation.location}
                                                onChange={handleInputChangeLocation}
                                            >
                                                <option value="0">Select Location</option><option value="7" title="85 Aston Street  ,  Birmingham,  West Midlands B4 7DA">Birmingham</option><option value="8" title="100 Kettlebrook Road  ,  Tamworth,  Staffordshire B771AE">Tamworth</option><option value="9" title="10 Measham Grove  ,  Birmingham,  West Midlands B261HU">Solihull</option><option value="12" title="3 Burcot Lane  ,  Bromsgrove,  Worcestershire B601AF">Bromsgrove</option><option value="14" title="Waterstones Booksellers Ltd  Hustlergate,  Bradford,  West Yorkshire BD1 1BL">Bradford</option><option value="16" title="Flat 102  Beckford House,  Bristol,  Gloucestershire BS1 3FD">Bristol</option><option value="10" title="Aberdeen City Council  Finance Department  Town House,  Aberdeen,  Aberdeenshire AB10 1AH">Aberdeen</option><option value="13" title="Mappleborough Green Village Hall  Birmingham Road,  Studley,  Warwickshire B807BT">Redditch</option><option value="15" title="Flat 105  The Pack Horse,  Bolton,  Lancashire BL11AS">Bolton</option><option value="11" title="1 Brodiach Cottages  ,  Aberdeen,  Aberdeenshire AB15 8QS">Westhill</option>

                                                {/* Add other options based on your data */}
                                            </select>
                                            {errors.location && <span className="error">{errors.location}</span>}

                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="divaddress2">
                                            <div className="form-group mb-2">
                                                <label>Address line <span>*</span></label>
                                                <input
                                                    id="addressLine"
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter Address"
                                                    value={formDataLocation.addressLine}
                                                    onChange={handleInputChangeLocation}
                                                />
                                                {errors.addressLine && <span className="error">{errors.addressLine}</span>}            </div>
                                            <div className="form-group mb-2">
                                                <label>City / Town <span>*</span></label>
                                                <input
                                                    id="city"
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter City / Town"
                                                    value={formDataLocation.city}
                                                    onChange={handleInputChangeLocation}
                                                />
                                                {errors.city && <span className="error">{errors.city}</span>}
                                            </div>
                                            <div className="form-group mb-2">
                                                <label>County <span>*</span></label>
                                                <input
                                                    id="county"
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter County"
                                                    value={formDataLocation.county}
                                                    onChange={handleInputChangeLocation}
                                                />
                                                {errors.county && <span className="error">{errors.county}</span>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group mb-2">
                                            <label>Email</label>
                                            <input id="txtEmpProfileEmail" type="text" className="form-control" placeholder="Enter Email Id" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group mb-2">
                                            <label>Mobile No.</label>
                                            <input id="txtEmpProfileMobile" type="text" className="form-control ChkMobile" maxLength="10" placeholder="Enter Mobile No." />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mb-2">
                                            <label>Onsite Parking </label>
                                            <div className="btn-group">
                                                <a id="btnAvailable" className="btn btn-outline-primary btn-sm Clsbtn" data-action="Parking" data-type="available" data-status="1">Available</a>
                                                <a id="btnNA" className="btn btn-primary btn-sm Clsbtn" data-action="Parking" data-type="not" data-status="0">Not Available</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="modal-footer">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-primary ClsEmpProfile" data-action="insertupdate">
                                            Save
                                        </button>
                                        <a className="btn btn-outline-danger" data-dismiss="modal">
                                            <i className="zmdi zmdi-close mr-1"></i>Close
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>


        </>
    )

}
export default Main;