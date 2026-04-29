import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  return (
    <div
      className=" h-100 bg-cover bg-center rounded-md flex-col space-y-6"
      style={{ backgroundImage: "url('/banner.avif')" }}
    >
      <div  className="flex flex-col">
        <p className=" p-1 pt-50 text-black font-bold text-4xl">
          QurbaniHat – Livestock Booking Platform
        </p>

        <div className="flex justify-center">
          <Link href={"/all-animals"}>
            <Button
              className={
                "bg-fuchsia-500 text-black text-center font-bold mx-auto"
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
