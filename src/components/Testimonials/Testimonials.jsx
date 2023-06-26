import React from "react";
import "./testimonials.css";
import Slider from "react-slick";
import { a1,a2,a3,a4,a5 } from "../../assets";

const Testimonials = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay:true,
        autoplaySpeed:2500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
      };

  return (
    <section id="team">
      <div className="container">
        <div className="slider_content_top ">
            <h6 className="title">Trusted By</h6>
            {/* <h2>Trusted By More Than <span className="highlight">5k Customers</span></h2> */}
        </div>

        <div className="slider_wrapper">
          <Slider {...settings}>
            <div className="slider_item">
              
              <div className="customer_details">
                <div className="customer_img">
                  <img src={a1} alt="pallav" />
                </div>

                <div>
                  <h5 className="customer_name">Pallav Bag</h5>
                  <p className="description">Front End Devolper and Web Designer</p>
                </div>
              </div>
            </div>

            <div className="slider_item">
              {/* <p className="description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Debitis veritatis temporibus, velit magni magnam vero. Lorem ipsum.
              </p> */}

              <div className="customer_details">
                <div className="customer_img">
                  <img src={a2} alt="subarna" />
                </div>

                <div>
                  <h5 className="customer_name">Subarna Manna</h5>
                  <p className="description">Back End Developer</p>
                </div>
              </div>
            </div>

            <div className="slider_item">
              {/* <p className="description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Debitis veritatis temporibus, velit magni magnam vero. Lorem ipsum.
              </p> */}

              <div className="customer_details">
                <div className="customer_img">
                  <img src={a3} alt="" />
                </div>

                <div>
                  <h5 className="customer_name">Piyush Raj</h5>
                  <p className="description">Digital Marketer</p>
                </div>
              </div>
            </div>

            <div className="slider_item">
              {/* <p className="description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Debitis veritatis temporibus, velit magni magnam vero. Lorem ipsum.
              </p> */}

              <div className="customer_details">
                <div className="customer_img">
                  <img src={a4} alt="sayantan" />
                </div>

                <div>
                  <h5 className="customer_name">Sayantan Chakrabarti</h5>
                  <p className="description">Sales and Social Media Manager</p>
                </div>
              </div>
            </div>

            <div className="slider_item">
              {/* <p className="description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Debitis veritatis temporibus, velit magni magnam vero. Lorem ipsum.
              </p> */}

              <div className="customer_details">
                <div className="customer_img">
                  <img src={a5} alt="nilambar" />
                </div>

                <div>
                  <h5 className="customer_name">Nilambar Giri</h5>
                  <p className="description">Sales and Product Manager</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
