import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { CreateUserUseCase } from "./useCases/create-user.usecase";
import { PrismaService } from "src/infra/database/prisma.service";
import { IUserRepository } from "./repositories/user.repository";
import { UserPrismaRepository } from "./repositories/prisma/user.prisma.repository";
import { ProfileUseCase } from "./useCases/profile.usecase";

@Module({
    imports: [],
    controllers: [UserController],
    providers: [CreateUserUseCase, ProfileUseCase, PrismaService, {
        provide: IUserRepository,
        useClass: UserPrismaRepository
    }],
})
export class UserModule {}