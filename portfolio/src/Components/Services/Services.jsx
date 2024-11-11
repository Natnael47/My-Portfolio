import React from 'react'
import arrow_icon from '../../assets/arrow_icon.svg'
import Services_Data from '../../assets/services_data'
import theme_pattern from '../../assets/theme_pattern.svg'
import './Services.css'

const Services = () => {
    return (
        <div className='services'>
            <div className="ser-title">
                <h1>My Services</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="ser-container">
                {Services_Data.map((service, index) => {
                    return (
                        <div key={index} className="ser-format">
                            <h3>{service.s_no}</h3>
                            <h2>{service.s_name}</h2>
                            <p>{service.s_desc}</p>
                            <div className="ser-readmore">
                                <p>Read More</p>
                                <img src={arrow_icon} alt="" />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Services