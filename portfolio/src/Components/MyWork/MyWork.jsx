import React from 'react'
import arrow_icon from '../../assets/arrow_icon.svg'
import mywork_data from '../../assets/mywork_data'
import theme_pattern from '../../assets/theme_pattern.svg'
import './MyWork.css'

const MyWork = () => {
    return (
        <div className='mywork'>
            <div className="my-title">
                <h1>My Latest Work</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="my-container">
                {mywork_data.map((work, index) => {
                    return <img key={index} src={work.w_img} alt='' />
                })}
            </div>
            <div className="my-showmore">
                <p>Show More</p>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
    )
}

export default MyWork