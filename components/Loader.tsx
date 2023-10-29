import Image from "next/image";

const Loader = () => {
  return ( 
    <div className="h-full flex flex-col items-center
    justify-center gap-y-4  ">
      <div className="w-10 h-10 relative animate-pulse">
        <Image 
         fill
         alt="logo"
         src="/nlogo.png"
         className="rounded-full"
        />
      </div>
      <p className="text-sm text-muted-foreground">
        Simpli is thinking...
      </p>
    </div>
   );
}
 
export default Loader;