import { Card } from "@heroui/react";
import Image from "next/image";

const DetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(
    "https://assignment-8-five-blue.vercel.app/cowsData.json",
  );
  const cows = await res.json();
  console.log(cows);

  const cow = cows.find((c) => c.id == id);
  console.log(cow);

  return (
    <Card className="my-12">
      <div className="relative w-full aspect-square">
        <Image
          alt={cow.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="absolute pointer-events-none aspect-square rounded-2xl object-cover select-none"
          loading="lazy"
          src={cow.image}
        />
      </div>

      <Card.Header>
        <Card.Title className="text-xl font-bold">{cow.name}</Card.Title>
        <Card.Description>{cow.category}</Card.Description>
      </Card.Header>
      <div className="flex justify-between">
        <span className="font-bold">Weight: {cow.weight}</span>
        <span className="font-bold">Age: {cow.age}</span>
      </div>
      <div>
        <h2 className="text-xl font-bold">Price: ৳ {cow.price}</h2>
      </div>
      <div className="font-bold">Location: {cow.location}</div>
      <div className="font-bold">Category: {cow.category}</div>
      <div className="font-bold">Description: {cow.description}</div>
    </Card>
  );
};

export default DetailsPage;
