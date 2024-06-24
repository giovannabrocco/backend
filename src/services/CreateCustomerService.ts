import prismaClient from "../prisma";

interface CreateCustomerProps {
    name: string;
    email: string
}

class CreateCustomerService {
    async execute ({name, email}: CreateCustomerProps) {
        console.log("ROTA FOI CHAMADA");

        return { ok: true}
    }
}

export {CreateCustomerService}