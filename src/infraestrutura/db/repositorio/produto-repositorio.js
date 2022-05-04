import { DbProduto } from "../esquemas/produto.js";

export class ProdutoRepositorio {
    async consultaPorNome(nome) {
        const produto = await DbProduto.findOne({ NOME: nome });
        return produto;
    }
    async incluirProduto(produto) {
        const produtoIncluido = await DbProduto.insertMany(produto);
        return produtoIncluido;
    }
}
