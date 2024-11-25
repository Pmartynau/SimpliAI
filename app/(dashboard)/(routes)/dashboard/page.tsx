'use client';

import { Card } from "@/components/ui/card";
import {
  MessageSquare,
  LayoutDashboard,
  ImageIcon,
  Video,
  Music,
  Code,
  Settings,
  ArrowRight,
  VenetianMask,
  Bookmark,
  Eye,
  Book
} from "lucide-react";

import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { FaToolbox } from "react-icons/fa";
const tools = [ 
  {
    label: "Conversation",
    icon: MessageSquare,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    href: "/conversation",
  },
  {
    label: "Vision",
    icon: Eye,
    color: "text-blue-900",
    bgColor: "bg-blue-900/10",
    href: "/vision"
    },
    {
    label: "Story",
    icon: Book,
    color: "text-yellow-900",
    bgColor: "bg-yellow-900/10",
    href: "/vision"
      }, 
  {
    label: "Ask an Expert",
    icon: VenetianMask,
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
    href: "/alter",
  },
  {
    label: "Image Generator",
    icon: ImageIcon,
    color: "text-sky-500",
    bgColor: "bg-sky-500/10",
    href: "/image",
  },
  {
    label: "Video Generator",
    icon: Video,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    href: "/video",
  },
  {
    label: "Music Generator",
    icon: Music,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    href: "/music",
  },
  {
    label: "Code Generator",
    icon: Code,
    color: "text-rose-700",
    bgColor: "bg-rose-700/10",
    href: "/code",
  },
  {
    label: "Ai Toolbox",
    icon: FaToolbox,
    bgColor: "bg-pink-500/10",
    color: "text-pink-500",
    href: "/bookmarks"
  },
 
  
]
const DashboardPage = () => {
  const router =  useRouter();
  return (
    <div>
      <div className="mb-8 space-y-4 ">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Explore the power of AI
        </h2>
        <p className="text-muted-foreground font-light text-sm 
      md:text-lg text-center">
          Chat with the smartest AI  - Experience the power of AI
        </p>
      </div>
      <div className="px-4 md:px-2- lg:px-32 space-y-4">
        {tools.map((tool) => 
          <Card 
            onClick={() => router.push(tool.href)}
            key={tool.href}
            className="p-4 border-black/5 flex items-center
            justify-between hover:shadow-md transition
            cursor-pointer"            
          >
              <div className="flex items-center gap-x-4">
                <div className={cn("p-2 w-fit rounded-md", 
                tool.bgColor)}>
                  <tool.icon className={cn("w-8 h-8", tool.color)}/>
                </div>
                <div className="font-semibold">
                  { tool.label }
                </div>
              </div>
              <ArrowRight className="w-5 h-5" />
          </Card>
        )}
      </div>

    </div>
  );
}

export default DashboardPage;