import LoginForm from '@/components/Auth/LoginForm';
import React from 'react';
import Image from 'next/image';
import RegisterForm from '@/components/Auth/RegisterForm';

type Props = {};

function LoginPage({}: Props) {
  return (
    <main className=" p-10 bg-primary">
      <div className="w-[90%] m-auto h-screen flex items-center justify-center p-10 bg-white rounded-lg">
        <div className="w-1/2 h-full relative rounded-lg">
          <Image
            src="/images/login.svg"
            alt="login"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="w-1/2">
          <RegisterForm />
        </div>
      </div>
    </main>
  );
}

export default LoginPage;
