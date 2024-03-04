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

export async function register() {}

export async function setEntrepreneurData() {}

export async function setInvestor() {}
