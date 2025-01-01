import { Toaster } from "react-hot-toast";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
const HomePage = () => {




  return (
    <div className=" w-screen ">
      <Navbar />
      <Hero />
      <About/>
      <Toaster />
    </div>
  );
};

export default HomePage;


