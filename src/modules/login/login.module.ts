import { Module } from "@nestjs/common";
import { LoginController } from "./login.controller";
import { SignInUseCase } from "./useCases/sign-in.usecase";
import { PrismaService } from "src/infra/database/prisma.service";
import { IUserRepository } from "../users/repositories/user.repository";
import { UserPrismaRepository } from "../users/repositories/prisma/user.prisma.repository";
import { JwtModule } from "@nestjs/jwt";

@Module({
    imports: [
        JwtModule.register({
            global: true,
            secret: process.env.JWT_SECRET,
            signOptions: { expiresIn: '60s' }
        })
    ],
    controllers: [LoginController],
    providers: [SignInUseCase, PrismaService, {
        provide: IUserRepository,
        useClass: UserPrismaRepository
    }],
})
export class LoginModule {}