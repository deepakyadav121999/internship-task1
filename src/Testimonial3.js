import React from 'react';
import './style/Testimonial3.css';
import { MdBusinessCenter } from "react-icons/md";
import { FaLightbulb } from "react-icons/fa";
import { FaPeopleRoof } from "react-icons/fa6";
import { FaHandshake } from "react-icons/fa";

const Testimonial3 = () => {
  return (
    <div className='testimonial3'>
      <div className='abd'></div>
              <div className="inside_testimonial3">
                         <div className='testimonial3_top'>
                            <p>Why do our <span className='spn'>clients</span> choose us?</p>
                         </div>


                         <div className='testimonial_bottom' >
                             <div className='bottom_div1'>
                                <div className='div1_a'>
                                    <MdBusinessCenter size={50} />
                                     <p className='div1_aa'>Verified Users</p>
                                     <p className='div1_ab'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                </div>


                                <div className='div1_b'>
                                <FaLightbulb size={50}/>
                                <p className='div1_aa'>Domain Oriented Expertise</p>
                                <p className='div1_ab'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                </div>
                             </div>



                             <div className='bottom_div2'>
                              <img src="https://s3-alpha-sig.figma.com/img/c9b1/3e27/a805166ddeab5551f4914666684adbf0?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RwqhedjG6GYsVgo6kQeJGuOJSmM0BU-YGu34DqZRoBDWvJigmixfph1yaNMvTJGlojH5gSbCeGvIpwz2ZgDmtbtwLqvpwwAEqQ~MAjBHXGBYj5MpremtfUHLe5zF5kP4tDLriBeSY19ntDFw3CDjPyYcMuxb-Ib6Ypht2CJk5JyA0mD3h4VTQ1GBK2s~~HR3M8BDEbarfAelFnJbHOrZQu4HPBuJWYQOe4x2p1dj8UjVAHYkpCV537Wk5YI5Ig-mlm3DoBrKSHv2n9qRyn0gUhfQPRkE1sISzHLUsl9EMDWB74ckQWPzoHHxA-75S1WGL4vQnhu84-ccBuOf0mKU7g__" alt="" />
                             </div>


                             <div className='bottom_div3'>
                              <div className='div3_a'>
                                 <FaPeopleRoof size={50}/>
                                 <p className='div1_aa'>Expert Management</p>
                                 <p className='div1_ab'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                              </div>


                              <div className='div3_b'>
                                 <FaHandshake size={50}/>
                                 <p className='div1_aa'>Authentic Skill Sets</p>
                                 <p className='div1_ab'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                              </div>
                             </div>
                         </div>
              </div>
        </div>
  )
}

export default Testimonial3