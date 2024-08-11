import React from 'react'
import './style/Footer2.css';
import { IoMdCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer2 = () => {
  return (
    <div className='footer2'>
        <div className='footer2_top'>
        <div className='f2_a'>
            <img src="https://s3-alpha-sig.figma.com/img/62db/d892/925782157f58608f73147a4cc397dd15?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZAZouevxQOq9DleXpofUAUxBgJ2~fU9p3qb0ZWrF-gsq-wt1hcCWBqopQULeByNPFeL06ogrr1bRjL3LCc3yNcIVp1Ro1sKjg6BHI6QIosZdX1whe4vj2SW0pFxVwXWXp3OSiqGWcq57z7czcwKCxyH59z~Kq6-XoDMxa2OxjT1iY6yUQTjr3iAWyanWXXLqPLUYbasg5m-6IfCLMqWCYP4EM0xpZvTErBhL8~Oa9kvWgR~itvmvrMAW~7Zzzw61SLM9umdfzbN59j25jz32jZFpB3FEjNg3WMvtBzGJyAGMVqzmYYXeWdSe-nrdOyqNQSAe40hO3bSav62a1yAFBg__" alt="" />
              <div className='f22'>
                <IoMdCall/>
                  <p>+919340948981</p>
              </div>
              <div className='f22'>
                <IoMdMail/>
                   <p>deepak@gmail.com</p>
              </div>
        </div>
        <div className='f2_b'>
            <p className='f2b_p1'>For Individuals</p>
            <p className='f2b_p2'>Job & internship Opportunity</p>
            <p className='f2b_p3'>Applicant Monitoring Services</p>
            <p className='f2b_p4'>Mentorship</p>
           
        </div>
        <div className='f2_c'>
        <p className='f2b_p1'>For Businesses</p>
            <p className='f2b_p2'>Recruitment Outsourcing</p>
            <p className='f2b_p3'>Project Oversight</p>
           
        </div>
        <div className='f2_d'>
        <p className='f2b_p1'>For Colleges</p>
            <p className='f2b_p2'>Recruitment Drive Services</p>
            <p className='f2b_p3'>Educational Talks and guest lectures</p>
            
        </div>
        <div className='f2_e'>
        <p className='f2b_p1'>Company</p>
            <p className='f2b_p2'>Contact Us</p>
            <p className='f2b_p3'>Privacy Policy</p>
            <p className='f2b_p4'>Terms & Conditions</p>
        </div>
        <div className='f2_f'>
        <p className='f2b_p1'>Help</p>
            <p className='f2b_p2'>Recruitment Drive Services</p>
            <p className='f2b_p3'>Educational Talks and guest lectures</p>
            
        </div>
        </div>

        <div className='footer2_bottom'>
            <div className="bt_left">
                <p className='copy'>Copyright  © 2023 -Hiremi</p>
            </div>
            <div className="bt_right">
           <FaInstagram size={26}/>
           <FaLinkedin size={26}/>
           <IoMdMail size={26}/>
           
            </div>
        </div>
    </div>
  )
}

export default Footer2