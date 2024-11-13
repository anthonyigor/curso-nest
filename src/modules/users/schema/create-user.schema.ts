import { createZodDto } from "nestjs-zod";
import { z } from "zod";

export const createUserSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
    username: z.string()
})

export class CreateUserSchemaDTO extends createZodDto(createUserSchema) {}