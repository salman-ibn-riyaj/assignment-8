import { Button } from "@heroui/react";
import Link from "next/link";
import 'animate.css';

const Banner = () => {
  return (
    <div
      className=" h-100 bg-cover bg-center rounded-md flex-col space-y-6"
      style={{ backgroundImage: "url('/banner.avif')" }}
    >
      <div  className="flex flex-col">
        <p className=" p-1 pt-50 text-black text-center font-bold text-4xl">
          QurbaniHat – Livestock Booking Platform
        </p>

        <div className="flex justify-center">
          <Link href={"/all-animals"}>
            <Button
              className={
                "bg-fuchsia-500 text-black text-center font-bold mx-auto animate__animated animate__bounce"
              }
            >
              Browse All Cows
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
