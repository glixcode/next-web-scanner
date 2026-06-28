import { NextResponse } from "next/server";
import {searchSchema} from "@/app/api/validation/schema"

export async function GET(){
    return NextResponse.json({})
}

export async function POST(request: Request){
    const body = await request.json()
    const validation = searchSchema.safeParse(body)

    if(!validation.success){
        return NextResponse.json({error: "Search key is required"}, {status: 400})
    }

    return NextResponse.json(body)
}