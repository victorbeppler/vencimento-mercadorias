export class ProdutoModel{
    constructor(produto){
        this.NOME = produto.nome;
        this.DESCRICAO = produto.descricao;
        this.PRECO = produto.preco;
        this.QUANTIDADE = produto.quantidade;
    }
}