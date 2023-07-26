
import './globals.css'
import '../app/css/bootstrap.css'
import '../app/css/select2.css'
import '../app/css/style.min.css'
import '../app/css/main.css'



export default function RootLayout({ children }) {
   
  return (
    <html lang="en">
      <head><title>Agency</title> 
      
      </head>
      
      <body id="bdy"  classname="theme-blue right_icon_toggle">{children}
     
              <script src="js/jquery-2.1.4.min.js" defer></script>
              <script src="js/bootstrap.min.js" defer ></script>
              <script src="js/libscripts.bundle.js" defer ></script>
              <script src="js/select2.min.js"defer></script>
              <script src="js/vendorscripts.bundle.js" defer ></script>
              <script src="js/mainscripts.bundle.js" defer ></script>
              <script src="js/custom.js" defer></script>
      </body>
      
    </html>
  )
}
