import Script from 'next/script';
import './globals.css'
import '../app/css/bootstrap.css'
import '../app/css/style.min.css'
import '../app/css/main.css'



import { ToastContainer, toast } from './components/ToastContainer';
export default function RootLayout({ children }) {
   
  return (
    <html lang="en">
      <head><title>Agency</title> 
      
      </head>
      
      <body classname="theme-blue ">{children}   
      <ToastContainer />
            <script src="js/jquery-2.1.4.min.js"></script>              
            <script src="js/bootstrap.min.js" ></script>
            <script src="js/libscripts.bundle.js"></script>
            <script src="js/vendorscripts.bundle.js"></script>
            <script src="js/mainscripts.bundle.js"></script>               
            <script src="js/custom/jquery.tmpl.js"></script> 
            <script src="js/custom/util.js"></script>
            <script src="js/custom/masters.1.0.0.js"></script>   
            <script src="js/custom.js"></script>          
      </body>
      
    </html>
  )
}
