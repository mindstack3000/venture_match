//LoginForm

'use client';
import React, { useContext } from 'react';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as action from '@/action';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
// import { FcFacebook, FcGithub, FcGoogle } from "react-icons/fc";
import Link from 'next/link';
import { UserContext } from '@/provider/userProvider';

const signInSchema = z.object({
  email: z.string().email('Email must be valid.'),
  password: z.string().min(6, 'Password Should have atleast 6 characters.'),
});
const LoginForm = () => {
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { setUser, user } = useContext(UserContext);

  async function onSubmit(values: z.infer<typeof signInSchema>) {
    const { user, error } = await action.LoginWithCredentials(
      values.email,
      values.password
    );

    if (error || user === null) {
      console.log(error);
    } else {
      setUser(user);
    }
  }
  return (
    <>
      <div className="signUpWrapper ">
        <div className="formWrapper items-center justify-center flex h-screen px-1.5 ">
          <div className="left"></div>
          <div className="right">
            <h3 className="text-center text-5xl font-semibold">Welcome Back</h3>

            <p className="text-center mb-5">
              Enter your email & password to access your Account
            </p>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-10">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="space-y-0 mb-2">
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="admin@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="space-y-0 mb-2">
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="********"
                          type="password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">
                  Login
                </Button>
                <div className="socialSignUpOptions">
                  {/* <Button variant={"outline"} className='socialFormBtn'><FaGoogle className="h-5 w-5"/></Button> */}
                </div>
              </form>
            </Form>

            <p className="text-center">
              Dont have an account?{' '}
              <Link href="/auth/register">Create Account</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
