'use client'
import { useSession } from "@/lib/auth-client";
import { Avatar, Button, Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const MyProfilePage = () => {

    const session = useSession();
    console.log(session);
    const user = session?.data?.user;
    console.log(user);

  return (
    <div className="my-12">
      <Card className="">
        <Image
          height={300}
          width={300}
          alt="Indie Hackers community"
          className="pointer-events-none aspect-square rounded-2xl object-cover select-none"
          loading="lazy"
          src={user?.image || null}
        />
        
        {user && <span className="text-green-400 font-bold text-xs">Logged In</span>}
        <Card.Header>
          <Card.Title className="text-2xl font-bold">{user?.name}</Card.Title>
          <Card.Description>{user?.email}</Card.Description>
        </Card.Header>
        <Card.Footer className="flex gap-2">
          <Link href={'/user-update'}><Button>User Update</Button></Link>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default MyProfilePage;
