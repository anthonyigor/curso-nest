import { PrismaService } from "src/infra/database/prisma.service";
import { CreateUserDTO } from "../dto/user.dto";
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { hash } from 'bcrypt';
import { IUserRepository } from "../repositories/user.repository";

@Injectable()
export class CreateUserUseCase {
    constructor(private userRepository: IUserRepository) {}

    async execute(data: CreateUserDTO) {
        const user = await this.userRepository.findUserByEmail(data.email);

        if (user) {
            throw new HttpException('User already exists', HttpStatus.CONFLICT)
        }

        const hashedPassword = await hash(data.password, 10);

        return await this.userRepository.save({
            ...data,
            password: hashedPassword
        })
    }

}
