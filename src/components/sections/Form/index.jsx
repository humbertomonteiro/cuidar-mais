import ButtonSecondary from "../../shared/ButtonSecondary";
import Section from "../../shared/Section";
import styles from "./form.module.css";

const Form = () => {
  return (
    <Section>
      <div className={styles.container}>
        <div className={styles.img}>
          <img
            src="https://img.freepik.com/fotos-gratis/estudantes-internacionais-entusiasmados-em-trajes-casuais-prontos-para-o-trabalho-em-equipe-retrato-interior-de-feliz-garota-mulata-com-cabelo-encaracolado-de-maos-dadas-com-a-senhora-europeia-e-o-jovem-africano-no-escritorio_197531-3855.jpg?t=st=1736088929~exp=1736092529~hmac=f3682b8700aea8148d1293a574d9138866e248c96d0da21f4bbf20a52243d5a2&w=740"
            alt="Pessoas unidas"
          />
        </div>
        <form action="">
          <h2>Cadastre-se agora e fique por dentro!</h2>
          <p>
            Preencha seus dados abaixo e conecte-se com oportunidades incríveis.
            Estamos aqui para ajudar você a explorar novos caminhos e alcançar
            seus objetivos.
          </p>
          <label htmlFor="">
            <span>Nome e sobrenome</span>
            <input type="text" placeholder="Ex: Jhon Joe" required />
          </label>
          <label htmlFor="">
            <span>E-mail</span>
            <input type="email" placeholder="Ex: jhon@joe.com" required />
          </label>
          <label htmlFor="">
            <span>Whatsapp</span>
            <input type="number" placeholder="Ex: 11 900000000" />
          </label>
          <ButtonSecondary action="click" styleButton={"secondary"}>
            Junte-se a nós
          </ButtonSecondary>
        </form>
      </div>
    </Section>
  );
};

export default Form;
