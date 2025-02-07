import Header from "./components/templates/Header";
import Main from "./components/templates/Main";
import CarouselScrollInfinit from "./components/shared/CarouselScrollInfinit";
import OurMission from "./components/sections/OurMission";
import Privilege from "./components/sections/PrivilegeOfParticipating";
import Form from "./components/sections/Form";
import BeSupport from "./components/sections/BeSupport";
import Questions from "./components/sections/Questions";
import CarouselSimple from "./components/shared/CarouselSimple";
import HalfiPrice from "./components/sections/HalfPrice";
import Politic from "./components/sections/Politic";
import Local from "./components/sections/Local";
import MusicTherapy from "./components/sections/MusicTherapy";

import { itemsOurSevices } from "./data/constants/OurServices";
// import { ItemsSponsors } from "./data/constants/Sponsors";
import { itemsSpeakers } from "./data/constants/Speakers";

import { useState, useEffect } from "react";
import Footer from "./components/templates/Footer";
import TopBar from "./components/sections/TopBar";
import Videos from "./components/sections/Videos";
import Tickets from "./components/sections/Tickets";
import ScrollToTop from "./components/shared/ScrollToTop";

import Aos from "aos";
import "aos/dist/aos.css";

import bgTop from "./assets/bg/bg-top1.jpg";
import bgBottom from "./assets/bg/bg-bootm1.jpg";

import { Toaster } from "react-hot-toast";
import Testimonials from "./components/sections/Testimonials";

function App() {
  const [visibleItems, setVisibleItems] = useState(4);

  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);

  const updateVisibleItems = () => {
    if (window.innerWidth <= 768) {
      setVisibleItems(2);
    } else {
      setVisibleItems(4);
    }
  };

  useEffect(() => {
    updateVisibleItems();
    window.addEventListener("resize", updateVisibleItems);
    return () => window.removeEventListener("resize", updateVisibleItems);
  }, []);

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <TopBar
        text={"Compre seu ingresso com menor valor!"}
        action={"link"}
        textAction={"COMPRAR INGRESSO"}
        linkAction={"#tickets"}
      />
      {/* <ScrollToTop /> */}
      <Header />
      <Main>
        <OurMission />
        <Tickets />
        <CarouselSimple
          slides={itemsSpeakers}
          numberSlidesView={visibleItems - 1}
          textTitle="Conheça nossos palestrantes"
        />
        <Privilege />
        <Testimonials />
        <CarouselScrollInfinit />
        <HalfiPrice />
        <BeSupport />
        <Local />
        <Questions />
        <Politic />
      </Main>
      <Footer />
      <div className="bubbles">
        {/* <img className="bg-top" src={bgTop} alt="Background Top" /> */}
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        {/* <img className="bg-bottom" src={bgBottom} alt="Background Bottom" /> */}
      </div>
    </>
  );
}

export default App;
