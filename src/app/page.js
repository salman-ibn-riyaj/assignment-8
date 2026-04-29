import Banner from "@/components/Banner";
import FourFeaturedCows from "@/components/FourFeaturedCows";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <FourFeaturedCows></FourFeaturedCows>
    </div>
  );
}
