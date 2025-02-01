import styles from "./header.module.css";
import logo from "../../../assets/logos/logo.png";
// import Button from "../../shared/Button";
import ButtonSecondary from "../../shared/ButtonSecondary";
import logosTel from "../../../assets/logos/logos-telefone.png";
import { IoRocketOutline } from "react-icons/io5";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const Header = () => {
  return (
    <header data-aos="fade-up" className={styles.container}>
      <div className={styles.phrase} data-aos="fade-right" data-aos-delay="600">
        <RiDoubleQuotesL className={styles.quotesTop} />
        <p>Cada aprendizado é uma peça que ajudasmos a encaixar</p>
        <RiDoubleQuotesR className={styles.quotesBottom} />
      </div>
      <div className={styles.content}>
        <img src={logo} alt="Logo Salud" />
        <h1>Terceira edição do nosso Congresso!</h1>
        <p>
          Junte-se a especialistas, profissionais da saúde e educadores em um
          encontro dedicado à conscientização e troca de conhecimento.
        </p>

        <ButtonSecondary action={"link"} link="#tickets">
          Quero participar <IoRocketOutline style={{ fontSize: "1.7rem" }} />
        </ButtonSecondary>
      </div>

      {/* <div className={styles.logos}>
        <img src={logosTel} alt="organizadores do projeto" />
      </div> */}
    </header>
  );
};

export default Header;
