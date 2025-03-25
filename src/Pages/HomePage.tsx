//import { Toaster } from "react-hot-toast";
import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import About from "../component/About";
import HowItWorks from "@/component/Home_components/HowItWorks";
import Footer from "@/component/Footer";
// import ContactUsForm from "../component/ContactUs";
// import Testimonials from "../component/Testimonials";
// import FAQ from "../component/FAQ";
// import Footer from "../component/Footer";
const HomePage = () => {




  return (
    <div className="">
      <Navbar />
      <Hero />
      <HowItWorks/>
      <About />
      {/* <Toaster />
      <Testimonials/>
      <FAQ/>
      <ContactUsForm/>
      <Footer/> */}
      <Footer/>
    </div>
  );
};

export default HomePage;


