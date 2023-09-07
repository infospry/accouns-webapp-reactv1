
import React from 'react';


const HeaderNav = () => {
  return (

    <>

      <nav className="navbar navbar-expand-xl mb-0 navbar-dark fixed-top">
        <a className="navbar-brand ms-2 me-3" href="#"><img src="images/logo.png" alt="logo" /></a>
        <div className="d_display">
          <div className="dropdown nav-item displinl ">
            <a href="javascript:void(0);" className="nav-link text-right dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">

              <span className="EmployeeAvatar">A</span></a>
            <div className="dropdown-menu p-0 bg-gradient-secondary">             
              <div className="user-header">
                <img className="img-thumbnail rounded-circle profileImgBig" alt="User Image"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ20gNp9VRFxCE1eMrvYwwIxQp_0zOdxL8BSxC5-igPkuZd0iSbxA&s" />

                <p id="header_spanProfilename2" className="profileName">Andrew Garfield</p>
                <small>
                  <p id="header_spanType">Admin</p>
                </small>
              </div>          
              <div className="user-body bg-secondary p-1">
                <div>
                  <a className="btn btn-light btn-sm" data-toggle="modal" data-target="#password">Change Password</a>
                </div>
              </div>
              <div className="user-footer text-center p-1 pb-2 pt-1 d-flex justify-content-center">
                <div>
                  <a href="settings.html" className="btn btn-primary me-2 btn-sm">Profile</a>
                </div>
                <div>
                  <a href="/logout" className="btn btn-outline-danger btn-sm">Sign out</a>
                </div>
              </div>
            </div>
          </div>
          <button className="navbar-toggler me-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className=" btn btn-primary btn-icon float-right right_icon_toggle_btn" href="#">
            <i className="zmdi zmdi-arrow-right"></i></a>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto">
            <li className="nav-item active"><a className="nav-link" href="dashboard.html"> <i className='zmdi zmdi-desktop-windows'></i> Dashboard</a></li>
           
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown" aria-expanded="false">
               <i className='zmdi zmdi-graduation-cap'></i> Clients
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="overview.html">Overview</a>
                <a className="dropdown-item" href="sales.html">All Sales</a>
                <a className="dropdown-item" href="items.html"> Item</a>
                <a className="dropdown-item" href="contacts.html"> Contacts</a>
                <a className="dropdown-item" href="invoices.html"> Invoices</a>
                <a className="dropdown-item" href="Estimates.html"> Estimates</a>
                <a className="dropdown-item" href="expanses.html"> Expanses</a>
                <a className="dropdown-item" href="expanses_category.html"> Expanses Category</a>
                <a className="dropdown-item" href="Currencies.html"> Currencies and Units</a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown" aria-expanded="false">
              <i className='zmdi zmdi-pizza'></i> Expances
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="employes.html">Employee Dashboard</a>
                <a className="dropdown-item" href="employee_list.html">Employee</a>
              </div>
            </li>
            <li className="nav-item"><a className="nav-link" href="sales-pipline.html"><i className='zmdi zmdi-receipt'></i> Invoices</a></li>
            <li className="nav-item"><a className="nav-link" href="projects.html"><i className='zmdi zmdi-folder'></i> Projects</a></li>
            <li className="nav-item"><a className="nav-link" href="reports.html"><i className='zmdi zmdi-trending-up'></i> Reports</a></li>
            <li className="nav-item"><a className="nav-link" href="event_calendar.html"><i className='zmdi zmdi-comments'></i> Quotes</a></li>
            <li className="nav-item"><a className="nav-link" href="settings.html"><i className='zmdi zmdi-settings'></i> Settings</a></li>
            <li className="nav-item"><a className="nav-link" href="activites.html"><i className='zmdi zmdi-accounts-alt'></i> Team</a></li>
            <li className="nav-item"><a className="nav-link" href="activites.html"><i className='zmdi zmdi-widgets'></i> Vendor</a></li>
          </ul>
          <ul className="nav navbar-nav floatmargint">
            <li className="dropdown nav-item displinl ">
              <a href="javascript:void(0);" className="nav-link text-right dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">

                <span className="EmployeeAvatar">A</span></a>
              <div className="dropdown-menu p-0 bg-gradient-secondary">
               
                <div className="user-header">
                  <img className="img-thumbnail rounded-circle profileImgBig" alt="User Image"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ20gNp9VRFxCE1eMrvYwwIxQp_0zOdxL8BSxC5-igPkuZd0iSbxA&s" />

                  <p id="header_spanProfilename2" className="profileName">Andrew Garfield</p>
                  <small>
                    <p id="header_spanType">Admin</p>
                  </small>
                </div>
             
                <div className="user-body bg-secondary p-1">
                  <div>
                    <a className="btn btn-light btn-sm" data-toggle="modal" data-target="#password">Change Password</a>
                  </div>
                </div>
                <div className="user-footer text-center p-1 pb-2 pt-1 d-flex justify-content-center">
                  <div>
                    <a href="settings.html" className="btn btn-primary me-2 btn-sm">Profile</a>
                  </div>
                  <div>
                    <a href="/logout" className="btn btn-outline-danger btn-sm">Sign out</a>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item float-right">
              <a className=" btn btn-primary btn-icon float-right right_icon_toggle_btn" href="#">
                <i className="zmdi zmdi-arrow-right"></i></a>
            </li>
          </ul>
        </div>
      </nav>

    </>
  )
}
export default HeaderNav;