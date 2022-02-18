import React,{useState} from 'react'
import Element from './Element';




export default function Portfolio(props) {
    // on_Go=()=>{



    // }
    const [value, setValue] = useState(1);
    const articles=
  [
    {
        web_link: "https://texteditor-19c82.firebaseapp.com/",
        heading: "TextEDITOR",
        Discription:"Used HTML,CSS and JavaScript framework like React to develop a text editor which is used to change the case of given text.",
        img_link:"https://i.ibb.co/r4knjRN/text.png"
        },
        {
            web_link: "https://us-news-aa27f.web.app/",
            heading: "INDIA@NEWS",
            Discription:"This project shows latest news of INDIA by fetching data using api .In this Project the Tech Stack used is React, Bootstrap, and Firebase.",
        img_link:"https://i.ibb.co/ftQWr2V/Untitled.jpg"
            },
            {
                web_link: "https://helix12.web.app/",
                heading: "Helix",
                Discription:"Pitched a business idea related to ISP market in India at Innovathon’21",
            img_link:"https://i.ibb.co/9WWVyw5/Screenshot-2021-11-08-074503.jpg"
                },
                {
                    web_link: "https://github.com/shubhamkharbanda/Notify",
                heading: "Notify",
                Discription:"Developed this project using javascript framework react and connected it to backend created in nodejs through express server. In this webapp users can signup,login and store their notes on the cloud safely .The database used here is MongoDB with all the CRUD functionalities.",
            img_link:"https://i.ibb.co/QPczxgd/NOTIFY.png"
            


                }
  ]
  const [Articles, setArticles] = useState(articles)

    return (
        <>
        
        <div  id={props.id} style={{backgroundColor:"#9c8989"}}>
        <h1 className="text-center"><b>Portfolio</b></h1>
            <br/>
            <br/>
            <br/>
            
            <div style={{display:"flex",flexWrap:"wrap"}}> 
            
  {
    Articles.map((element)=>{
return(
      <Element img={element.img_link} title={element.heading} discription={element.Discription} heading={element.heading} link={element.web_link}/>
)

    })
  }
  
       
        </div>

        

        </div>
        
        </>
    )
}
