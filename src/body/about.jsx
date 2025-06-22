import Header from "../header/index"
import Footer  from "../footer"
import "./about.css"

const AboutUs = ()=>(
    <div>
        <Header/>
    <div className="about-page">
        <h1 className="about-heading">About us</h1>
        <div className="about-text">
            <h1 className="heading">Where Innovation <br/> Meets Execution</h1>
            <div>

            <p className="about-para">Websort builds websites, apps, and digital marketing solutions to help you grow online. Based in Bangalore, we focus on smart design, strong tech, and real results.We specialize in web development, mobile app development, UI/UX design, and digital marketing—delivering responsive websites, high-performance Android/iOS apps, and visually engaging interfaces. Our digital marketing expertise spans SEO, PPC, social media marketing, and content creation, helping businesses grow and connect with their ideal audience.</p>
       <button style={{marginTop:"15px"}}>Know more</button>
       </div>
        </div>
    </div>
    <Footer/>
    </div>
)
export default AboutUs