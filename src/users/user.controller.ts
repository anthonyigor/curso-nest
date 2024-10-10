import { Controller, Get } from "@nestjs/common";

@Controller()
export class UserController {
    @Get('/users')
    getUser(): string {
        return 'Users'
    }
}