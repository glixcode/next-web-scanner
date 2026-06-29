import { NextResponse } from "next/server";
import {searchSchema} from "@/app/api/validation/schema"
import prisma from "@/prisma/client"
import braveSearch from "@/lib/services/braveSearch"
import test from "./test.json"

export async function GET(){
    const users = await prisma.user.findMany({
        select: {
            id: true,
            username: true,
            createdAt: true
        }
    })
    return NextResponse.json(users)
}

export async function POST(request: Request){
    const body = await request.json()
    const validation = searchSchema.safeParse(body)

    if(!validation.success){
        return NextResponse.json({error: "Search key is required"}, {status: 400})
    }

    // try {
    //     const response = await braveSearch(validation.data.searchKey)
    //     return NextResponse.json(response)
    // } catch (e: any) {
    //     console.log(e.response?.data.error?.meta?.errors);
    // }
    
    return NextResponse.json(test)
}