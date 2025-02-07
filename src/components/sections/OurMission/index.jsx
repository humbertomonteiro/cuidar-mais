import styles from "./ourMission.module.css";
import Section from "../../shared/Section";
import ButtonSecondary from "../../shared/ButtonSecondary";
import { FaInstagram, FaArrowDown } from "react-icons/fa";

// import logosTel from "../../../assets/logos/logos-telefone.png";
// import smartphone from "../../../assets/mocups/mocup-smartphone.png";
import img1 from "../../../assets/events/foto-1.jpeg";
import img2 from "../../../assets/events/foto-2.jpeg";
// import congresso from "../../../assets/events/congresso.jpeg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-flip";
import { EffectFlip, Pagination, Navigation, Autoplay } from "swiper/modules";

const OurMission = () => {
  return (
    <Section>
      <div data-aos="zoom-in" className={styles.container}>
        <div className={styles.content}>
          <h2>Nossa missão</h2>
          <p>
            Nossa missão é transformar vidas por meio da inclusão, conhecimento
            e inovação. Acreditamos no poder de conectar pessoas, promover o
            aprendizado e criar soluções que gerem impacto positivo na
            sociedade. Buscamos oferecer excelência em tudo o que fazemos,
            sempre com empatia e respeito às necessidades de cada indivíduo.
          </p>

          {/* <img src={logosTel} alt="logo congresso" /> */}

          <ButtonSecondary
            styleButton="secondary"
            action="link"
            link="https://www.instagram.com/saludcuidarmais/"
            target="_blank"
          >
            Nos acompanhe <FaInstagram style={{ fontSize: "1.5rem" }} />
          </ButtonSecondary>
          <ButtonSecondary action="link" link="#tickets">
            COMPRAR INGRESSO <FaArrowDown />
          </ButtonSecondary>
        </div>
        <div className={styles.img}>
          {/* <img src={smartphone} alt="Celular com o instagram da cuidar mais" /> */}
          <Swiper
            effect={"flip"}
            grabCursor={true}
            pagination={true}
            navigation={true}
            autoplay={true}
            modules={[EffectFlip, Pagination, Navigation, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={img1} alt="Imagem do evento" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img2} alt="Imagem do evento" />
            </SwiperSlide>
            {/* <SwiperSlide>
              <img src={congresso} alt="Imagem do evento" />
            </SwiperSlide> */}
          </Swiper>
        </div>
      </div>
    </Section>
  );
};

export default OurMission;
