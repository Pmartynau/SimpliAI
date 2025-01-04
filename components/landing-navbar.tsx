"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

//tesla font
import './styles/fonts.css';

const font = Montserrat({
  weight: "600",
  subsets: ["latin"],
});

export const LandingNavbar = () => {
  const { isSignedIn} = useAuth();

  return (
    <nav className="p-4 bg-transparent flex items-center justify-between borderb border-solid">
        <Link href="/" className="flex items-center">
          <div className="relative mr-4 h-10 w-10">
            <Image 
              fill
              alt="Logo"
              src="/nlogo.png"
              className="rounded-full"
            />
          </div>
          <h1 style={{ fontFamily: 'CustomFont', fontSize: '36px' }}>SimplyFi</h1>
        </Link>
        <div className="flex items-center gap-x-2">
          <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
            <Button variant="outline" className="md:text-lg p-4 md:p-6 animate-slide-from-left">
              Get started
            </Button>
          </Link>
          <Link href={isSignedIn ? "/pricing" : "/sign-up"}>
            <Button variant="outline" className="md:text-lg p-4 md:p-6 animate-slide-from-left">
              Pricing
            </Button>
          </Link>
        </div>
    </nav>
  )
}