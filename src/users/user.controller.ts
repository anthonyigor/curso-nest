import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { randomUUID } from "crypto";

type ParamsUser = {
    id: string
}

type QueryUser = {
    page: string
    limit: string
}

type BodyUser = {
    name: string
    email: string
}

@Controller("users")
export class UserController {
    // query params
    @Get('/findByPages')
    getUsersByPage(@Query() queries: QueryUser): string {
        return `Users page ${queries.page} and limit ${queries.limit}`
    } 
    
    // url params
    @Get('/:id')
    getUserById(@Param() params: ParamsUser): string {
        return `User ID ${params.id}`
    }

    // body
    @Post('/create')
    createUser(@Body() data: BodyUser): any {
        return {
            ...data,
            id: randomUUID()
        }
    }


}