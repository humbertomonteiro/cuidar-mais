import styles from "./specialty.module.css";
import { LuBrainCog } from "react-icons/lu";
import { BiConversation } from "react-icons/bi";
import { TbTools } from "react-icons/tb";
import { HiOutlineBookOpen } from "react-icons/hi2";
import Title from "../../shared/Title";
import Section from "../../shared/Section";

const Specialty = () => {
  return (
    <Section>
      <Title text="Especialidades" align="center" color={4} />
      <div className={styles.boxes}>
        <article>
          <LuBrainCog />
          <h3>Psicologia Comportamental</h3>

          <p>Aplicação da Análise do Comportamento Aplicada (ABA).</p>
          <p>
            Terapias focadas em habilidades sociais, regulação emocional e
            autonomia.
          </p>
        </article>
        <article>
          <BiConversation />
          <h3>Fonoaudiologia</h3>

          <p>Desenvolvimento da comunicação verbal e não verbal.</p>
          <p>Intervenção em dificuldades de fala e linguagem.</p>
        </article>
        <article>
          <TbTools />
          <h3>Terapia Ocupacional</h3>

          <p>Treinamento em atividades diárias e habilidades motoras.</p>
          <p>
            Integração sensorial para lidar com hipersensibilidade ou
            hipossensibilidade.
          </p>
        </article>
        <article>
          <HiOutlineBookOpen />
          <h3>Educação Especial</h3>

          <p>Planejamento pedagógico individualizado.</p>
          <p>Apoio escolar e inclusão no ambiente educativo.</p>
        </article>
      </div>
    </Section>
  );
};

export default Specialty;
