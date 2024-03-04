'use client';

import { Button } from '@/components/ui/button';
import { useSession } from 'next-auth/react';

import * as action from '@/action';

export default function Home() {
  const { data: session } = useSession();
  console.log(session);

  return (
    <main>
      <Button onClick={() => action.loginWithGoogle()}>Login</Button>
    </main>
  );
}
