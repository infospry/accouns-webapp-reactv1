"use client"
import React from 'react';
import Link from "next/link";
import Image from 'next/image';
import logo from '../images/logo.png';
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { getCookie } from 'cookies-next';
import MdlPasswordSetting from '../model/MdlPasswordSetting';
import { deleteCookie } from 'cookies-next';

const HeaderNav = () => {
  const router = useRouter();
  const [initial, setinitial] = useState(1)
  const [menus, setMenus] = useState([]);
  const [sign_inInfo, setSign_inInfo] = useState();

  useEffect(() => {
      if (initial === 1) {
          setinitial(2);
          var checkCookies = ns_util.checkCookie(ns_util.loginCookieName);
        
          if((getCookie('signin_token') ==="") ||(getCookie('signin_token') ===undefined)) {
              router.push("/")
            }
          else {                
                var localStorageData = JSON.parse(localStorage.getItem(ns_util.navLocalStorageName));
                if (localStorageData !== undefined) {
                    setMenus(localStorageData.response[1].modules);
                    setSign_inInfo(localStorageData.response[0].signin_info[0]);
                }
              if (localStorageData !== undefined) {
                  setMenus(localStorageData.response[1].modules);
                  setSign_inInfo(localStorageData.response[0].signin_info[0]);
              }           
          }
      }
  })

  const signout=()=>{
      ns_util.expireCookie(ns_util.loginCookieName);
     // setCookie(ns_util.loginCookieName, nCookie, 1)
      deleteCookie(ns_util.loginCookieName);
      router.push("/login");
  }
  return (

    <>

      <nav className="navbar navbar-expand-xl mb-0 navbar-dark fixed-top">
        <Link className="navbar-brand ms-2 me-3" href="/dashboard"><Image src={logo} alt="logo" style={{height:"30px"}} /></Link>
        <div className="d_display">
        {sign_inInfo !== undefined?<>
          <div className="dropdown nav-item displinl ">
            <a href={{ void: 0 }} className="nav-link text-right dropdown-toggle me-1" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              <span className="EmployeeAvatar">{sign_inInfo.org_user_type}</span></a>
            <div className="dropdown-menu p-0 bg-gradient-secondary">             
              <div className="user-header">
                <img className="img-thumbnail rounded-circle profileImgBig" alt="User Image"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ20gNp9VRFxCE1eMrvYwwIxQp_0zOdxL8BSxC5-igPkuZd0iSbxA&s" />
                <p id="header_spanProfilename2" className="profileName">{sign_inInfo.user_name}</p>
                <small>
                    <p id="header_spanType">{sign_inInfo.org_user_type==="SA"?'Super Admin':sign_inInfo.org_user_type==="A"?'Admin':'User'} </p>
                </small>
              </div>
                     
              <div className="user-body bg-secondary p-1 text-center">
                  <div>
                      <a className="btn btn-light btn-sm" data-bs-toggle="modal" data-bs-target="#password">Change Password</a>
                  </div>
              </div>
              <div className="user-footer text-center p-1 pb-2 pt-1 d-flex justify-content-center">
                  <div  className="me-2">
                      <Link href={"/settings"}className="btn btn-primary me-2 btn-sm">Profile
                      </Link>
                  </div>
                  <div>
                      <button onClick={signout} className="btn btn-outline-danger btn-sm  ms-1">Sign out</button>
                  </div>
              </div>  
            </div>
          </div>   
                      </>:<></>
                    }
          
          <button className="navbar-toggler me-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>          
          <button className=" btn btn-primary btn-icon right_icon_toggle_btn" id="add--btn"><i className="zmdi zmdi-arrow-right"></i></button>  
          <button className=" btn btn-primary btn-icon float-right right_icon_toggle_btn" id="remove--btn"><i className="zmdi zmdi-arrow-left"></i></button>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    {menus && menus.map((menu, i) => (
                        <li key={i} className={"nav-item " + menu.sub_modules !== "" ? "dropdown" : ""}>
                            {menu.sub_modules === "" ?
                                <Link href={"/" + ns_util.toLowerCase(menu.module_route)} className="nav-link">{menu.module_name}</Link>
                                : <>
                                    <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-bs-toggle="dropdown" aria-expanded="false">
                                        {menu.module_name}
                                    </a>
                                    <div className="dropdown-menu">
                                        {menu.sub_modules && menu.sub_modules.map((submenu, j) => (
                                            <Link key={j} href={"/" + ns_util.toLowerCase(submenu.module_route)}  className="dropdown-item" >{submenu.module_name}</Link>
                                        ))}
                                    </div>
                                </>}
                        </li>
                    ))}
                </ul>
                <ul className="nav navbar-nav floatmargint lg_none">
                    {sign_inInfo !== undefined?<>
                      <li className="dropdown nav-item displinl ">
                          <a href="#" className="nav-link text-right dropdown-toggle" type="button" 
                          data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                          <span className="float-left lngth font-13 me-2">
                              <b>{sign_inInfo.user_name}</b><br/>
                              <span className="font-12">{sign_inInfo.user_email !== undefined ? sign_inInfo.user_email :""}</span>
                          </span>
                              <span className="EmployeeAvatar">{sign_inInfo.org_user_type}</span></a>
                          <div className="dropdown-menu p-0 bg-gradient-secondary">
                              <div className="user-header">
                                  <img className="img-thumbnail rounded-circle profileImgBig" alt="User Image"
                                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ20gNp9VRFxCE1eMrvYwwIxQp_0zOdxL8BSxC5-igPkuZd0iSbxA&s" />

                                      <p id="header_spanProfilename2" className="profileName">{sign_inInfo.user_name}</p>
                              
                                  <small>
                                      <p id="header_spanType">{sign_inInfo.org_user_type==="SA"?'Super Admin':sign_inInfo.org_user_type==="A"?'Admin':'User'}</p>
                                  </small>
                              </div>
                              <div className="user-body bg-secondary p-1 text-center">
                                  <div>
                                      <a className="btn btn-light btn-sm" data-bs-toggle="modal" data-bs-target="#password">Change Password</a>
                                  </div>
                              </div>
                              <div className="user-footer text-center p-1 pb-2 pt-1 d-flex justify-content-center">
                                  <div>
                                      <Link href={"/settings"}className="btn btn-primary me-2 btn-sm">Profile
                                      </Link>
                                  </div>
                                  <div>
                                      <button onClick={signout} className="btn btn-outline-danger btn-sm">Sign out</button>
                                  </div>
                              </div>
                          </div>
                      </li>
                      <li className="nav-item float-right">
                        <button className=" btn btn-primary btn-icon right_icon_toggle_btn" id="add-btn"><i className="zmdi zmdi-arrow-right"></i></button>  
                        <button className=" btn btn-primary btn-icon float-right right_icon_toggle_btn" id="remove-btn"><i className="zmdi zmdi-arrow-left"></i></button>              
                      </li>
                      </>:<></>
                    }
                </ul>
        </div>
      </nav>
      <div className="navbar-right mt60">
        <ul className="navbar-nav">
            <li className="dropdown">
                <a href={{ void: 0 }} className="dropdown-toggle" title="Notifications" data-toggle="dropdown" role="button">
                    <i className="zmdi zmdi-notifications"></i>                   
                </a>
                <ul className="dropdown-menu slideUp2">
                    <li className="header">Notifications</li>
                    <li className="body">
                        <ul className="menu list-unstyled">
                            <li>
                                <Link href="#">
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
                                <Link href="#">
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
                                <Link href="#">
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
                                <Link href="#">
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
                                <Link href="#">
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
                <Link className="mega-menu" href="/settings">
                    <i className="zmdi zmdi-settings zmdi-hc-spin"></i>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="mega-menu"href="#">
                    <i className="zmdi zmdi-email-open"></i>
                </Link>
            </li>      
            
            <li>
                {/*  <Link href="/login" onClick={signout} className="mega-menu" title="Sign Out">
                    <i className="zmdi zmdi-power"></i>
                      </Link> */}
                       <button onClick={signout} className="mega-menu" title="Sign Out">  <i className="zmdi zmdi-power"></i></button>
            </li>
        </ul>
    </div>
    <MdlPasswordSetting />
    </>
  )
}
export default HeaderNav;