"use client"
import React from 'react'
function Messages({ res = [] }) {

    const DynamicHTMLComponent = (prop) => (
        <div dangerouslySetInnerHTML={{ __html: JSON.stringify(prop.msg) }} />
    );
  return (
    <>

    
          <div className='messages-container mx-3'>
              
        {res && res.length > 0 && res[1].msg_info != "" ? res && res.length > 0 && res[1].msg_info.map((msg, i) => (
                            
        <a key={i} className="message-wrapper border-bottom p-3">
            <div className='thumbnail me-3'>
             { msg.user_name.slice(0,1)}
            </div>
            <div className='name h5 m-0'>
           <b>FROM: </b> { msg.user_name}
                </div>
                  <div className='name h5 m-0'>
          
                </div>
                
            <div className='ago-time'>
             { msg.create_datetime}
                </div>
                 <div className='message-text'>
                 <b>To: </b>   { msg.message_to}
                </div>
                
                 <div className='message-text'>
                 <b>Message type: </b>   {msg.message_type}
                </div>
                 <div className='message-text'>
                 <b>Subject: </b>   {msg.subject}
                </div>
                
            <div className='message-text mt-2'>
                <DynamicHTMLComponent msg={msg.message} />
               
            </div>
            <div className='delete-btn'>
            <span className='material-icons-round'>delete</span>
            </div>
            </a> 
         ))
                        : <div className="text-center pt-4">
                            <span className="spanNoDataFound" style={{ color: "red" }}>No notes found!</span><br />
                        </div>
                    }    
    </div>
    </>
  )
}

export default Messages
