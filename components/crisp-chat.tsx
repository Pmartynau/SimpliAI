"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";


export  const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("56d32a27-7579-443a-8233-1a495901730d")
  }, []);

  return null;
}