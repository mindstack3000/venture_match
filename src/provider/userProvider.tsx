'use client';

import React, { createContext, useState } from 'react';

type Props = {
  children: React.ReactNode;
};

export const UserContext = createContext<{
  user: {
    id: string;
    token: string;
    image: string;
    name: string;
    email: string;
    role: string;
  };
  setUser: (user: {
    id: string;
    token: string;
    image: string;
    name: string;
    email: string;
    role: string;
  }) => void;
}>({
  user: {
    id: '',
    token: '',
    image: '',
    name: '',
    email: '',
    role: '',
  },
  setUser: (user: {
    id: string;
    token: string;
    image: string;
    name: string;
    email: string;
    role: string;
  }) => {},
});

function UserProvider({ children }: Props) {
  const [user, setUser] = useState({
    id: '',
    token: '',
    image: '',
    name: '',
    email: '',
    role: '',
  });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
