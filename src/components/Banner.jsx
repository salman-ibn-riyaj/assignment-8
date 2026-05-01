import { Button } from "@heroui/react";
import Link from "next/link";
import 'animate.css';

const Banner = () => {
  return (
    
    <div
      className="bg-[linear-gradient(to_right,rgba(6,182,212,0.5),rgba(248,113,113,0.5)),url('/banner.avif')] h-100 bg-cover bg-center rounded-md flex flex-col space-y-6"
    >
      <div  className="flex flex-col">
        <p className=" p-1 pt-50 text-white text-center font-bold text-3xl md:text-6xl">
          QurbaniHat – Livestock Booking Platform
        </p>

        
          <Link className="flex justify-center" href={"/all-animals"}>
            <Button
              className={
                "bg-fuchsia-500 text-white text-center font-bold mx-auto animate__animated animate__backInLeft mt-2"
              }
            >
              Browse All Cows
            </Button>
          </Link>
      
      </div>
    </div>
  );
};

export default Banner;
