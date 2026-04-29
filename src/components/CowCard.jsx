import React from "react";
import { Avatar, Card } from "@heroui/react";
import Image from "next/image";
const CowCard = ({cow}) => {
    console.log(cow);
  return (
    <Card className="">
      <Image
        alt={cow.name}
        height={300}
        width={300}
        className="pointer-events-none aspect-square w-14 rounded-2xl object-cover select-none"
        loading="lazy"
        src={cow.image}
      />
      <Card.Header>
        <Card.Title>Indie Hackers</Card.Title>
        <Card.Description>148 members</Card.Description>
      </Card.Header>
      <Card.Footer className="flex gap-2">
        
        <span className="text-xs">By Martha</span>
      </Card.Footer>
    </Card>
  );
};

export default CowCard;
