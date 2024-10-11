import { PrismaService } from "src/infra/database/prisma.service";

export type CreateUserDTO = {
    name: string;
    email: string;
    password: string;
    username: string;
}

export class CreateUserUseCase {
    constructor(private prisma: PrismaService) {}

    async execute(data: CreateUserDTO) {
        const user = await this.prisma.user.findFirst({
            where: {
                OR: [
                    {
                        email: data.email
                    },
                    {
                        username: data.username
                    }
                ]
            }
        })

        if (user) {
            throw new Error('User already exists')
        }

        return await this.prisma.user.create({
            data
        })
    }

}
