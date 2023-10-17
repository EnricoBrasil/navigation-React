import {Router, request, response} from 'express';
import {prismacliente} from "../prisma/prisma.js"

const routes = Router();


app.get("/funcionarios", async(request,response) => {
    const funcionarios = await prismacliente.funcionarios.findMany();

    response.send()
});

app.post("/funcionarios", async (request, response) => {

    const body = request.body;

    await prismacliente.funcionarios.create({
        data: body,
    });

    response.send("funcioanrio criado")

});

export default routes;