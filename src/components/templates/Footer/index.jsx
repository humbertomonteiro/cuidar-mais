import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <span>&copy;Salud - Todos os direitos reservados</span>
      <p className={styles.create}>
        Criado por{" "}
        <a href="https://portfolio-three-bay-73.vercel.app/" target="_blank">
          Hum Dev
        </a>{" "}
        com ❤️
      </p>
    </footer>
  );
};

export default Footer;
