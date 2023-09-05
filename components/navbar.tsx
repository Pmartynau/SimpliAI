
import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "./mobile-sidebar";
import { getApiLimitCount } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";
import { DarkMode } from "./toggle";
import { Coffee,Twitter } from "lucide-react";

//button
import { Button } from "./ui/button";

const Navbar = async () => {
  const apiLimitCount = await getApiLimitCount();
  const isPro = await checkSubscription();
  return (
    <div className="flex items-center p-4">
      <MobileSidebar isPro={isPro} apiLimitCount={apiLimitCount} />
      <div className="flex w-full space-x-2  flex-row-1 justify-end">
       <a className="pt-2 pl-3" href="https://www.buymeacoffee.com/pashamartyl"><Coffee className="h-6 w-6" /></a>
       <a className="pt-2 pl-3" href="https://twitter.com/SimpliAIApp"><Twitter className="h-6 w-6" /></a>
       
        <DarkMode /> 
        <UserButton afterSignOutUrl="/"/>
      </div>
    </div>
  );
}

export default Navbar;