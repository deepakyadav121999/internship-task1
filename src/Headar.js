import React from 'react'
import './style/Headar.css'
const Headar = () => {
  return (
    <div className='headar'>
        <div className='headar_one'>
           <img  src="https://s3-alpha-sig.figma.com/img/62db/d892/925782157f58608f73147a4cc397dd15?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZAZouevxQOq9DleXpofUAUxBgJ2~fU9p3qb0ZWrF-gsq-wt1hcCWBqopQULeByNPFeL06ogrr1bRjL3LCc3yNcIVp1Ro1sKjg6BHI6QIosZdX1whe4vj2SW0pFxVwXWXp3OSiqGWcq57z7czcwKCxyH59z~Kq6-XoDMxa2OxjT1iY6yUQTjr3iAWyanWXXLqPLUYbasg5m-6IfCLMqWCYP4EM0xpZvTErBhL8~Oa9kvWgR~itvmvrMAW~7Zzzw61SLM9umdfzbN59j25jz32jZFpB3FEjNg3WMvtBzGJyAGMVqzmYYXeWdSe-nrdOyqNQSAe40hO3bSav62a1yAFBg__" alt="logo" /> 
        </div>

        <div className='headar_two'>
            <p>Services</p>
            <p>Careers</p>
            <p>AboutUs</p>
            <p>ContactUs</p>
        </div>

        <div className='headar_three'>
            <button>
                Our App
            </button>
        </div>

    </div>
  )
}

export default Headar