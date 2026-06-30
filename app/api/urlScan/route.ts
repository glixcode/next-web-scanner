import { NextResponse } from "next/server";
import data from "./data.json"
import { searchSchema } from "../validation/schema";
import {domainExists} from "./controller"

export async function GET(){
    return NextResponse.json(data)

}

export async function POST(request: Request){
    const body = await request.json()
    const validation = searchSchema.safeParse(body)

    if(!validation.success){
        return NextResponse.json({error: "Search key is required"}, {status: 400})
    }

    const url = validation.data.searchKey.replace(/^https?:\/\//i, "");
    const normalizedUrl = `https://${url}`;

    const siteReachable = await domainExists(normalizedUrl)

    if(!siteReachable){
        return NextResponse.json({error: "Site is not reachable"}, {status: 400})
    }

    return NextResponse.json(data)
}