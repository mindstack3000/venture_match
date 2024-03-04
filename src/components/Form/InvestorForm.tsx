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

function InvestorForm(){
    
    const[investorForm,setInvestorForm]=useState<InvestorFormType>({
        capital:0,
        individual: true,
        experience:0,
        description:'',
        occupation:'',
        company: '',
    })
    
    useEffect(() => {
        setInvestorForm({
          ...investorForm,
        });
      }, [investorForm]);
      return (
        <div className="items-center w-screen ">
          <div className="flex flex-row justify-center items-center bg-slate-300 gap-5 ">
            <form className="w-1/2">
              <Swiper
                pagination={{ type: "progressbar", dynamicBullets: true }}
                navigation={true}
                modules={[Pagination, Navigation]}
              >
                 <SwiperSlide>
              <div className="md:w-1/2 w-full m-auto">
                <div className="py-4 ">
                  <Label>Capital</Label>
                  <Input
                    placeholder="Capital"
                    onChange={(e) =>
                      setInvestorForm({
                        ...investorForm,
                        capital: e.target.value,
                      })
                    }
                  />
                </div>
                </div>
                </SwiperSlide>

             </Swiper>
        </form>
      </div>
    </div>
  );
}

export default InvestorForm;