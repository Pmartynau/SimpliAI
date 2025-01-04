

import LandingContent from "@/components/landing-content";
import { LandingHero } from "@/components/landing-hero";
import { LandingNavbar } from "@/components/landing-navbar";
import VoiceflowChat from "./voiceflow";


const LandingPage = () => {

  return ( 
    <div className="h-screen">
      <LandingNavbar />
      <LandingHero />
      <LandingContent />
      <VoiceflowChat/>
    </div>
    
   );
}
 
export default LandingPage;