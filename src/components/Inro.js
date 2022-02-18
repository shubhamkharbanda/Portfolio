import React from 'react'
import Apc from './Apc'
import Portfolio from './Portfolio'

export default function Inro() {
    return (<>
        <div style={{display:"flex"}}>
            <div  style={{display:'flex',justifyContent:'center',flexWrap:"wrap"}}>
            <img className="imga float my-4" src="https://media-exp1.licdn.com/dms/image/C4E03AQFMQ_grhSbO7Q/profile-displayphoto-shrink_800_800/0/1616691465807?e=1646870400&v=beta&t=ao3es17KktCqSkvoF-qrXC3i0G3lR_F9YvVpm5BQ0G4" width= "35%"
  height="auto" ></img>
  <div style={{display:'flex',flexDirection:"column",margin:"10vw",flexWrap:"wrap"}}>
            
            <div ><h1><b>Hi There, I'm</b></h1> </div>
          

            
            <div ><h1><b>Shubham Kharbanda</b></h1></div>
            <Apc/>
            </div>
           
            
            
            
            </div>

        </div>
        
        
        <span className="container  mx-5 ">
            
        </span>
        
        </>
    )
}
