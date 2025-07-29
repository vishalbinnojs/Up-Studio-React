import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home/Home";
import View from "./components/Home/View";
import How_It_Works from "./components/How_It_Works/How_It_Works";
import Features from "./components/Features/Features";
import FAQs from "./components/FAQs/FAQs-Contact";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import About from "./components/About_Us/About";
import Artist from "./components/Profiles/Artist";
import Technician from "./components/Profiles/Technician";
import Owner from "./components/Profiles/Owner";
import Footer from "./components/Footer/Footer";


import "./App.css";

function App() {
  const location = useLocation();
  // hiding footer on below pages
  const hideFooterPaths = ["/login", "/signup"];
  const shouldHideFooter = hideFooterPaths.includes(location.pathname);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/howitworks" element={<How_It_Works />} />
        <Route path="/features" element={<Features />} />
        <Route path="/FAQs-Contact" element={<FAQs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/artist" element={<Artist />} />
        <Route path="/view" element ={<View />} />
        <Route path="/technician" element={<Technician />} />
        <Route path = "/owner" element={<Owner/>} />
      </Routes>
          {/* Hide Footer */}
      {!shouldHideFooter && <Footer />}
    </>
  );
}

export default App;