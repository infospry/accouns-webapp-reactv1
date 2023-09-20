"use client"
import React from 'react';
import Link from "next/link";

const HeaderNav = () => {

  return (

    <>

      <nav className="navbar navbar-expand-xl mb-0 navbar-dark fixed-top">
        <Link className="navbar-brand ms-2 me-3" href="/dashboard"><img src="images/logo.png" alt="logo" /></Link>
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
                <div className='text-center'>
                  <a className="btn btn-light btn-sm" data-toggle="modal" data-target="#password">Change Password</a>
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
          <a className=" btn btn-primary btn-icon float-right right_icon_toggle_btn" href="javascript:void(0);">
            <i className="zmdi zmdi-arrow-right"></i></a>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto">
            <li className="nav-item"><Link className="nav-link" href="/dashboard"> <i className='zmdi zmdi-desktop-windows'></i> Dashboard</Link></li>
            <li className="nav-item"><Link href="/clients" className="nav-link"><i className='zmdi zmdi-graduation-cap'></i> Clients</Link></li>
            <li className="nav-item"><Link href="/expenses" className="nav-link"><i className='zmdi zmdi-pizza'></i> Expences</Link></li>            
            <li className="nav-item"><Link href="/invoices" className="nav-link"><i className='zmdi zmdi-receipt'></i> Invoices</Link></li>
            <li className="nav-item"><Link href="/" className="nav-link"><i className='zmdi zmdi-folder'></i> Projects</Link></li>
            <li className="nav-item"><Link href="/reports" className="nav-link"><i className='zmdi zmdi-trending-up'></i> Reports</Link></li>
            <li className="nav-item"><Link href="/" className="nav-link"><i className='zmdi zmdi-comments'></i> Quotes</Link></li>            
            <li className="nav-item"><Link href="/team" className="nav-link"><i className='zmdi zmdi-accounts-alt'></i> Team</Link></li>
            <li className="nav-item"><Link href="/vendor" className="nav-link" ><i className='zmdi zmdi-widgets'></i> Vendor</Link></li>
            <li className="nav-item"><Link href="/settings" className="nav-link"><i className='zmdi zmdi-settings'></i> Settings</Link></li>
          </ul>
          <ul className="nav navbar-nav floatmargint lg_none">
            <li className="dropdown nav-item displinl ">
              <a href="javascript:void(0);"className="nav-link text-right dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                  <span className="EmployeeAvatar">A</span>
              </a>
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
                    <Link href="/"  className="btn btn-primary me-2 btn-sm">Profile</Link>
                  </div>
                  <div>
                    <Link  href="/logout" className="btn btn-outline-danger btn-sm">Sign out</Link>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item float-right">
              <a className=" btn btn-primary btn-icon float-right right_icon_toggle_btn" href="javascript:void(0);">
                <i className="zmdi zmdi-arrow-right"></i></a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="navbar-right mt60">
        <ul className="navbar-nav">
            <li className="dropdown">
                <a href="javascript:void(0);" className="dropdown-toggle" title="Notifications" data-toggle="dropdown" role="button">
                    <i className="zmdi zmdi-notifications"></i>                   
                </a>
                <ul className="dropdown-menu slideUp2">
                    <li className="header">Notifications</li>
                    <li className="body">
                        <ul className="menu list-unstyled">
                            <li>
                                <Link href="/">
                                    <div className="icon-circle bg-blue">
                                        <i className="zmdi zmdi-account"></i>
                                    </div>
                                    <div className="menu-info">
                                        <h4>8 New Members joined</h4>
                                        <p>
                                            <i className="zmdi zmdi-time"></i> 14 mins ago </p>
                                    </div>
                                </Link>
                            </li>
                            
                            <li>
                                <Link href="/">
                                    <div className="icon-circle bg-red">
                                        <i className="zmdi zmdi-delete"></i>
                                    </div>
                                    <div className="menu-info">
                                        <h4>
                                            <b>Nancy Doe</b> Deleted account</h4>
                                        <p>
                                            <i className="zmdi zmdi-time"></i> 3 hours ago </p>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <div className="icon-circle bg-green">
                                        <i className="zmdi zmdi-edit"></i>
                                    </div>
                                    <div className="menu-info">
                                        <h4>
                                            <b>Nancy</b> Changed name</h4>
                                        <p>
                                            <i className="zmdi zmdi-time"></i> 2 hours ago </p>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <div className="icon-circle bg-grey">
                                        <i className="zmdi zmdi-comment-text"></i>
                                    </div>
                                    <div className="menu-info">
                                        <h4>
                                            <b>John</b> Commented your post</h4>
                                        <p>
                                            <i className="zmdi zmdi-time"></i> 4 hours ago </p>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <div className="icon-circle bg-purple">
                                        <i className="zmdi zmdi-refresh"></i>
                                    </div>
                                    <div className="menu-info">
                                        <h4>
                                            <b>John</b> Updated status</h4>
                                        <p>
                                            <i className="zmdi zmdi-time"></i> 3 hours ago </p>
                                    </div>
                                </Link>
                            </li>
                           
                        </ul>
                    </li>
                    <li className="footer">
                        <Link href="/">View All Notifications</Link>
                    </li>
                </ul>
            </li>
            <li className="nav-item">
                <Link className="mega-menu" href="/setting">
                    <i className="zmdi zmdi-settings zmdi-hc-spin"></i>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="mega-menu"href="/">
                    <i className="zmdi zmdi-email-open"></i>
                </Link>
            </li>      
            
            <li>
                <Link href="/sign-in" className="mega-menu" title="Sign Out">
                    <i className="zmdi zmdi-power"></i>
                </Link>
            </li>
        </ul>
    </div>
    </>
  )
}
export default HeaderNav;