import { checkApiLimit, increaseApiLimit } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import {  Configuration, OpenAIApi } from "openai";

const configuration = new Configuration ({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function POST (
  req: Request,
) {
  try {

    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    if(!configuration.apiKey) {
      return new NextResponse("OpenAI API key not found",
      { status: 500})
    }

    if (!messages) {
      return new NextResponse("Messages are required!", { status: 400})

    }

    const freeTrial = await checkApiLimit();
    const isPro = await checkSubscription();

    if (!freeTrial && !isPro) {
      return new NextResponse("Free trial has expired", { status: 403 })
    }


    const response = await openai.createChatCompletion({
        model: "gpt-4-1106-preview",
        messages
      });
    
    if (!isPro) {
      await increaseApiLimit();
    }

    return NextResponse.json(response.data.choices[0].message);

  } catch (error) {
    console.log("[CONVERSATION_ERROR]",  error);
    return new NextResponse("Internal error", { status: 500});
  }
}
