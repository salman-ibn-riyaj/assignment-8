import React from "react";
import { Avatar, Button, Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
const CowCard = ({cow}) => {
    console.log(cow);
  return (
    <Card className="">
     
        <Image
        alt={cow.name}
        height={500}
        width={500}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="pointer-events-none aspect-square rounded-2xl object-cover select-none"
        loading="lazy"
        src={cow.image}
      />
    
      <Card.Header>
        <Card.Title className="text-xl font-bold">{cow.name}</Card.Title>
        <Card.Description>{cow.category}</Card.Description>
      </Card.Header>
      <div>
        <Link href={`/all-animals/${cow.id}`}><Button>View Details</Button></Link>
      </div>
    </Card>
  );
};

export default CowCard;
