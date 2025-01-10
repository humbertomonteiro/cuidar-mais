import styles from "./header.module.css";
import logo from "../../../assets/logos/logo-congresso.png";
// import Button from "../../shared/Button";
import ButtonSecondary from "../../shared/ButtonSecondary";
import logosTel from "../../../assets/logos/logos-telefone.png";

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <img src={logo} alt="Logo Salud" />
        <h1>Terceira edição do Congresso Cuidar +</h1>
        <p>
          Junte-se a especialistas, profissionais da saúde e educadores em um
          encontro dedicado à conscientização e troca de conhecimento.
        </p>
        {/* <Button action="click">Quero participar</Button> */}

        <ButtonSecondary action={"link"} styleButton="secondary">
          Quero participar
        </ButtonSecondary>
      </div>
      <div className={styles.img}>
        <img
          src="https://img.freepik.com/fotos-gratis/pessoas-que-participam-de-um-evento-de-alto-protocolo_23-2150951407.jpg?t=st=1735935325~exp=1735938925~hmac=64b26d1bedd51fe9e8f7c45f9dd2ed60174888845f95ed0758c7bc09408c13f6&w=900"
          alt="Palestra"
        />
      </div>
      <div className={styles.logos}>
        <img src={logosTel} alt="" />
      </div>
    </header>
  );
};

export default Header;
