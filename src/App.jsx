import { Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";

// Eager imports
import Nav_Links  from "./components/Home/Nav_Links";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";

// lazy imports
const Login = lazy(() => import("./components/Login/Login"));
const Signup = lazy(() => import("./components/Signup/Signup"));
const About = lazy(() => import("./components/About_Us/About"));
const Artist = lazy(() => import("./components/Profiles/Artist"));
const Technician = lazy(() => import("./components/Profiles/Technician"));
const Owner = lazy(() => import("./components/Profiles/Owner"));
const PaymentMain = lazy(() =>
  import("./components/PaymentGateway/PaymentMain")
);
const View = lazy(()=> import('./components/Home/View'))
const How_It_Works = lazy(() => import('./components/How_It_Works/How_It_Works'))
const Features = lazy(()=> imports('./components/Features/Features'))
const FAQs = lazy(()=> imports('./components/FAQs/FAQs-Contact'));


import "./App.css";

function App() {
  const location = useLocation();
  // hiding footer on below pages
  const hideFooterPaths = ["/login", "/signup"];
  const shouldHideFooter = hideFooterPaths.includes(location.pathname);
  const hideNavLinks = hideFooterPaths.includes(location.pathname)


  return (
    <>
    <Suspense fallback={<PageLoader />}>
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
        <Route path ="/owner" element={<Owner/>} />
        <Route path ='/payment' element={<PaymentMain/>} />
       
      </Routes>
      </Suspense>
          {/* Hide NavLinks */}
      {!hideNavLinks && <Nav_Links />}   {/* This is short circuiting */}
          {/* Hide Footer */}
      {!shouldHideFooter && <Footer />}
    </>
  );
}
const PageLoader = () => {
  
  return (
    <>
  <div className="pageLoader">
      <div className="pulse-ring"></div>
      <div className="pulse-ring delay"></div>
      <div className="music-text">Loading the vibe… 🎵</div>
    </div>
    </>
  )
}

export default App;