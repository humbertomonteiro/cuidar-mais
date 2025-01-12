import styles from "./questions.module.css";
import Title from "../../shared/Title";
import { TiArrowDown, TiArrowUp } from "react-icons/ti";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import ButtonSecondary from "../../shared/ButtonSecondary";
import Section from "../../shared/Section";

const Questions = () => {
  const [item1, setItem1] = useState(false);
  const [item2, setItem2] = useState(false);
  const [item3, setItem3] = useState(false);
  const [item4, setItem4] = useState(false);
  const [item5, setItem5] = useState(false);
  const [item6, setItem6] = useState(false);
  const [item7, setItem7] = useState(false);
  const [item8, setItem8] = useState(false);
  return (
    <Section>
      <Title text="Perguntas frequentes" align="center" color={4} />
      <div className={styles.container}>
        <div href="#" className={styles.box}>
          <FaWhatsapp />
          <h3>Prefere falar com nosso time?</h3>
          <p>Time de suporte Whatsapp</p>
          <ButtonSecondary styleButton="secondary">
            Falar com nosso time
          </ButtonSecondary>
        </div>
        <ul className={styles.list}>
          <li>
            <div>
              <h4 onClick={() => setItem1(!item1)}>
                Meia entrada {item1 ? <TiArrowUp /> : <TiArrowDown />}
              </h4>
              {item1 && (
                <div>
                  <p>
                    Para obter meia-entrada, é necessário apresentar a Carteira
                    de Identificação Estudantil (CIE) ou documento equivalente.
                    Também são elegíveis pessoas com deficiência e seus
                    acompanhantes, famílias atípicas, idosos, jovens de baixa
                    renda e educadores, mediante documentação comprobatória
                  </p>
                </div>
              )}
            </div>
          </li>
          <li>
            <div>
              <h4 onClick={() => setItem2(!item2)}>
                Meia entrada <TiArrowDown />
              </h4>
              {item2 && (
                <div>
                  <p>
                    Para obter meia-entrada, é necessário apresentar a Carteira
                    de Identificação Estudantil (CIE) ou documento equivalente.
                    Também são elegíveis pessoas com deficiência e seus
                    acompanhantes, famílias atípicas, idosos, jovens de baixa
                    renda e educadores, mediante documentação comprobatória
                  </p>
                </div>
              )}
            </div>
          </li>
          <li>
            <div>
              <h4 onClick={() => setItem3(!item3)}>
                Meia entrada <TiArrowDown />
              </h4>
              {item3 && (
                <div>
                  <p>
                    Para obter meia-entrada, é necessário apresentar a Carteira
                    de Identificação Estudantil (CIE) ou documento equivalente.
                    Também são elegíveis pessoas com deficiência e seus
                    acompanhantes, famílias atípicas, idosos, jovens de baixa
                    renda e educadores, mediante documentação comprobatória
                  </p>
                </div>
              )}
            </div>
          </li>
          <li>
            <div>
              <h4 onClick={() => setItem4(!item4)}>
                Meia entrada <TiArrowDown />
              </h4>
              {item4 && (
                <div>
                  <p>
                    Para obter meia-entrada, é necessário apresentar a Carteira
                    de Identificação Estudantil (CIE) ou documento equivalente.
                    Também são elegíveis pessoas com deficiência e seus
                    acompanhantes, famílias atípicas, idosos, jovens de baixa
                    renda e educadores, mediante documentação comprobatória
                  </p>
                </div>
              )}
            </div>
          </li>
          <li>
            <div>
              <h4 onClick={() => setItem5(!item5)}>
                Meia entrada <TiArrowDown />
              </h4>
              {item5 && (
                <div>
                  <p>
                    Para obter meia-entrada, é necessário apresentar a Carteira
                    de Identificação Estudantil (CIE) ou documento equivalente.
                    Também são elegíveis pessoas com deficiência e seus
                    acompanhantes, famílias atípicas, idosos, jovens de baixa
                    renda e educadores, mediante documentação comprobatória
                  </p>
                </div>
              )}
            </div>
          </li>
          <li>
            <div>
              <h4 onClick={() => setItem6(!item6)}>
                Meia entrada <TiArrowDown />
              </h4>
              {item6 && (
                <div>
                  <p>
                    Para obter meia-entrada, é necessário apresentar a Carteira
                    de Identificação Estudantil (CIE) ou documento equivalente.
                    Também são elegíveis pessoas com deficiência e seus
                    acompanhantes, famílias atípicas, idosos, jovens de baixa
                    renda e educadores, mediante documentação comprobatória
                  </p>
                </div>
              )}
            </div>
          </li>
          <li>
            <div>
              <h4 onClick={() => setItem7(!item7)}>
                Meia entrada <TiArrowDown />
              </h4>
              {item7 && (
                <div>
                  <p>
                    Para obter meia-entrada, é necessário apresentar a Carteira
                    de Identificação Estudantil (CIE) ou documento equivalente.
                    Também são elegíveis pessoas com deficiência e seus
                    acompanhantes, famílias atípicas, idosos, jovens de baixa
                    renda e educadores, mediante documentação comprobatória
                  </p>
                </div>
              )}
            </div>
          </li>
          <li>
            <div>
              <h4 onClick={() => setItem8(!item8)}>
                Meia entrada <TiArrowDown />
              </h4>
              {item8 && (
                <div>
                  <p>
                    Para obter meia-entrada, é necessário apresentar a Carteira
                    de Identificação Estudantil (CIE) ou documento equivalente.
                    Também são elegíveis pessoas com deficiência e seus
                    acompanhantes, famílias atípicas, idosos, jovens de baixa
                    renda e educadores, mediante documentação comprobatória
                  </p>
                </div>
              )}
            </div>
          </li>
        </ul>
      </div>
    </Section>
  );
};

export default Questions;
