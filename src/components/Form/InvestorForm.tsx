"use client";
import React, { useEffect, useState } from "react";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import AddressForm from "./AddressForm";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import EntrepreneurForm from "./EntrepreneurForm";

function InvestorForm() {
    const [investorForm, setInvestorForm] = useState<InvestorFormType>({
      capital: 0,
      individual: true,
      experience: 0,
      description: '',
      occupation: '',
      company: '',
    });
  
    return (
      <div className="items-center w-screen ">
        <div className="flex flex-row justify-center items-center bg-slate-300 gap-5 ">
          <form className="w-1/2">
            <Swiper
              pagination={{ type: 'progressbar', dynamicBullets: true }}
              navigation={true}
              modules={[Pagination, Navigation]}
            >
              <SwiperSlide>
                <div className="md:w-1/2 w-full m-auto">
                  <div className="py-4 ">
                    <Label>Capital</Label>
                    <Input
                      type="number"
                      placeholder="Capital"
                      onChange={(e) =>
                        setInvestorForm({
                          ...investorForm,
                          capital: parseInt(e.target.value),
                        })
                      }
                    />
                  </div>
  
                  {/* Commented out the unused "Individual" input */}
                  <div className="py-4 ">
                    <Label>Individual</Label>
                    <Input
                      type="radio"
                      placeholder="Yes"
                      onChange={(e) =>
                        setInvestorForm({
                          ...investorForm,
                          // : parseInt(e.target.value),
                        })
                      }
                    />
                  </div>
  
                  <div className="py-4 ">
                    <Label>Experience</Label>
                    <Input
                      type="number"
                      placeholder="Experience"
                      onChange={(e) =>
                        setInvestorForm({
                          ...investorForm,
                          experience: parseInt(e.target.value),
                        })
                      }
                    />
                  </div>
                  <div className="py-4 ">
                    <Label>Description</Label>
                    <Input
                      type="string"
                      placeholder="Description"
                      onChange={(e) =>
                        setInvestorForm({
                          ...investorForm,
                          description: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="py-4 ">
                    <Label>Occupation</Label>
                    <Input
                      type="string"
                      placeholder="Occupation"
                      onChange={(e) =>
                        setInvestorForm({
                          ...investorForm,
                          occupation: e.target.value,
                        })
                      }
                    />
                  </div>
  
                  {/* Conditionally render the "Company" input based on the value of individual */}
                  {!investorForm.individual && (
                    <div className="py-4 ">
                      <Label>Company</Label>
                      <Input
                        type="string"
                        placeholder="Company"
                        onChange={(e) =>
                          setInvestorForm({
                            ...investorForm,
                            company: e.target.value,
                          })
                        }
                      />
                    </div>
                  )}
                </div>
                <div>
                <Button className="" type="submit">
                  Create Account
                </Button>
              </div>
              </SwiperSlide>
            </Swiper>
          </form>
        </div>
      </div>
    );
  }
  
  export default InvestorForm;