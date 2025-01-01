import { Toaster } from "react-hot-toast";
import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import About from "../component/About";
import HIW from "../component/HIW";
const HomePage = () => {




  return (
    <div className=" w-screen ">
      <Navbar />
      <Hero />
      <About />
      <HIW/>
      <Toaster />
    </div>
  );
};

export default HomePage;


