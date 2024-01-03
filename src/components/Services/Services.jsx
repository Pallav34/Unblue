import React, { useState } from 'react'
import "./Services.css"
import { serviceData } from '../../constants'
const Services = () => {
    const [showFullText, setShowFullText] = useState([]);

  const toggleShowFullText = (index) => {
    setShowFullText((prevShowFullText) => {
      const updatedShowFullText = [...prevShowFullText];
      updatedShowFullText[index] = !updatedShowFullText[index];
      return updatedShowFullText;
    });
  };
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
                    {/* <p className="description">{item.lessdes}</p>
                </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Services */}

             {showFullText[index] || item.lessdes.length <= 150 ? (
                <p className="description">{item.lessdes}</p>
              ) : (
                <>
                  <p className="description">
                    {item.lessdes.slice(0, 150)}
                    <span className="read_more_ellipsis">...</span>
                  </p>
                  <button
                    className="read_more_button"
                    onClick={() => toggleShowFullText(index)}
                  >
                    {showFullText[index] ? 'Read Less' : 'Read More'}
                  </button>
                </>
              )}
              {showFullText[index] && item.lessdes.length > 150 && (
                <button
                  className="read_less_button"
                  onClick={() => toggleShowFullText(index)}
                >
                  Read Less
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;