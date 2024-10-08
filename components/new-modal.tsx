import { Sparkles } from "lucide-react";
import './styles/fonts.css';
export const NewModal = () => {
  return ( 
    <div className=" mx-4 flex justify-center items-center">
      <span style={{fontFamily: 'CustomFont'}}className="text-red-500 font-bold animate-bounce">New</span>
      <Sparkles className="w-5 h-5 text-yellow-500 animate-spin-slow" />
    </div>
  );
}
