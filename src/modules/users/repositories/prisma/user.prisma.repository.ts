import { PrismaService } from "src/infra/database/prisma.service";
import { CreateUserDTO, CreatedUserDTO } from "../../dto/user.dto";
import { IUserRepository } from "../user.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UserPrismaRepository implements IUserRepository {
    constructor(private prisma: PrismaService) {}
    
    async findUserByUsername(username: string): Promise<any> {

        return await this.prisma.user.findUnique({
            where: {
                username
            }
        })
    }
    
    async save(user: CreateUserDTO): Promise<CreatedUserDTO> {
        return await this.prisma.user.create({
            data: user
        });
    }
    
    async findUserByEmail(email: string): Promise<any> {
        const user = await this.prisma.user.findUnique({
            where: {
                email
            }
        });

        return user;
    }

}