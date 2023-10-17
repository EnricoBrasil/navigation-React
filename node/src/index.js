import  express, { response } from "express";

const app = express();
app.use(express.json()); 



app.get('/pedidos')

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});