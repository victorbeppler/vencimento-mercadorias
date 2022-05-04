import express from "express";
import { ConsultaProduto } from "../../casos-de-uso/consulta-produto.js";
import { IncluirProduto } from "../../casos-de-uso/incluir-produto.js";
const router = express.Router();

const controllerName = "inclusaoProduto";
const middleware = (req, res, next) => {
    const requieredFields = ["nome", "descricao", "preco", "quantidade"];
    const missingField = requieredFields.filter((field) => !(field in req.body));
    if (missingField.length) {
        res.status(400).json({
            status: 400,
            message: "Os campos abaixo não foram informados",
            fields: missingField,
        });
    }
    const camposVazios = requieredFields.filter((field) => req.body[field] === "");
    if (camposVazios.length) {
        res.status(400).json({
            status: 400,
            message: "Os campos abaixo não podem ser vazios",
            fields: camposVazios,
        });
    }
    next();
};

router.post(`/${controllerName}`, middleware, async  (req, res)  => {
    const consultaProduto = await new ConsultaProduto().consulta(req.body.nome);
    if(consultaProduto){
        return res.status(400).json({
            status: 400,
            message: "Produto com o mesmo nome já cadastrado",
        });
    }
    const produtoIncluido = await new IncluirProduto().incluir(req.body);
    return res.status(201).send("Produto incluido com sucesso");
});

export default router;
