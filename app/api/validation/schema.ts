import {z} from "zod";

export const searchSchema = z.object({
    searchKey: z.string().min(1).max(1000),
})
