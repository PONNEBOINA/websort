import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import HomePage from "./body/home"
import AboutUs from "./body/about";
import ContactUs from "./body/contact";
import Projects from "./body/project";
import Career from "./body/career";

const App = ()=>{
  return(
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path = "/aboutUs" element={<AboutUs/>} />
              <Route path = "/projects" element={<Projects/>} />
                    <Route path = "/career" element={<Career/>} />
                    <Route path = "/contactUs" element={<ContactUs/>} />
      </Routes>
    </Router>
  )
}
export default App