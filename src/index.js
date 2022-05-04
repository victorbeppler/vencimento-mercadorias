import express from "express";
import basicAuth from "express-basic-auth";
import rotaInclusaoProduto from "../src/apresentacao/rotas/rota-inclusao-produto.js";
import { configurarMongo } from "./db.js";
const app = express();

app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());
app.use(basicAuth({ users: { admin: "zz0gqgdBIrHd" } }));
app.listen(3001, () => {
    configurarMongo().then(async () => {
        console.log("Server is running on port 3001");

        app.get("/rest/status", (req, res) => {
            res.send("Server is running");
        });
        app.use("/rest/", rotaInclusaoProduto);
    });
});
