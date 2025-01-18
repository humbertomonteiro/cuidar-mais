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

import { itemsOurSevices } from "./data/constants/OurServices";
import { ItemsSponsors } from "./data/constants/Sponsors";
import { itemsSpeakers } from "./data/constants/Speakers";

import { useState, useEffect } from "react";
import Footer from "./components/templates/Footer";
import TopBar from "./components/sections/TopBar";
import Videos from "./components/sections/Videos";
import Tickets from "./components/sections/Tickets";

import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  const [visibleItems, setVisibleItems] = useState(4);

  useEffect(() => {
    Aos.init({ duration: 1200 });
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
      <TopBar
        text={"Quer participar do próximo congresso?"}
        action={"link"}
        textAction={"Clique aqui !"}
      />
      <Header />
      <Main>
        <OurMission />
        <CarouselSimple
          slides={itemsSpeakers}
          numberSlidesView={visibleItems - 1}
          textTitle="Palestrantes"
        />
        <Privilege />
        <Local />
        <CarouselScrollInfinit />
        <Form />
        <Tickets />
        <HalfiPrice />
        <BeSupport />
        <CarouselSimple
          slides={ItemsSponsors}
          numberSlidesView={visibleItems}
          textTitle="Patrocinadores"
        />
        <Videos />
        <CarouselSimple
          slides={itemsOurSevices}
          textTitle="Nossos Serviços"
          delay={4000}
          numberSlidesView={visibleItems - 1}
        />
        <Questions />
        <Politic />
      </Main>
      <Footer />
      <div className="bubbles">
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
      </div>
    </>
  );
}

export default App;
