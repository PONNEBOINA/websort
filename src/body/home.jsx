import Header from "../header/index"
import Footer from "../footer/index"
import "./home.css"

const Home = ()=>(
    <div>
        <Header/>
        <div className="home-container">
        <h1 className="heading">Our Services</h1>
        <div className="home-first-image">
            <img src="https://res.cloudinary.com/dnxbl0xrb/image/upload/v1750573786/Rectangle_179_oyvcig.png" className="img"/>
            <div className="text-data">
                <h1>UI/UX Design</h1>
                <p className="para">We design clean, intuitive, and engaging user interfaces that enhance the overall user experience. From wireframes to final designs, our focus is on usability, consistency, and creating visually appealing digital products that users love.</p>
            </div>
        </div>
         <div className="home-first-image">
             <div className="text-data">
                <h1>Web Development</h1>
                <p className="para">Planned and executed a digital marketing strategy including SEO, social media marketing, and content creation. Improved website traffic and engagement through targeted campaigns and regular performance tracking.</p>
            </div>
            <img src="https://res.cloudinary.com/dnxbl0xrb/image/upload/v1750575270/055c1fe8a92fb48ac917a89f08452005d34671dd_fuxyc4.jpg" className="img"/>
           
        </div>
         <div className="home-first-image">
            <img src="https://res.cloudinary.com/dnxbl0xrb/image/upload/v1750575344/aa65fe867c31b42c007cd24e67e251d288917393_fqpe1f.jpg" className="img"/>
            <div className="text-data">
                <h1>App Development</h1>
                <p className="para">We design clean, intuitive, and engaging user interfaces that enhance the overall user experience. From wireframes to final designs, our focus is on usability, consistency, and creating visually appealing digital products that users love.</p>
            </div>
        </div>
         <div className="home-first-image">
           
            <div className="text-data"> 
                <h1>Digital Marketing </h1>
                <p className="para">Designed and developed a responsive, SEO-optimized website using React. The site includes a modern UI, fast loading speed, and full mobile compatibility. Key features include service pages, contact form, and an easy-to-manage content structure to support client updates and user engagement.</p> 
                 </div>
                  <img src="https://res.cloudinary.com/dnxbl0xrb/image/upload/v1750575437/21d036cf8bc9bfa4c090115c6327ddb637ff0f43_wb401j.jpg" className="img"/>
        </div>
        </div>
        <Footer/>
    </div>
)
export default Home