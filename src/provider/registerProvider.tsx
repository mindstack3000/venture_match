'use client';

import { createContext, useState } from 'react';

const UserRegisterContext = createContext({
  name: '',
  email: '',
  password: '',
  dob: '',
  phone_no: '',
  profile_img: '',
  gender: '',
  highest_edu: '',
});

type Props = {
  children: React.ReactNode;
};

function RegisterProvider({ children }: Props) {
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
    dob: '',
    phone_no: '',
    profile_img: '',
    gender: '',
    highest_edu: '',
  });

  return (
    <UserRegisterContext.Provider value={registerData}>
      {children}
    </UserRegisterContext.Provider>
  );
}

export default RegisterProvider;
