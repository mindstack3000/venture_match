'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { useSession } from 'next-auth/react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import * as action from '@/action';
import { usePathname } from 'next/navigation';

type Props = {};

function Navbar({}: Props) {
  const { data: session } = useSession();
  const path = usePathname() ?? '/';

  return (
    <header className="flex items-center justify-between px-5 w-full">
      <div className="w-1/3">
        <Image alt="logo" src={'/logo/logo.svg'} width={100} height={100} />
      </div>

      <nav className="w-2/3 flex items-center justify-center">
        <ul className="flex items-center justify-between gap-5 bg-secondary-100 p-1 rounded-full uppercase w-fit ">
          <li
            className={`text-center bg-white px-8 py-2.5 rounded-full text-xl font-semibold hover:bg-secondary cursor-pointer ${
              path == '/' &&
              'bg-primary-100 text-primary-100-foreground hover:bg-primary-100'
            }`}>
            <Link href="/">Home</Link>
          </li>
          <li
            className={`text-center bg-white px-8 py-2.5 rounded-full text-xl font-semibold hover:bg-secondary cursor-pointer ${
              path.includes('/dashboard') &&
              'bg-primary-100  hover:bg-primary-100'
            }`}>
            <Link href="/dashboard">Market</Link>
          </li>
          <li
            className={`text-center bg-white px-8 py-2.5 rounded-full text-xl font-semibold hover:bg-secondary cursor-pointer ${
              path == '/explore' && 'bg-primary-100  hover:bg-primary-100'
            }`}>
            <Link href="/">Explore</Link>
          </li>
        </ul>
      </nav>

      <div className="w-1/3 flex justify-end">
        {session && session.user ? (
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
        ) : (
          <>
            <Button variant="link" size="lg" className="text-lg">
              Login
            </Button>
            <Button size="lg" className="text-lg">
              Register
            </Button>
          </>
        )}
      </div>
    </header>
  );
}

export default Navbar;
