import styles from "./formGetData.module.css";
import ButtonSecondary from "../ButtonSecondary";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../../firebaseConfig";

const FormGetData = ({ setFormGetData, link }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!fullName || !email) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    try {
      await addDoc(collection(db, "participantes-certificado"), {
        fullName,
        email,
      });
      window.location.href = link;
    } catch (error) {
      alert("Error ao coletar dados, Tente mais tarde");
      console.log("Error: " + error);
    }
  };

  return (
    <div className={styles.divForm}>
      <form className={styles.formGetData} onSubmit={handleSubmit}>
        <h2>Preencha os campos para garantir seu Certificado.</h2>
        <p>
          Atenção! Ao participar do nosso congresso, você vai receber um
          certificado. Para que possamos criar seu sertificado, precisamos do
          seu nome completo e o seu e-mail principal, para que possamos
          envia-lo.
        </p>
        <button
          className={styles.btnClose}
          onClick={() => setFormGetData(false)}
        >
          <IoMdClose />
        </button>
        <label>
          <span>Informe seu nome completo para gerarmos seu certificado:</span>
          <input
            type="text"
            required
            placeholder="Digite seu nome completo..."
            onChange={(e) => setFullName(e.target.value)}
            value={fullName}
          />
        </label>
        <label>
          <span>Informe seu melhor email para enviarmos seu certificado:</span>
          <input
            type="email"
            required
            placeholder="Digite seu melhor e-mail..."
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <ButtonSecondary type="submit" style={{ width: "100%" }}>
          Ir para o checkout
        </ButtonSecondary>
      </form>
    </div>
  );
};

export default FormGetData;
