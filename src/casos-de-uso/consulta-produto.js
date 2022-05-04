import { ProdutoRepositorio } from "../infraestrutura/db/repositorio/produto-repositorio.js";

export class ConsultaProduto {
    async consulta(nome) {
        const produto = await new ProdutoRepositorio().consultaPorNome(nome);
        return produto;
    }
}
