import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";
export async function POST(req) {
    const body = await req.json();
    const client = await clientPromise;
    const db = client.db("shrinkr");
    const collection = db.collection("url");

    //check if shorturl already exists
    const existingUrl = await collection.findOne({shortUrl: body.shorturl});
    if (existingUrl) {
        return NextResponse.json({error: "Short URL already exists"}, {status: 400});
    }

    //generate short url
    const shortUrl = Math.random().toString(36).substring(2, 15);
    const result = await collection.insertOne({url: body.url, shortUrl: body.shorturl});
    return NextResponse.json(result);
} 