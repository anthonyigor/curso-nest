import { PrismaService } from "src/infra/database/prisma.service";
import { CreateUserDTO } from "../dto/user.dto";
import { Injectable } from "@nestjs/common";

@Injectable()
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
