import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function PUT(request , {params}){
    const {id} = params;
    const {newTitle : title , newdescription : description} = await request.json()
    await connectMongoDB()
    await Topic.findByIdAndUpdate(id , {title , description})
    return NextResponse.json({message : "topic updated"} , {status : 200})
}

//baraye mesal kafist dar postman newTitle ba newDescription ra put konid to mohtavaye shoma ba id morede nazar update shavad


export async function GET(request , {params}){
    const {id} = params;
    await connectMongoDB();
    const topic = await Topic.findOne({_id : id})
    return  NextResponse.json({topic} , {status : 200})
}