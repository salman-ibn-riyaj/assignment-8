"use client";
import CowCard from "@/components/CowCard";
import { useState } from "react";

const SortedCowList = ({ cows }) => {
  const [sortOrder, setSortOrder] = useState("default");

  const sortedCows = [...cows].sort((a, b) => {
    if (sortOrder === "low-high") return a.price - b.price;
    if (sortOrder === "high-low") return b.price - a.price;
    return 0;
  });

  return (
    <div className="mt-4">
      <select
        className="border rounded-md px-3 py-2 text-sm"
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
      >
        <option value="default">Sort by Price</option>
        <option value="low-high">Price: Low to High</option>
        <option value="high-low">Price: High to Low</option>
      </select>

      <div className="my-12 grid grid-cols-1 md:grid-cols-3 gap-5">
        {sortedCows.map((cow) => (
          <CowCard key={cow.id} cow={cow} />
        ))}
      </div>
    </div>
  );
};

export default SortedCowList;