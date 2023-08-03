import Script from 'next/script';
import './globals.css'
import '../app/css/bootstrap.css'
import '../app/css/style.min.css'
import '../app/css/main.css'




export default function RootLayout({ children }) {
   
  return (
    <html lang="en">
      <head><title>Agency</title> 
      
      </head>
      
      <body classname="theme-blue ">{children}
     
              <Script src="/js/jquery-2.1.4.min.js"strategy="beforeInteractive"></Script>              
              <Script src="/js/bootstrap.min.js" strategy="beforeInteractive"></Script>
              <Script src="/js/libscripts.bundle.js"strategy="beforeInteractive"></Script>
              <Script src="/js/vendorscripts.bundle.js"strategy="beforeInteractive"></Script>
              <Script src="/js/mainscripts.bundle.js"strategy="beforeInteractive"></Script> 
              <Script src="/js/custom.js"strategy="beforeInteractive"></Script>
      </body>
      
    </html>
  )
}
