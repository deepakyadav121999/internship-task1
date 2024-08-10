import React from 'react'
import './style/Testimonial.css';
import hireme from './hireme.png'
const Tesimonial = () => {
  return (
    <>
   <div className='testimonial_one'>
      <div className='testimonial_one_img'>
        <img src="https://s3-alpha-sig.figma.com/img/c206/4d39/49dbe3f438f79bdef04e048572a7b6ec?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G-53v7M3DTy3Onw3FET4U9MDazmDm9n48LHLixFWDq8CNwHIoDa2S28HrEmjYqDB~836~3UVH8ENWl-iYeEPt1kOpfDGj9P9HJ~Gd7FN28sqb4ikExxVin1h1KGf1zlru8TuPqLQTSLrcEa7hTH8LDP6VYf1w46wBlQC2A0-uWglaHu0JyzHgqg0bBgZyXsbcsLCh~hFk0J1fO27WrJevWGuZgTEMHHVPzs4y~ny7kbJ2C4~CZib4Cj0xu~OBRe3k6~hk6tTQeSXrA0NWJzp0cfYwfOVP~lh5B2BhdU1IgcB-k3D8PRE2PK-2GQ-SBvHlPMEh92jd6vOppbgBgZcKA__" alt="" />
      </div>

      <div className='testimonial_one_right'>
         <div className='one_right_p1'>
             
             <p className='or_last'>For College Student</p>
         </div>
          <div className='one_right_p2'>
          <p className='or2_first'><span>Assisting</span> Individuals</p>
          <p className='or2_last'>Discover opportunities for jobs, internships, and mentorship under one roof. Connect with skilled professionals to foster mutual success in your career journey.</p>
          </div>
         
         <p className='pr_3'>Learn more</p>
      </div>
   </div>



  <div className='testimonial_two'>
     <div className='testimonial_two_left'>
        <div className='t2_one'>
          <p>For B2B</p>
        </div>

        <div className='t2_two'>
          <p className='t2_two_first'><span>Empowering </span>Businesses</p>
          <p className='t2_two_last'>Hiremi enhances B2B operations with expert project management and streamlined recruitment outsourcing, optimizing resources for strategic business growth.</p>
          <p className='t3_three'> Learn more</p>
        
         
        </div>
     </div>

     <div className='testimonial_two_right'>
      <img src="https://s3-alpha-sig.figma.com/img/5e96/a152/aa77fb9651154d711cd0ee3128311b4c?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TCjYj02PkDWwx5ue~W1hQkhnCXQp2Q5X38ykJtSn8I7A40xfqzMUiVZhce0cFoOlqEHBOKEAE0FEnio~NoVSuJaSMawLZsAI3CmrNiJY0uCWVdYK9ju-yuIMSccdkGzsoIQvrY5Vtt8zxAc3yRifIHdl186T84wVL3dxZu96U1V9RpDZyl4wLwR90cJzCRSVVeaJMU17AAbYLe9N~nZU3F-XDZ5QsjlXwVzrvk2v0W8~jQWdR-Qdf9VVnmXpPRYCfisGo060fPQtq17ri~eyaMx5NM8mW66LX-NYCtOk2-atJGgjSFOE3r9X7v5lsfhKmR4UUJuq6FWz22NYMsn6jg__" alt="" />
     </div>


    
  </div>


   <div className='testimonial_three'>
     <div className='testimonial_three_img'>
 <img src={hireme} alt="" />
     </div>


     <div className='testimonial_three_content'>
      <p className='t3_first'>Our Eco-System Towards</p>
      <div className='t3_para'>
        <p className='t3_para1'>Business Efficiency & <span>Growth</span></p>
        <p className='t3_para2'> <span>Hiremi</span> enhances business efficiency with expert project management and <span>recruitment outsourcing</span> . We secure top talent, support development through jobs and mentorship, and ensure <span>sustainable growth</span> , fostering a skilled workforce and successful partnerships.</p>
        <p className='t3_para3'>Learn more</p>
      </div>
     </div>
   </div>

    </>
  )
}

export default Tesimonial