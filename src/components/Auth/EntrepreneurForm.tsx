"use client";
import React, { useState } from "react";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type EntrepreneurFormType = {
  companyName: string;
  idea: string;
  partnersNo: number;
  partners: {
    index: number;
    name: string;
    equity: number;
  }[];
};

function EntrepreneurForm() {
  const [entrepreneurForm, setEntrepreneurForm] =
    useState<EntrepreneurFormType>({
      companyName: "",
      idea: "",
      partnersNo: 0,
      partners: [],
    });

  return (
    <div className="items-center w-screen h-screen">
      <div className="flex flex-row justify-center items-center bg-slate-300 gap-5 ">
        <form>
          <div>
            <Label>Company Name</Label>
            <Input
              placeholder="Company Name"
              onChange={(e) =>
                setEntrepreneurForm({
                  ...entrepreneurForm,
                  companyName: e.target.value,
                })
              }
            />
          </div>

          <div>
            <Label>Idea</Label>
            <Textarea
              placeholder="Idea"
              className="bg-white"
              onChange={(e) =>
                setEntrepreneurForm({
                  ...entrepreneurForm,
                  idea: e.target.value,
                })
              }
            />
          </div>

          <div>
            <Label>Number of Partners</Label>
            <Input
              type="number"
              placeholder="Number of Partners"
              onChange={(e) =>
                setEntrepreneurForm({
                  ...entrepreneurForm,
                  partnersNo: parseInt(e.target.value),
                })
              }
            />
          </div>

          {Array.from({ length: entrepreneurForm.partnersNo }).map(
            (_, index) => (
              <div className="m-5">
                <div key={index}>
                  <Label>Partner {index + 1} Name</Label>
                  <Input
                    placeholder={`Partner ${index + 1} Name`}
                    onChange={(e) =>
                      setEntrepreneurForm({
                        ...entrepreneurForm,
                        partners: [
                          ...entrepreneurForm.partners,
                          {
                            index: index,
                            name: e.target.value,
                            equity: 0,
                          },
                        ],
                      })
                    }
                  />
                </div>

                <div key={index}>
                  <Label>Partner {index + 1} Equity</Label>
                  <Input
                    placeholder={`Partner ${index + 1} Equity`}
                    type="number"
                    onChange={(e) =>
                      setEntrepreneurForm({
                        ...entrepreneurForm,
                        partners: [
                          ...entrepreneurForm.partners,
                          {
                            index: index,
                            name: "",
                            equity: parseInt(e.target.value),
                          },
                        ],
                      })
                    }
                  />
                </div>
              </div>
            )
          )}

          <Button className=" bg-black text-white" type="submit">
            Create Account
          </Button>
        </form>
      </div>
    </div>
  );
}

export default EntrepreneurForm;
