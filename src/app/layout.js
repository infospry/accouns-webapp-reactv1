import Script from 'next/script';
 import '../../public/css/bootstrap.min.css'
import '../../public/css/style.min.css'
// import '../../public/css/maininner.css'
import '../../public/css/material-design-iconic-font.css'
import React from 'react';

import { ToastContainer, toast } from './components/ToastContainer';
export default function RootLayout({ children }) {
   
  return (
    <html lang="en">
     <head>
     {/* <link rel="stylesheet" href="/css/bootstrap.min.css" />
     <link rel="stylesheet" href="/css/style.min.css" /> */}
        <link rel="stylesheet" href="/css/maininner.css" />
        <title>Agency</title>                                           
    </head>      
    <body className="theme-blue"id="box">
      {children}
      <script src="js/jquery-3.7.1.min.js"></script>
      <script src="js/time.js"></script>   
      <Script src="js/bootstrap.bundle.min.js"></Script>
      <Script src="js/custom.js"strategy='lazyOnload'></Script>   
      <script src="js/utils/newCustom.js" strategy='lazyOnload'></script>
      <script src="js/utils/utility.js" strategy='lazyOnload'></script>
      <script src="js/utils/events.js" strategy='lazyOnload'></script>
      <script src="js/utils/account.js" strategy='lazyOnload'></script>
      <ToastContainer />
      
    </body>
      
    </html>
  )
}
