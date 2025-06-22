import Header  from "../header";
import Footer from "../footer";
import "./career.css"

const Career = ()=>(
    <div>
        <Header/>
        <div className="career-page">
            <div className="career-logs">
                <h1 className="heading">Talent wins games,<br/> but teamwork and intelligence win championships.</h1>
                <img src="https://res.cloudinary.com/dnxbl0xrb/image/upload/v1750584907/f0b0e513ed92da4db884e3b615e4df7f6941a652_d0hcze.png"/>
                <p className="paragraph">At Websort, we bring digital ideas to life through expert web and app development, digital marketing, and UI/UX design. Based in Bangalore, we build responsive websites and mobile apps, enhance online visibility with SEO, PPC, and social media, and design user-friendly interfaces. Choose Websort for innovative, tailored digital solutions.</p>
            </div>
            <div className="intenship-logo">
                <h1 className="heading">Internship Opportunities at Websort</h1>
                <div className="intenship-ing-text">
                    <img src="https://res.cloudinary.com/dnxbl0xrb/image/upload/v1750586399/b187a314685bcf305fbd414638ad8b02050eee06_lmxg7d.png"/>
                    <p className="paragraph">App Development</p>
                </div>
                 <div className="intenship-ing-text">
                    <img src="https://res.cloudinary.com/dnxbl0xrb/image/upload/v1750587105/d788a50edaf4a0f1443908273d2d7b632a94fef4_fsaaoe.png"/>
                    <p className="paragraph"> Web Development</p>
                </div>
                 <div className="intenship-ing-text">
                    <img src="https://res.cloudinary.com/dnxbl0xrb/image/upload/v1750586399/b187a314685bcf305fbd414638ad8b02050eee06_lmxg7d.png"/>
                    <p className="paragraph">App Development</p>
                </div>
                 <div className="intenship-ing-text">
                    <img src="https://res.cloudinary.com/dnxbl0xrb/image/upload/v1750586981/73ed4afd2616d4adc1c05092ea7967cc17097d10_qtrlkz.png"/>
                    <p className="paragraph">Digital Marketing</p>
                </div>
            </div>
</div>
<Footer/>
    </div>
)

export default Career