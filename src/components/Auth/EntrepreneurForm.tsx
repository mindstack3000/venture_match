"use client";
import React from "react";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function EntrepreneurForm() {
  const formSchema = z.object({
    name: z.string().min(3, {
      message: "Name must be at least 3 characters",
    }),
    idea: z
      .string()
      .min(10, {
        message: "Idea must be at least 10 characters",
      })
      .max(100, {
        message: "Idea must be at most 100 characters",
      }),
    description: z
      .string()
      .min(50, {
        message: "Idea must be at least 10 characters",
      })
      .max(250, {
        message: "Idea must be at most 250 characters",
      }),
    founded: z.string({
      required_error: "Please enter the date of founding",
    }),
    managingDirector: z.string().optional(),
    parentOrganization: z.string().optional(),
    businessWebsite: z.string().optional(),
    valuation: z.number().min(0.005, {
      message: "Valuation must be at least 50K.",
    }),
    revenue: z.number().min(0.005, {
      message: "Revenue must be at least 50K.",
    }),
    returnOnEquity: z.number().optional(),
    priceToEarningRatio: z.number().optional(),
    bookValue: z.number().optional(),
    industryPriceToEarning: z.number().optional(),
    debtToEquity: z.number().optional(),
    capital: z.number().min(0.005, {
      message: "Capital must be at least 50K.",
    }),

    lisencing: z.string().min(1, {
      message: "Please select Lisencing",
    }),
    royalty: z.number().optional(),
    profit: z.number().min(0, {
      message: "Please enter profit",
    }),
    return: z.number().optional(),
    type: z.string().min(10, {
      message: "Please enter the company type",
    }),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      idea: "",
      description: "",
      founded: "",
      managingDirector: "",
      parentOrganization: "",
      businessWebsite: "",
      valuation: "",
      revenue: "",
      returnOnEquity: "",
      priceToEarningRatio: "",
      bookValue: "",
      industryPriceToEarning: "",
      debtToEquity: "",
      capital: "",
      lisencing: "",
      royalty: "",
      profit: "",
      return: "",
      type: "",
    },
  });

  function abc(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="items-center w-screen h-screen">
      <div className="flex flex-row justify-center items-center bg-slate-300 gap-5 ">
        <Form {...form}>
          <form onSubmit={form.handleSubmit((e) => console.log(e))}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Name" {...field} />
                  </FormControl>
                  <FormDescription>Enter your name</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="idea"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Idea</FormLabel>
                  <FormControl>
                    <Input placeholder="Idea" {...field} />
                  </FormControl>
                  <FormDescription>Enter the Idea</FormDescription>
                </FormItem>
              )}
            />
            <Button className=" bg-black text-white" type="submit">
              Create Account
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default EntrepreneurForm;
