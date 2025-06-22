import Header from "../header/index"
import Footer from "../footer"
import "./contact.css"

const ContactUs = ()=>{
    return(
        <div>
            <Header/>
        <div className="contact-page">
            <h1 style={{color:"black"}}>contact Us</h1>
            <p style={{fontSize:"18px",fontWeight:"bold",color:"black",marginTop:"10px"}}>Have a question, idea, or project in mind? We're here to help — get in touch with us today.</p>
        </div>
       <div className="contact-info">
            <p style={{color:"white",paddingTop:"25px",padding:"20px",fontSize:"20px"}}>Need support or want to collaborate? 

Fill out the form and our team will get back to you shortly</p>
<p style={{fontSize:"13px",padding:"20px",color:"white"}}>Need support or want to collaborate? Fill out the form and our team will get back to you shortly</p>
 
      <form className="contact-form">
        <div className="form-row">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Second Name" />
          <input type="email" placeholder="Email Address" />
          <input type="text" placeholder="Phone" />
          <input type="text" placeholder="Company" />
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    
        </div>
        <Footer/>
        </div>
    )
}

export default ContactUs