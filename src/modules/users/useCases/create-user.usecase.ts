import { PrismaService } from "src/infra/database/prisma.service";
import { CreateUserDTO } from "../dto/user.dto";
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { hash } from 'bcrypt';

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
            throw new HttpException('User already exists', HttpStatus.CONFLICT)
        }

        const hashedPassword = await hash(data.password, 10);

        return await this.prisma.user.create({
            data: {
                ...data,
                password: hashedPassword
            }
        })
    }

}
