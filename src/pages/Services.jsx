import React from 'react'

import { IoLogoJavascript } from "react-icons/io";
import { MdOutlineCss } from "react-icons/md";
import { FaSass } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { MdOutlineHtml } from "react-icons/md";
import { FaNodeJs } from "react-icons/fa"; 
import { SiGulp } from "react-icons/si"; 

const Services = () => {
    return (
        <>
            <div className="home-container">
                <div className='services-page'>
                    <h1 className="header-text">Services</h1>
                    <div className='page-content'>
                        
                        <div className='skills'>
                            <p>I specialize in modern web technologies, including HTML, JavaScript, and CSS, ensuring clean and structured code. I enhance styling with Sass for maintainability and use React to build dynamic, interactive user interfaces. For workflow automation, I utilize Gulp, and for backend development, I work with Node.js to create scalable web applications.</p>
                            <ul>
                                <li>Frontend Development</li>
                                <li>Backend Development</li>
                                <li>UX Design & Research</li>
                            </ul>
                            
                        </div>

                        <div className="icons">
                            <MdOutlineHtml />
                            <IoLogoJavascript />
                            <MdOutlineCss />
                            <FaSass />
                            <FaReact />
                            <SiGulp />
                            <FaNodeJs />
                        </div>
                    </div>
                </div>
            </div>
        </>
      )
}

export default Services
