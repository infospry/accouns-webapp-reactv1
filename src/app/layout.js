// import Script from 'next/script';
import './globals.css'
import '../../public/css/bootstrap.min.css'
import '../../public/css/style.min.css'
import '../../public/css/maininner.css'
import '../../public/css/material-design-iconic-font.css'

//Date range picker

//Date Pair



import { ToastContainer, toast } from './components/ToastContainer';
export default function RootLayout({ children }) {
   
  return (
    <html lang="en">
      <head><title>Agency</title> 
      
      </head>
      
      <body className="theme-blue ">
              {children}
              <ToastContainer />
          
 
    <script src="js/jquery-2.1.4.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous"></script>
    <script src="js/libscripts.bundle.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>
    <script src="js/vendorscripts.bundle.js"></script>
    <script src="js/mainscripts.bundle.js"></script>
    <script src="js/time.js" defer></script>
    <script src="js/custom.js" defer></script>

      </body>
      
    </html>
  )
}
