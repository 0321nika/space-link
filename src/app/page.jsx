import FifthSection from "@/components/FifthSection";
import FirstSection from "@/components/FirstSection";
import Footer from "@/components/Footer";
import FourthSection from "@/components/FourthSection";
import Navbar from "@/components/Navbar";
import SecondSection from "@/components/SecondSection";
import SeventhSection from "@/components/SeventhSection";
import SixthSection from "@/components/SixthSection";
import ThirdSection from "@/components/ThirdSection";

const Home = () => {
  return (
    <main>
      <Navbar/>
      <FirstSection/>
      <SecondSection/>
      <ThirdSection/>
      <FourthSection/>
      <FifthSection/>
      <SixthSection/>
      <SeventhSection/>
      <Footer/>
    </main>
  );
}

export default Home
