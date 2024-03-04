import { signIn } from 'next-auth/react';

export async function loginWithGoogle() {
  const res = await signIn('google', {
    redirect: false,
    callbackUrl: '/',
  });

  if (res?.error) {
    return {
      error: res.error,
    };
  }

  return {
    user: res?.ok!,
  };
}

export async function loginWithCredentials(email: string, password: string) {
  const res = await signIn('credentials', {
    email,
    password,
    redirect: false,
  });

  if (res?.error) {
    return {
      error: res.error,
    };
  }

  return {
    user: res?.ok!,
  };
}

export async function register({
  name,
  email,
  password,
  dob,
  phone_no,
  profile_img,
  gender,
  highest_edu,
}: {
  name: string;
  email: string;
  password: string;
  dob: string;
  phone_no: string;
  profile_img: string;
  gender: string;
  highest_edu: string;
}) {
  const res = await fetch(' /User/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      email,
      password,
      dob,
      phone_no,
      profile_img,
      gender,
      highest_edu,
    }),
  });
}

export async function setEntrepreneurData() {}

export async function setInvestor() {}