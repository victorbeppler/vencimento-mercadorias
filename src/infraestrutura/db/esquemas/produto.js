import mongoose from "mongoose";

const esquemaProduto = new mongoose.Schema({
    NOME: String,
    DESCRICAO: String,
    PRECO: Number,
    QUANTIDADE: Number,
    CRIADO_EM: {
        type: Date,
        default: Date.now,
    },
});

export const DbProduto = mongoose.model("produtos", esquemaProduto);
