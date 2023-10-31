import React from 'react'
import { useState ,useEffect } from 'react';
import ApiEndPoints from "../../utils/ApiEndPoints";
import { getCookie } from 'cookies-next';
import { getData } from '../../services/apiservice';

function Users() {
    const [formData, setFormData] = useState({
        user_name: 'test3',
        user_mobile: '67576876868',
        user_email: 'test3@gmail.co',
        user_password: '',
        confirm_password: '',
        user_role: '1',
        email_verify_required: false,
      });
    
      const [formErrors, setFormErrors] = useState({});
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleButtonClick = () => {
        // Implement form validation here
        const errors = {};
    
        if (!formData.user_name) {
          errors.user_name = 'User Name is required';
        }
    
        if (!formData.user_mobile) {
          errors.user_mobile = 'Mobile Number is required';
        } else if (formData.user_mobile.length !== 11) {
          errors.user_mobile = 'Mobile Number must be 11 digits long';
        }
    
        if (!formData.user_email) {
          errors.user_email = 'Email is required';
        } else if (!isValidEmail(formData.user_email)) {
          errors.user_email = 'Invalid email format';
        }
    
        if (!formData.user_password) {
          errors.user_password = 'Password is required';
        }
    
        if (formData.user_password !== formData.confirm_password) {
          errors.confirm_password = 'Passwords do not match';
        }
    
        if (formData.user_role === '0') {
          errors.user_role = 'Please select a User Role';
        }
    
        if (Object.keys(errors).length === 0) {
          // Form is valid, you can save data here
          saveFormData(formData);
        } else {
          setFormErrors(errors);
        }
      };
    
      const saveFormData = (data) => {
        // Implement data-saving logic here
        console.log('Data saved:', data);
        // You can send the data to your server or perform other actions
      };
    
      const isValidEmail = (email) => {
        // Implement a valid email address check here
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      };
    
    const [usersData, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

      
    const getUsers = async () => {
        var offset = 0;
        var params = {"add_user":{"str_search":""},"action":"add-user","action_on":"organization","request_for":"get"};
        const lang = getCookie('signin_token');
        const response = await getData(params, lang, ApiEndPoints.organizationApi);
         const obj =response;
        if (obj.response_status === "OK")
        
        { 
            setUsers(obj.data.response.user_info); 
        }        

    }
return (
<>
    <div class="booktab d-flex justify-content-between align-items-center bdrb p-2" style={{borderTop:"0px",borderLeft:"0px",borderRight:"0px",}}>
        <div class="input-group" style={{maxWidth:"300px"}}><input class="form-control radius_all"
            aria-label="Text input with dropdown button" placeholder="Search..." type="text"/></div>

            <div><a href="javascript:void(0);" class="btn btn-success" data-bs-toggle="modal"
                data-bs-target="#addUserAccount"><i class="zmdi zmdi-plus-circle-o-duplicate"></i> Add New User</a>
            <div class="btn-group ms-1"><button class="btn btn-outline-primary  dropdown-toggle font-w" type="button"
                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">More</button>
                <div class="dropdown-menu"><a class="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal"
                    data-target="#"><i class="zmdi zmdi-upload"></i> Export</a><a class="dropdown-item"
                    href="javascript:void(0);" data-bs-toggle="modal" data-target="#"><i class="zmdi zmdi-download"></i>
                    Import</a><a class="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal" data-target="#"><i
                    class="zmdi zmdi-email"></i> Send Email</a><a class="dropdown-item" href="javascript:void(0);"
                    data-bs-toggle="modal" data-target="#"><i class="zmdi zmdi-repeat"></i> History</a><a class="dropdown-item"
                    href="javascript:void(0);" data-bs-toggle="modal" data-target="#"><i class="zmdi zmdi-rotate-left"></i>
                    Refresh</a><a class="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal" data-target="#"><i
                    class="zmdi zmdi-notifications-active"></i> Delete</a>
                </div>
            </div>
        </div>
    </div>
    <div class="table-responsive">
        <table class="table table-bordered rwd-table btdr_none mb-0">
            <thead class="font_b dnone-mob">
                <tr>
                    <th style={{width:"30px"}}>SNR</th>
                    <th class=""> Name </th>
                    <th class="text-center"> User Type</th>
                    <th class="text-center"> User Role</th>
                    <th class=""> Email Id </th>
                    <th class=""> Mobile</th>
                    <th> Status </th>
                    <th style={{width:"20px"}}> Action </th>
                </tr>
            </thead>
            <tbody>
            {usersData && usersData.length > 0 && usersData.map((item, i) => (

                <tr class="" key={i}>
                    <td class=""> {item.row_num} </td>
                    <td class="capitalize"><span id="spanUserName[object Object]">{item.user_name}</span></td>
                    <td class="textAlignCenter"><span>User</span></td>
                    <td class="textAlignCenter"><span id="spanUserRole-[object Object]" class="col-blue">Admin</span><span
                            id="spanRoleId-[object Object]" >1</span></td>
                    <td><span id="spanUserEmail-[object Object]">2@gmail.com</span></td>
                    <td><span id="spanUserMobile-[object Object]">98798709987</span></td>
                    <td class="text-center"><span 
                            class="evt-org-settings badge badge-danger">Inactive</span></td>
                    <td>
                        <div class="dropdown"><button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1"
                            data-bs-toggle="dropdown" aria-expanded="false"><img src="../images/menu-dots-vertical.svg"alt="user"/></button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">                        
                                <li><a class="dropdown-item col-blue" href="javascript:void(0);" data-bs-toggle="modal"
                                        data-bs-target="#addUserAccount"><i class="zmdi zmdi-edit me-1"></i>Edit</a></li>
                                <li><a class="dropdown-item text-danger" href="#"><i class="zmdi zmdi-delete me-1"></i>Delete</a></li>
                            </ul>
                        </div>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
    <div className="modal right-quater md-one" id="addUserAccount" tabIndex="-1" role="dialog" aria-labelledby="shortModal">
        <div className="modal-dialog ui-draggable ui-draggable-handle" role="document">
            <div className="modal-content" style={{ height: "auto!important" }}>
                <div className="modal-header bg-blu-lite fixed-top">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                    <h4 className="modal-title" id="myModalLabel2">
                        <b> <i className="zmdi zmdi-plus-circle-o-duplicate"></i> Add/ Edit  Account</b>
                    </h4>
                </div>
                <div className="modal-body pr-0 pl-0 pb-0">
                <div className="row m-0">
      <div className="col-12 col-sm-12 mt-4">
        <div className="group_lead">
          <input
            type="text"
            id="txt_name"
            name="user_name"
            className="input_text"
            required
            autoComplete="off"
            value={formData.user_name}
            onChange={(e) => setFormData({ ...formData, user_name: e.target.value })}
          />
          <label className="lablefilled">
            <i className="zmdi zmdi-account col-grey">&nbsp;</i>
            User Name<span>*</span>
          </label>
          {formErrors.user_name && (
                  <p className="error-message">{formErrors.user_name}</p>
                )}
        </div>
      </div>
      <div className="col-12 col-sm-12">
        <div className="group_lead">
          <input
            type="text"
            name="user_mobile"
            className="input_text allow-numbers-only"
            id="txt_mobile"
            maxLength="11"
            required
            autoComplete="off"
            value={formData.user_mobile}
            onChange={(e) => setFormData({ ...formData, user_mobile: e.target.value })}
          />
          <label className="lablefilled">
            <i className="zmdi zmdi-phone col-grey">&nbsp;</i>
            Mobile Number
          </label>
          {formErrors.user_mobile && (
                  <p className="error-message">{formErrors.user_mobile}</p>
                )}
        </div>
      </div>
      <div className="col-12 col-sm-12">
        <div className="group_lead">
          <input
            type="email"
            id="txt_email"
            name="user_email"
            className="input_text allow-email-only"
            required
            autoComplete="off"
            value={formData.user_email}
            onChange={(e) => setFormData({ ...formData, user_email: e.target.value })}
          />
          <label className="lablefilled">
            <i className="zmdi zmdi-email col-grey">&nbsp;</i>
            Email<span>*</span>
          </label>
          {formErrors.user_email && (
                  <p className="error-message">{formErrors.user_email}</p>
                )}
        </div>
      </div>
      <div className="col-12 col-sm-12">
        <div className="group_lead">
          <input
            type="password"
            className="input_text check-password-strength"
            id="txt_user_password"
            required
            autoComplete="off"
            value={formData.user_password}
            onChange={(e) => setFormData({ ...formData, user_password: e.target.value })}
          />
          <label className="lablefilled">
            <i className="zmdi zmdi-lock col-grey">&nbsp;</i>
            Password<span>*</span>
          </label>
          {formErrors.user_password && (
                  <p className="error-message">{formErrors.user_password}</p>
                )}
        </div>
      </div>
      <div className="col-12 col-sm-12">
        <div className="group_lead">
          <input
            type="password"
            id="txt_confirm_user_password"
            className="input_text"
            required
            autoComplete="off"
            value={formData.confirm_password}
            onChange={(e) => setFormData({ ...formData, confirm_password: e.target.value })}
          />
          <label className="lablefilled">
            <i className="zmdi zmdi-lock col-grey">&nbsp;</i>
            Confirm Password<span>*</span>
          </label> 
          {formErrors.confirm_password && (
                  <p className="error-message">{formErrors.confirm_password}</p>
                )}
        </div>
      </div>
      <div className="col-12 col-sm-12">
        <div className="group_lead">
          <select
            id="ddl_user_role"
            className="form-select select_f"
            name="user_role"
            data-val="0"
            data-uid=""
            required
            value={formData.user_role}
            onChange={(e) => setFormData({ ...formData, user_role: e.target.value })}
          >
            <option value="0">Select User Role</option>
            <option value="1">Admin</option>
            <option value="2">User</option>
            <option value="5">Manager</option>
            <option value="6">Super Admin</option>
          </select>
        </div>
      </div>
      <div id="users_placeholder" className="col-12 col-sm-12 row"></div>
      <div className="col-12 col-sm-12 checkbox">
        <input
          id="chk_verifyEmail"
          name="email_verify_required"
          type="checkbox"
          value="true"
          checked={formData.email_verify_required}
          onChange={(e) => setFormData({ ...formData, email_verify_required: e.target.checked })}
        />
        <label for="chk_verifyEmail" className="pl-0">
          <b>Email Verification Required</b>
        </label>
      </div>
    </div>
                </div>
                <div className="model-footer">
                    <div className="text-center">
                        <button type="button" onClick={handleButtonClick} id="btnSbmtUserDetails" className="btn btn-primary me-1">Save </button>
                        <button type="button" className="btn btn-danger evt-org-settings" data-dismiss="modal"><i className="zmdi zmdi-rotate-left">&nbsp;</i>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</>
)
}

export default Users