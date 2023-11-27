"use client"

import { useAuth } from "@clerk/nextjs";
import TypeWriterComponent from "typewriter-effect";
import Link from "next/link";
import { Button } from "./ui/button";
import './styles/fonts.css';

export const LandingHero = () => {
  const isSignIn = useAuth();
  return (
    <><div className="text-white font-bold py-24 text-center space-y-5 ">
      <div style={{ fontFamily: 'CustomFont', fontSize: '36px' }}>
        <h1>The Best Ai Tool for</h1>
        <div className="text-transparent bg-clip-text bg-black/75">
          <TypeWriterComponent
            options={{
              strings: [
                "Chatbot.",
                "Ask an Expert",
                "Photo Generation.",
                "Video Generation.",
                "Music Generation.",
                "Code Generation.",
                "Ai Toolbox."
              ],
              autoStart: true,
              loop: true,
            }} />
        </div>
      </div>
      <div className="text-sm md:text-xl font-light text-white/75">
        Create content using AI 10x faster.
      </div>

      <div>
        <Link href={isSignIn ? "/dashboard" : "/sign-in"}>
          <Button
            variant="premium"
            className="md:text-lg p-4 md:p-6 animate-slide-from-left animate-bounce"
          >
            Start Generating For Free
          </Button>
        </Link>
      </div>
      <div className="text-white/75 text-xs md:text-sm font-normal">
        Enjoy 10 Free Credits Today.
      </div>
    </div></>
  )
}