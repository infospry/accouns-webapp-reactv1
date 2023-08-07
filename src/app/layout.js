import Script from 'next/script';
import './globals.css'
import '../app/css/bootstrap.css'
import '../app/css/jquery.toast.css'

//Date range picker
import '../app/css/daterangepicker.css'
//Date Pair
import '../app/css/jquery.timepicker.css'
import '../app/css/bootstrap-datepicker.css'

import '../app/css/style.min.css'
import '../app/css/main.css'
import '../app/css/calendarV3.css'



import { ToastContainer, toast } from './components/ToastContainer';
export default function RootLayout({ children }) {
   
  return (
    <html lang="en">
      <head><title>Agency</title> 
      
      </head>
      
      <body classname="theme-blue ">
              {children}
     
              <script src="js/jquery-2.1.4.min.js"></script>              
              <script src="js/bootstrap.min.js" ></script>
              <script src="js/libscripts.bundle.js"></script>
              <script src="js/vendorscripts.bundle.js"></script>
              <script src="js/mainscripts.bundle.js"></script> 
              <script src="js/custom.js"></script>
              <script src="js/jquery.toast.min.js"></script> 
              <script src="js/jquery.toast.js"></script> 
              <script src="js/custom/jquery.tmpl.js"></script>   
              {/* <script src="js/custom/util.js"></script> */}
              <script src="js/custom/masters.1.0.0.js"></script>   

              <script src="js/moment.js"></script>   
              <script src="js/daterangepicker.js"></script>   
              <script src="js/custom-date-range.js"></script>   

              <script src="js/bootstrap-datepicker.js"></script>  
              <script src="js/jquery.timepicker.js"></script>  
              <script src="js/datepair.js"></script>  
              <script src="js/jquery.datepair.js"></script>  
              <script src="js/custom/calendarV3.js"></script>                                     
      </body>
      
    </html>
  )
}
