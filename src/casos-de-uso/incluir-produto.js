import { ProdutoModel } from "../dominio/models/produto-model.js";
import { ProdutoRepositorio } from "../infraestrutura/db/repositorio/produto-repositorio.js";

export class IncluirProduto {
    async incluir(produto) {
        const produtoFormatado = new ProdutoModel(produto);
        const produtoIncluido = await new ProdutoRepositorio().incluirProduto(produtoFormatado);
        return produtoIncluido;
    }
}
