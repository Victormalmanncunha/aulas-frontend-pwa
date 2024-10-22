import MostrarSoma from './MostrarSoma/MostrarSoma';
import MostrarSubtracao from './MostrarSubtracao/MostrarSubtracao';
import MostrarDivisao from './MostrarDivisao/MostrarDivisao';
import MostrarMultiplicacao from './MostrarMultiplicacao/MostrarMultiplicacao';
import MostrarMeuNomeCompleto from './MostrarMeuNomeCompleto/MostrarMeuNomeCompleto';
import MostrarProduto from './MostrarProduto/MostrarProduto';
import MostrarNumerosPares from './MostrarNumerosPares/MostrarNumerosPares';

const PaginaDesafioComponente = () => {
  const produto = {
    nome: 'TV Samsung 55"',
    preco: 2999.9,
    estoque: 345,
  };
  const numeros = [
    1, 8, 13, 16, 21, 24, 29, 32, 37, 40, 45, 48,
  ];
  return (
    <div>
      <MostrarSoma num1={11} num2={12} />
      <br />
      <MostrarSubtracao num1={10} num2={2} />
      <br />
      <MostrarDivisao num1={50} num2={10} />
      <br />
      <MostrarMultiplicacao num1={10} num2={10} />
      <br />
      <MostrarMeuNomeCompleto nome="Victor Malmann da Cunha" />
      <br />
      <MostrarProduto produto={produto} />
      <br />
      <MostrarNumerosPares numeros={numeros} />
    </div>
  );
};
export default PaginaDesafioComponente;
