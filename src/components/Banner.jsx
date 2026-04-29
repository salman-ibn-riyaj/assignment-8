import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  return (
    <div
      className="flex items-center justify-center h-100 bg-cover bg-center rounded-md flex-col space-y-6"
      style={{ backgroundImage: "url('/banner.avif')" }}
    >
      <h2 className="pl-10 w-125 mx-auto text-red-500 font-bold text-4xl">
        QurbaniHat – Livestock Booking Platform
      </h2>

      <Link href={"/all-animals"}>
        <Button className={"bg-fuchsia-500 text-black text-center font-bold"}>
          Browse All Cows
        </Button>
      </Link>
    </div>
  );
};

export default Banner;
