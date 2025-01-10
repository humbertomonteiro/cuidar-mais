import Header from "./components/templates/Header";
import Main from "./components/templates/Main";
import CarouselScrollInfinit from "./components/shared/CarouselScrollInfinit";
import OurMission from "./components/sections/OurMission";
import Specialty from "./components/sections/Specialty";
import Form from "./components/sections/Form";
import BeSupport from "./components/sections/BeSupport";
import Questions from "./components/sections/Questions";
import CarouselSimple from "./components/shared/CarouselSimple";

import { itemsOurSevices } from "./data/constants/OurServices";
import { ItemsSponsors } from "./data/constants/Sponsors";

import { useState, useEffect } from "react";
import Footer from "./components/templates/Footer";

function App() {
  const [visibleItems, setVisibleItems] = useState(4);

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
      <Header />
      <Main>
        <CarouselScrollInfinit />
        <OurMission />
        <Specialty />
        <Form />
        <BeSupport />
        <CarouselSimple
          slides={itemsOurSevices}
          textTitle="Nossos Serviços"
          delay={4000}
        />
        <CarouselSimple
          slides={ItemsSponsors}
          numberSlidesView={visibleItems}
          textTitle="Patrocinadores"
        />
        <Questions />
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
