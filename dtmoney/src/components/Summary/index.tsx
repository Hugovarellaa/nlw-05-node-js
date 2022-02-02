import { Container } from "./style";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";

export function Summary() {
  return (
    <>
      <Container>
        <div>
          <header>
            <p>Entradas</p>
            <img src={incomeImg} alt="Entradas" />
          </header>
          <strong>R$ 3.000,00</strong>
        </div>

        <div>
          <header>
            <p>Saídas</p>
            <img src={outcomeImg} alt="Saidas" />
          </header>
          <strong>R$ 1.200,00</strong>
        </div>

        <div>
          <header>
            <p>Total</p>
            <img src={totalImg} alt="Total" />
          </header>
          <strong>R$ 1.800,00</strong>
        </div>
      </Container>
    </>
  );
}