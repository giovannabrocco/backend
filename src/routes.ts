// arquivo de rotas da api

import {FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify"
import {CreateCustomerController} from './controllers/CreateCustomerController'

//vamos criar aqui dentro nossas rotas, quem usa-la vai passar por esta função
export async function routes (fastify:FastifyInstance, options: FastifyPluginOptions) {

    fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {
        return { ok: true}
    })

    fastify.post("/customer", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateCustomerController().handle(request, reply)
    })

}