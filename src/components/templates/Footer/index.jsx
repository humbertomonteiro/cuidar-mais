import styles from "./footer.module.css";
import logo from "../../../assets/logos/logo.png";
import logoTel from "../../../assets/logos/logos-telefone.png";

import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.infos}>
        <a href="#header" className={styles.info}>
          <img className={styles.logo} src={logo} alt="Realização do projeto" />
        </a>

        <div className={styles.info}>
          <img src={logoTel} alt="Realização do projeto" />
        </div>

        <div className={styles.info}>
          <h3>Contatos</h3>
          <div className={styles.links}>
            <a
              href="https://www.instagram.com/saludcuidarmais/"
              target="_blank"
            >
              <FaInstagram />
            </a>
            <a href="https://wa.me/5598988830200" target="_blank">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.copy}>
        <span>&copy;Congresso Autismo MA - Todos os direitos reservados</span>
        <p className={styles.create}>
          Criado por{" "}
          <a href="https://portfolio-three-bay-73.vercel.app/" target="_blank">
            Hum Dev
          </a>{" "}
          com ❤️
        </p>
      </div>
    </footer>
  );
};

export default Footer;
