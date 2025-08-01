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
        return NextResponse.json({
            message: "Short URL already exists",
            existingShortUrl: `${process.env.NEXT_PUBLIC_HOST}/${existingUrl.shortUrl}`,
            originalUrl: existingUrl.url
        });
    }

    //generate short url
    const shortUrl = Math.random().toString(36).substring(2, 15);
    const result = await collection.insertOne({url: body.url, shortUrl: body.shorturl});
    return NextResponse.json(result);
} 