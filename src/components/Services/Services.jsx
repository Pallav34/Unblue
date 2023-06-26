import React from 'react'
import "./Services.css"
import { serviceData } from '../../constants'
const Services = () => {
  return (
    <section id="services">
        <div className="container">
            <div className="services_top_content">
                <h6 className='title'>Our Services</h6>
                <h2>Save time mangaing your business with</h2>
                <h2 className="highlight">Our Best Services</h2>
            </div>

            <div className="service_item_wrapper">
                {
                    serviceData.map((item,index)=>(
                        <div className="service_item" key={index}>
                    <span className="service_icon">
                    <i class={item.icon}></i>
                    </span>
                    <h3 className="service_title text-gradient">{item.title}</h3>
                    <p className="description">{item.des}</p>

                </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Services