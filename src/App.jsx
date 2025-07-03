import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home/Home";
import How_It_Works from "./components/How_It_Works/How_It_Works";
import Features from "./components/Features/Features";
import FAQs from "./components/FAQs/FAQs";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import About from "./components/About_Us/About";
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
        <Route path="/FAQs" element={<FAQs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
      </Routes>
          {/* Hide Footer */}
      {!shouldHideFooter && <Footer />}
    </>
  );
}

export default App;