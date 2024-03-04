"use client";

import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import * as action from "@/action";
import { usePathname } from "next/navigation";
import { LogIn, UserPlus } from "lucide-react";
import { UserContext } from "@/provider/userProvider";
import { useRouter } from "next/navigation";


type Props = {};

function Navbar({}: Props) {
  const path = usePathname() ?? "/";
  const router = useRouter()

  // console.log(session);
  const { user,setUser } = useContext(UserContext);
  console.log(user);

  return (
    <header className="fixed top-0 left-0 z-50 flex items-center justify-between px-5 w-full bg-white">
      <div className="w-1/3 h-full">
        <div className="w-[50px] h-[50px] md:w-[80px] md:h-[80px] relative">
          <Image
            alt="logo"
            src={"/logo/logo.svg"}
            className="rounded-full"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      <nav className="w-2/3 flex items-center justify-center">
        <ul className="flex items-center justify-between gap-5 md:bg-secondary-100 p-1 rounded-full uppercase w-fit ">
          <li
            className={`text-center md:bg-white md:px-8 md:py-2.5 rounded-full text-base md:text-xl font-semibold hover:bg-secondary cursor-pointer ${
              path == "/" &&
              "md:bg-primary-100 text-primary-100-foreground hover:bg-primary-100"
            }`}>
            <Link href="/">Home</Link>
          </li>
          <li
            className={`text-center md:bg-white md:px-8 md:py-2.5 rounded-full text-base md:text-xl font-semibold hover:bg-secondary cursor-pointer ${
              path.includes("/dashboard") &&
              "md:bg-primary-100  hover:bg-primary-100"
            }`}>
            <Link href="/dashboard">Market</Link>
          </li>
          <li
            className={`text-center md:bg-white md:px-8 md:py-2.5 rounded-full text-base md:text-xl font-semibold hover:bg-secondary cursor-pointer ${
              path == "/explore" && "bg-primary-100  hover:bg-primary-100"
            }`}>
            <Link href="/">Explore</Link>
          </li>
        </ul>
      </nav>

      <div className="w-1/3 flex justify-end">
        {/* { session && session.user ? (
          <>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage src={session?.user.image || ''} />
                  <AvatarFallback>
                    {session.user.name
                      ? session.user.name[0].toUpperCase()
                      : ''}
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>

              <DropdownMenuContent>
                <DropdownMenuLabel>{session.user.name}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Dashboard</DropdownMenuItem>
                <DropdownMenuItem
                  className="text-destructive focus:bg-destructive focus:text-destructive-foreground"
                  onClick={action.logOut}>
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        ) : ( */}
        <>
          <div className="gap-1 hidden md:flex">
            <Button
              variant="link"
              size="lg"
              className="text-lg"
              onClick={async () => {
                const { user, error } = await action.LoginWithCredentials(
                  "help@CosIq.com",
                  "random@2"
                );
                console.log(user);
                if(user)
                setUser(user)
              router.push("/dashboard")
              }}>
              Login
            </Button>
            <Button size="lg" className="text-lg">
              Register
            </Button>
          </div>
          <div className="gap-1 md:hidden flex">
            <Button size="icon">
              <UserPlus />
            </Button>
          </div>
        </>
        {/* )} */}
      </div>
    </header>
  );
}

export default Navbar;
