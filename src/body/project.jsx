import Header from "../header";
import Footer from "../footer";
import "./project.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "https://res.cloudinary.com/dnxbl0xrb/image/upload/v1750573786/Rectangle_179_oyvcig.png",
  "https://res.cloudinary.com/dnxbl0xrb/image/upload/v1750575270/055c1fe8a92fb48ac917a89f08452005d34671dd_fuxyc4.jpg",
  "https://res.cloudinary.com/dnxbl0xrb/image/upload/v1750575344/aa65fe867c31b42c007cd24e67e251d288917393_fqpe1f.jpg",
  "https://res.cloudinary.com/dnxbl0xrb/image/upload/v1750575437/21d036cf8bc9bfa4c090115c6327ddb637ff0f43_wb401j.jpg"
];

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  centerMode: true,
  centerPadding: "60px",
  arrows: true,
};

const Projects = () => (
  <div>
    <Header />
    <div className="project-page">
      <h1 className="heading">Our Projects</h1>
      <div className="slider-container">
        <Slider {...settings}>
          {images.map((url, index) => (
            <div key={index} className="slide-item">
              <img
                src={url}
                alt={`Slide ${index}`}
                className="carousel-image"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
    <Footer />
  </div>
);

export default Projects;
