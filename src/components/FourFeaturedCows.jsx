import { getCowsData } from "@/lib/data";
import CowCard from "./CowCard";

const FourFeaturedCows = async () => {
  const cows = await getCowsData();
  console.log(cows);
  return (
    <div>
      <h2 className="text-2xl font-bold my-5">Featured Cows</h2>

      <div className="mb-12 grid grid-cols-1 md:grid-cols-4 gap-5">
        {cows.slice(0, 4).map((cow) =>
          <CowCard key={cow.id} cow={cow}></CowCard>
        )}
      </div>
    </div>
  );
};

export default FourFeaturedCows;
