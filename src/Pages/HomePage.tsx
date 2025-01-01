import { Toaster } from "react-hot-toast";
import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import About from "../component/About";
import HIW from "../component/HIW";
import ContactUs from "../component/ContactUs";
import Testimonials from "../component/Testimonials";
import FAQ from "../component/FAQ";
import Footer from "../component/Footer";
const HomePage = () => {




  return (
    <div className=" w-screen ">
      <Navbar />
      <Hero />
      <About />
      <HIW/>
      <Toaster />
      <Testimonials/>
      <FAQ/>
      <ContactUs/>
      <Footer/>
    </div>
  );
};

export default HomePage;


