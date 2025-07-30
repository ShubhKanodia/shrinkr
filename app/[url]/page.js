import { redirect } from "next/navigation";
import clientPromise from "@/lib/mongodb";

export default async function Page({ params }) {
    const url = (await params).url;
    const client = await clientPromise;
    const db = client.db("shrinkr");
    const collection = db.collection("url");
    const result = await collection.findOne({shortUrl: url});
    if (result) {
        redirect(result.url);
    }
    else {
        redirect(`${process.env.NEXT_PUBLIC_HOST}/404`);
    }
    return <div className="flex flex-col items-center justify-center min-h-screen bg-black py-8 px-4">
        <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-xl p-10 w-full max-w-xl flex flex-col items-center border border-gray-200/30">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-100 mb-2 font-sans text-center">My Post: {url}</h1>
        </div>
    </div>
}