const MostrarProduto = ({ produto }) => {
  return (
    <p>
      <b>Produto:</b>
      <br />
      <b>Nome:</b> {produto.nome}
      <br />
      <b>Preço:</b> {produto.preco}
      <br />
      <b>Qtd Estoque:</b> {produto.estoque}
    </p>
  );
};
export default MostrarProduto;
