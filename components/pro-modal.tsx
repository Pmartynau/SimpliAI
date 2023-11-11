'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";
import useProModal from "../hooks/use-pro-modal";
import { Badge } from "./ui/badge";
import { Check, Code, ImageIcon, MessageSquare, Music, VenetianMask, Video, Zap } from "lucide-react";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import axios from "axios";
import { useState } from "react";

const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    label: "Alter Ai Generator",
    icon: VenetianMask,
    color: "text-amber-500",
    bgColor: "bg-sky-amber/10",
  },
  {
    label: "Image Generator",
    icon: ImageIcon,
    color: "text-sky-500",
    bgColor: "bg-sky-500/10",
  },
  {
    label: "Video Generator",
    icon: Video,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
  },
  {
    label: "Music Generator",
    icon: Music,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    label: "Code Generator",
    icon: Code,
    color: "text-rose-700",
    bgColor: "bg-rose-700/10",
  },


]
const ProModal = () => {
  const proModal = useProModal();
  const [loading, setLoading] = useState(false);

  const onSubscribe = async () => {
    try {
      setLoading(true)
      const response = await axios.get("/api/stripe");

      window.location.href = response.data.url;
    } catch (error) {
      console.log(error, "STRIPE-CLIENT-ERROR");
    } finally {
      setLoading(false);
    }
  }
  return (
    <Dialog
      open={proModal.isOpen}
      onOpenChange={proModal.onClose}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex justify-center items-center flex-col gap-y-4 pb-2">
            <div className="flex items-center gap-x-2 font-bold py-1">
              Upgrade to SimplyFi Ai
              <Badge variant="gold" className="uppercase text-sm py-1">
                Premium
              </Badge>
            </div>
          </DialogTitle>
          <DialogDescription className="text-center pt-2 space-y-2 text-zinc-900 font-medium ">
            {tools.map((tool) => (
              <Card key={tool.label}
                className="p-3 border-black/5 flex items-center  justify-between">
                <div className="flex flex-center gap-x-4">
                  <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                    <tool.icon className={cn("w-6 h-6", tool.color)} />
                  </div>
                  <div className="flex items-center justify-center font-semibold text-sm">
                    {tool.label}
                  </div>
                </div>
                <div className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white border-0 rounded-lg shadow-md px-2 py-2 font-bold">
                  <Check className="text-primary w-5 h-5 " />
                </div>

              </Card>
            ))}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
    
            
            
            <Button
              disabled={loading}
              onClick={onSubscribe}
              size="lg"
              variant="gold"
              className="w-full  justify-between flex ">
                <p className="text-lg font-dark  text-background" >
                $4.99/month
            </p>
            <div className="flex  justify-center items-center">
               Upgrade
              <Zap className="w-4 h-4 ml-2 fill-white" />
            </div>
             
            </Button>     
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ProModal;