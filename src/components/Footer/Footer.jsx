import React from 'react'
import "./Footer.css"
import { quickLinks01 } from '../../constants'
const Footer = () => {
  return (
    <footer className="footer">
        <div className="container">
            <div className="footer_wrap">
                <div className="footer_logo">
                    <h2>Unblue.in</h2>
                    <p className="description">Where expectation Meets Quality</p>
                    <p className="small_text description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, quam!</p>
                </div>

                <div className="footer_quick_links">
                    <div className="quick_links_title">Solutions</div>
                    <ul className="quick_links">
                        {
                            quickLinks01.map((item,index)=>(
                                <li className="quick_link_item" key={index}>
                                    <a href={item.path}>{item.display}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer