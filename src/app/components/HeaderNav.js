
import React from 'react';
import Link from "next/link";

const HeaderNav = () => {
  return (

    <>

      <nav className="navbar navbar-expand-xl mb-0 navbar-dark fixed-top">
        <Link className="navbar-brand ms-2 me-3" href="/dashboard"><img src="images/logo.png" alt="logo" /></Link>
        <div className="d_display">
          <div className="dropdown nav-item displinl ">
            <Link href="javascript:void(0);" className="nav-link text-right dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">

              <span className="EmployeeAvatar">A</span></Link>
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
                  <Link className="btn btn-light btn-sm" data-toggle="modal" data-target="#password">Change Password</Link>
                </div>
              </div>
              <div className="user-footer text-center p-1 pb-2 pt-1 d-flex justify-content-center">
                <div>
                  <Link href="/settings" className="btn btn-primary me-2 btn-sm">Profile</Link>
                </div>
                <div>
                  <Link href="/logout" className="btn btn-outline-danger btn-sm">Sign out</Link>
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
            <li className="nav-item active"><Link className="nav-link" href="/dashboard"> <i className='zmdi zmdi-desktop-windows'></i> Dashboard</Link></li>
           
            <li className="nav-item"><Link className="nav-link" href="/">   <i className='zmdi zmdi-graduation-cap'></i> Clients</Link></li>
           <li className="nav-item"><Link className="nav-link" href="/"> <i className='zmdi zmdi-pizza'></i> Expances</Link></li>
            <li className="nav-item"><Link className="nav-link" href="/"><i className='zmdi zmdi-receipt'></i> Invoices</Link></li>
            <li className="nav-item"><Link className="nav-link" href="/"><i className='zmdi zmdi-folder'></i> Projects</Link></li>
            <li className="nav-item"><Link className="nav-link" href="/reports"><i className='zmdi zmdi-trending-up'></i> Reports</Link></li>
            <li className="nav-item"><Link className="nav-link" href="/"><i className='zmdi zmdi-comments'></i> Quotes</Link></li>
            <li className="nav-item"><Link className="nav-link" href="/"><i className='zmdi zmdi-settings'></i> Settings</Link></li>
            <li className="nav-item"><Link className="nav-link" href="/"><i className='zmdi zmdi-accounts-alt'></i> Team</Link></li>
            <li className="nav-item"><Link className="nav-link" href="/"><i className='zmdi zmdi-widgets'></i> Vendor</Link></li>
          </ul>
          <ul className="nav navbar-nav floatmargint">
            <li className="dropdown nav-item displinl ">
              <Link href="javascript:void(0);" className="nav-link text-right dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">

                <span className="EmployeeAvatar">A</span></Link>
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
                    <Link className="btn btn-light btn-sm" data-toggle="modal" data-target="#password">Change Password</Link>
                  </div>
                </div>
                <div className="user-footer text-center p-1 pb-2 pt-1 d-flex justify-content-center">
                  <div>
                    <Link href="/settings" className="btn btn-primary me-2 btn-sm">Profile</Link>
                  </div>
                  <div>
                    <Link href="/logout" className="btn btn-outline-danger btn-sm">Sign out</Link>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item float-right">
              <Link className=" btn btn-primary btn-icon float-right right_icon_toggle_btn" href="#">
                <i className="zmdi zmdi-arrow-right"></i></Link>
            </li>
          </ul>
        </div>
      </nav>

    </>
  )
}
export default HeaderNav;