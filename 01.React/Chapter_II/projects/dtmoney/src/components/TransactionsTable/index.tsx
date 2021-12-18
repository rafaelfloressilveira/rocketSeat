import { Container } from "./styles";

export function TransactionsTable() {
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categorias</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>

                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="deposit" >R$ 6.000</td>
                        <td>Freela</td>
                        <td>02/02/2021</td>
                    </tr>

                    <tr>
                        <td>Fast-Food</td>
                        <td className="withdraw" >-R$ 1.500</td>
                        <td>Alimentação</td>
                        <td>10/02/2021</td>
                    </tr>

                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw" >-R$ 2.500</td>
                        <td>Casa</td>
                        <td>15/02/2021</td>
                    </tr>

                    <tr>
                        <td>Venda Notebook</td>
                        <td className="deposit" >R$ 3.000</td>
                        <td>Vendas</td>
                        <td>20/02/2021</td>
                    </tr>

                </tbody>
            </table>
        </Container>
    );
}