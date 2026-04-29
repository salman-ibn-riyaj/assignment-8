import CowCard from "@/components/CowCard";
import { getCowsData } from "@/lib/data";

const AllAnimalsPage = async () => {
  const allCows = await getCowsData();
  console.log(allCows);
  return (
    <>
    <h2 className="text-2xl font-bold mt-10">All Cows</h2>
      <div className="my-12 grid grid-cols-1 md:grid-cols-3 gap-5">
        {allCows.map((cow) => (
          <CowCard key={cow.id} cow={cow}></CowCard>
        ))}
      </div>
    </>
  );
};

export default AllAnimalsPage;
