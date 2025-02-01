import ButtonSecondary from "../../shared/ButtonSecondary";
import Section from "../../shared/Section";
import styles from "./form.module.css";

import { FaArrowRight } from "react-icons/fa";

import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../../firebaseConfig";

import toast from "react-hot-toast";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await addDoc(collection(db, "participante"), {
        name,
        email,
        number,
      });
      setName("");
      setEmail("");
      setNumber("");
      toast.success("Dados enviado com sucesso!", {
        duration: 4000,
        position: "bottom-right",
      });
    } catch (error) {
      toast.error("Erro ao cadastrar dados, por favor tente mais tarde.", {
        duration: 4000,
        position: "bottom-right",
      });
      console.log("Error: " + error);
    }
  };

  return (
    <Section>
      <div data-aos="zoom-in" className={styles.container}>
        <div className={styles.img}>
          <img
            src="https://img.freepik.com/fotos-gratis/estudantes-internacionais-entusiasmados-em-trajes-casuais-prontos-para-o-trabalho-em-equipe-retrato-interior-de-feliz-garota-mulata-com-cabelo-encaracolado-de-maos-dadas-com-a-senhora-europeia-e-o-jovem-africano-no-escritorio_197531-3855.jpg?t=st=1736088929~exp=1736092529~hmac=f3682b8700aea8148d1293a574d9138866e248c96d0da21f4bbf20a52243d5a2&w=740"
            alt="Pessoas unidas"
          />
        </div>
        <form onSubmit={handleSubmit}>
          <h2>Cadastre-se agora e fique por dentro!</h2>
          <p>
            Preencha seus dados abaixo e conecte-se com oportunidades incríveis.
            Estamos aqui para ajudar você a explorar novos caminhos e alcançar
            seus objetivos.
          </p>
          <label htmlFor="">
            <span>Nome e sobrenome</span>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Ex: Jhon Joe"
              required
            />
          </label>
          <label htmlFor="">
            <span>E-mail</span>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Ex: jhon@joe.com"
              required
            />
          </label>
          <label htmlFor="">
            <span>Whatsapp</span>
            <input
              type="number"
              onChange={(e) => setNumber(e.target.value)}
              value={number}
              placeholder="Ex: 11 900000000"
            />
          </label>
          <ButtonSecondary type="submit" action="click">
            Junte-se a nós <FaArrowRight />
          </ButtonSecondary>
        </form>
      </div>
    </Section>
  );
};

export default Form;
