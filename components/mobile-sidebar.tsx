"use client";
import { Menu } from "lucide-react";

import { Button } from "./ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import {Sidebar} from "./sidebars";
import { useEffect, useState } from "react";

interface MobileSidebarProps {
  apiLimitCount: number;
  isPro: boolean;
}

const MobileSidebar = ({
  apiLimitCount = 0,
  isPro = false
}: MobileSidebarProps ) => {
  const [isMounted, setIsMouted] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State variable to track the sidebar's open/closed state

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle the sidebar's 

    if (isSidebarOpen) {
      setIsSidebarOpen(isSidebarOpen);
    }
  };

  const handleSidebarClose = () => {
    setIsSidebarOpen(false); // Close the sidebar
  };

  useEffect(() => {
    setIsMouted(true);


  }, []);



  if (!isMounted) {
    return null;
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={handleSidebarToggle} // Toggle the sidebar's open/closed state on button click
        >
          <Menu />
        </Button>
      </SheetTrigger>
      {isSidebarOpen && (
        <SheetContent side="right" className="p-0">
          <Sidebar
            isPro={isPro}
            apiLimitCount={apiLimitCount}
            onClose={handleSidebarClose} // Pass the handleSidebarClose function as the onClose prop
          />
          
        </SheetContent>
        
      )}
    </Sheet>
    
  );
}

export default MobileSidebar;