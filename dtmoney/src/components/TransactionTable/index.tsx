import { Container } from "./style";

export function TransactionTable() {
  return (
    <>
      <Container>
        <table>
          <thead>
            <tr>
              <th>Título</th>
              <th>Valor</th>
              <th>Categoria</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Salario</td>
              <td className="deposit">R$ 5.000,00</td>
              <td>Desenvolvimento</td>
              <td>05/02/2022</td>
            </tr>
            <tr>
              <td>Aluguel</td>
              <td className="withdraw">-R$ 2.000,00</td>
              <td>Casa</td>
              <td>10/02/2021</td>
            </tr>
          </tbody>
        </table>
      </Container>
    </>
  );
}