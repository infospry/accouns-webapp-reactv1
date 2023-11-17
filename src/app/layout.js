import Script from 'next/script';
import '../../public/css/bootstrap.min.css'
import '../../public/css/style.min.css'
import '../../public/css/material-design-iconic-font.css'

import React from 'react';

import { ToastContainer, toast } from './components/ToastContainer';
export default function RootLayout({ children }) {
   
  return (
    <html lang="en">
     <head>
     {/* <link rel="stylesheet" href="/css/bootstrap.min.css" />
     <link rel="stylesheet" href="/css/style.min.css" /> */}
        <link  rel="stylesheet"  href="/css/maininner.css"  />
        <link  rel="stylesheet"  href="/css/jquery.toast.css" /> 
        <link  rel="stylesheet"  href="/css/summernote.css"/>
        <link  rel="stylesheet"  href="/css/timepicker.css"/>
        <link  rel="stylesheet"  href="/css/jquery-ui.min.css"/>
        <link  rel="stylesheet"  href="/css/daterangepicker.css"/>
        <title>Leads</title>                                           
    </head>      
    <body className="theme-blue"id="box">
      {children}
      <script async src="js/jquery-3.7.1.min.js"></script>
      <script async src="js/time.js"></script>  
      <script async src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
        <script async src="js/timepicker.js"></script>
        <script async src="js/jquery.toast.js"></script>
        <script async src="js/moment.min.js"></script>
        <script async src="js/daterangepicker.js"></script>
        <script async src="js/summernote.js"></script>

      <Script async src="js/bootstrap.bundle.min.js"></Script>
      <Script async src="js/custom.js"strategy='lazyOnload'></Script>   
      <script async src="js/utils/newCustom.js" strategy='lazyOnload'></script>
      <script async src="js/utils/utility.js" strategy=''></script>
      <script async src="js/utils/events.js" strategy='lazyOnload'></script>
      <script async src="js/utils/account.js" strategy='lazyOnload'></script>
      <ToastContainer />
      
    </body>
      
    </html>
  )
}
