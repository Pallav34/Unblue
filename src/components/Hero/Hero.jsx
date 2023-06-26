import './hero.css'
import heroDarkImg from "../../assets/hero-img.png"
import heroImg from "../../assets/hero-img (1).png"
const Hero = () => {
  return (
    <section className='hero_section' id='home'>
        <div className="container">
            <div className="hero_wrapper">
                <div className="hero_content">
                    <h1 className='hero_heading'>
                        One Stop<br/>{" "}
                        <span className='text-gradient'>Solution</span><br/>{" "}
                        For All Your Digital<br/>{" "}
                        <span className='text-gradient'>Needs.</span>
                    </h1> 
                </div>
                <div className="hero_img">
                    <img  src={heroDarkImg} alt="Web Design" />
                </div>
            </div>
        </div>

    </section>
  )
}

export default Hero