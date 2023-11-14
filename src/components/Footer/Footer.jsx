import React from 'react'
import founder from './founder.jpg'
import { AiFillGithub, AiFillTwitterCircle, AiFillYoutube, AiOutlineArrowUp } from 'react-icons/ai'
const Footer = () => {
   
    
  return (
    <footer>
       
        <div>
        
            <img src={founder}  alt="founder" />
           <h2>Pratik Guha</h2>
           <p>Yo Whatsapp ,welcome to my protofolio website</p>
        </div>
        <aside>
            <h2>Social Media</h2>
            <article>
                <a href={"https://github.com/PratikGuha"} target={'blank'}>

                    <AiFillGithub/> 
                </a>
                <a href={"https://twitter.com/PratikGuha9382"} target={'blank'}>

                    <AiFillTwitterCircle/> 
                </a>
                <a href={"https://youtube.com/playlist?list=PL8BAn8peeijA0YnPVuZwGbHRt-gCVmeU8&si=PWFK3npHeg6_XOob"} target={'blank'}>

                    <AiFillYoutube/> 
                </a>
            </article>
        </aside>
       
        <a href="#home" >
        <AiOutlineArrowUp />
        </a>
      
    
    </footer>
  )
}

export default Footer