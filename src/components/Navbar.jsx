"use client";
import { useState } from "react";
import { Link, Button, Avatar } from "@heroui/react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { signOut, useSession } from "@/lib/auth-client";

const Navbar = () => {
  const pathName = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const session = useSession();
  console.log(session);
  const user = session?.data?.user;
  console.log(user);

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
      <header className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <div>
            <Image
              className="rounded-full"
              src={"/logo.avif"}
              alt="cow pic"
              height={50}
              width={50}
            ></Image>
          </div>
        </div>
        <ul className="hidden items-center gap-4 md:flex">
          <li>
            <Link
              className={pathName === "/" ? "text-purple-500 font-bold" : ""}
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={
                pathName === "/all-animals" ? "text-purple-500 font-bold" : ""
              }
              href="/all-animals"
            >
              All Animals
            </Link>
          </li>
          <li>
            <Link
              className={
                pathName === "/my-profile" ? "text-purple-500 font-bold" : ""
              }
              href="/my-profile"
            >
              My Profile
            </Link>
          </li>
        </ul>

        <div className="">
          {user && (
            <div className="flex items-center gap-2">
              <Link href="/login">
                <Button onClick={()=>signOut()} className={"mr-4"}>LogOut</Button>
              </Link>

              <Avatar>
                <Avatar.Image
                  alt={user?.name}
                  src={user?.image}
                />
                <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
              </Avatar>
            </div>
          )}

          {!user && (
            <div>
              <Link href="/login">
                <Button className={"mr-4"}>Login</Button>
              </Link>
              <Link href="/register">
                <Button variant="danger-soft">Register</Button>
              </Link>
            </div>
          )}
        </div>
      </header>
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">
            <li>
              <Link href="/" className="block py-2">
                Home
              </Link>
            </li>
            <li>
              <Link href="/all-animals" className="block py-2">
                All Animals
              </Link>
            </li>
            <li>
              <Link href="/my-profile" className="block py-2">
                My Profile
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
