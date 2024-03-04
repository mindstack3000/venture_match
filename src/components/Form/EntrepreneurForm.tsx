/* eslint-disable react-hooks/exhaustive-deps */
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

function EntrepreneurForm() {
  const [address, setAddress] = useState({
    line1: "",
    line2: "",
    plotno: "",
    city: "",
    state: "",
    country: "",
    zip: "",
  });

  const [entrepreneurForm, setEntrepreneurForm] =
    useState<EntrepreneurFormType>({
      companyName: "",
      idea: "",
      partners: [],
      head_office_address: address,
      website: "",
      description: "",
      founded_on: "",
      managing_director: "",
      parent_org: "",
      valuation: 0,
      revenue: 0,
      roe: 0,
      pe_ratio: 0,
      book_val: 0,
      industry_pe_ratio: 0,
      de_ratio: 0,
      capital: 0,
      licensing: 0,
      supplyChain: [],
      patent: [],
      trademark: [],
      royalty: 0,
      profit: 0,
      return: 0,
      image: "",
      type: "",
    });

  useEffect(() => {
    setEntrepreneurForm({
      ...entrepreneurForm,
      head_office_address: address,
    });
  }, [address]);

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

                <div className="py-4 ">
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

                <div className="py-4 ">
                  <Label>Description</Label>
                  <Textarea
                    placeholder="Description"
                    className="bg-white"
                    onChange={(e) =>
                      setEntrepreneurForm({
                        ...entrepreneurForm,
                        description: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="py-4 ">
                  <Label>Founder Name</Label>
                  <Input
                    type="date"
                    placeholder="Founded On"
                    onChange={(e) =>
                      setEntrepreneurForm({
                        ...entrepreneurForm,
                        founded_on: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="py-4 ">
                  <Label>Managing Director</Label>
                  <Input
                    placeholder="Managing Director"
                    onChange={(e) =>
                      setEntrepreneurForm({
                        ...entrepreneurForm,
                        companyName: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="py-4 ">
                  <Label>Parent Organization</Label>
                  <Input
                    placeholder="Managing Director"
                    onChange={(e) =>
                      setEntrepreneurForm({
                        ...entrepreneurForm,
                        companyName: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="py-4 ">
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      let partners = entrepreneurForm.partners;
                      partners.push({
                        name: "",
                        equity: 0,
                      });

                      setEntrepreneurForm({
                        ...entrepreneurForm,
                        partners: partners,
                      });
                      console.log(entrepreneurForm);
                    }}
                  >
                    Add Partner
                  </Button>
                </div>

                {entrepreneurForm.partners.map((item, index) => (
                  <div className="m-5" key={index}>
                    <div>
                      <Label>Partner {index + 1} Name</Label>
                      <Input
                        placeholder={`Partner ${index + 1} Name`}
                        onChange={(e) => {
                          const partners = entrepreneurForm.partners;
                          partners[index].name = e.target.value;
                          setEntrepreneurForm({
                            ...entrepreneurForm,
                            partners: partners,
                          });
                        }}
                      />
                    </div>

                    <div key={index} className="py-4 ">
                      <Label>Partner {index + 1} Equity</Label>
                      <Input
                        placeholder={`Partner ${index + 1} Equity`}
                        type="number"
                        onChange={(e) => {
                          const partners = entrepreneurForm.partners;
                          partners[index].equity = parseInt(e.target.value);
                          setEntrepreneurForm({
                            ...entrepreneurForm,
                            partners: partners,
                          });
                        }}
                      />
                    </div>
                  </div>
                ))}

                <div className="py-4 ">
                  <Label>Business Website</Label>
                  <Input
                    placeholder="Managing Director"
                    onChange={(e) =>
                      setEntrepreneurForm({
                        ...entrepreneurForm,
                        website: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="w-1/2 m-auto">
                <Label>Address of Head Office</Label>
                <div className="ml-5">
                  <AddressForm address={address} setAddress={setAddress} />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-1/2  m-auto">
                <div className="py-4 ">
                  <Label>Valuation</Label>
                  <Input
                    type="number"
                    placeholder="Managing Director"
                    onChange={(e) =>
                      setEntrepreneurForm({
                        ...entrepreneurForm,
                        valuation: parseInt(e.target.value),
                      })
                    }
                  />
                </div>

                <div className="py-4 ">
                  <Label>Revenue</Label>
                  <Input
                    type="number"
                    placeholder="Managing Director"
                    onChange={(e) =>
                      setEntrepreneurForm({
                        ...entrepreneurForm,
                        valuation: parseInt(e.target.value),
                      })
                    }
                  />
                </div>

                <div className="py-4 ">
                  <Label>Return on Equity</Label>
                  <Input
                    type="number"
                    placeholder="Managing Director"
                    onChange={(e) =>
                      setEntrepreneurForm({
                        ...entrepreneurForm,
                        roe: parseInt(e.target.value),
                      })
                    }
                  />
                </div>

                <div className="py-4 ">
                  <Label>PE Ratio</Label>
                  <Input
                    type="number"
                    placeholder="Managing Director"
                    onChange={(e) =>
                      setEntrepreneurForm({
                        ...entrepreneurForm,
                        pe_ratio: parseInt(e.target.value),
                      })
                    }
                  />
                </div>

                <div className="py-4 ">
                  <Label>Book Value</Label>
                  <Input
                    type="number"
                    placeholder="Managing Director"
                    onChange={(e) =>
                      setEntrepreneurForm({
                        ...entrepreneurForm,
                        book_val: parseInt(e.target.value),
                      })
                    }
                  />
                </div>

                <div className="py-4 ">
                  <Label>Industry PE Ratio</Label>
                  <Input
                    type="number"
                    placeholder="Managing Director"
                    onChange={(e) =>
                      setEntrepreneurForm({
                        ...entrepreneurForm,
                        industry_pe_ratio: parseInt(e.target.value),
                      })
                    }
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-1/2  m-auto">
                <div className="py-4 ">
                  <Label>Debt Equity Ratio</Label>
                  <Input
                    type="number"
                    placeholder="Managing Director"
                    onChange={(e) =>
                      setEntrepreneurForm({
                        ...entrepreneurForm,
                        de_ratio: parseInt(e.target.value),
                      })
                    }
                  />
                </div>

                <div className="py-4 ">
                  <Label>Capital</Label>
                  <Input
                    type="number"
                    placeholder="Managing Director"
                    onChange={(e) =>
                      setEntrepreneurForm({
                        ...entrepreneurForm,
                        capital: parseInt(e.target.value),
                      })
                    }
                  />
                </div>

                <div className="py-4 ">
                  <Label>Licensing</Label>
                  <Input
                    type="number"
                    placeholder="Managing Director"
                    onChange={(e) =>
                      setEntrepreneurForm({
                        ...entrepreneurForm,
                        licensing: parseInt(e.target.value),
                      })
                    }
                  />
                </div>

                <div className="py-4 ">
                  <Label>Supply Chain</Label>
                  <Input
                    type="text"
                    placeholder="Managing Director"
                    onChange={(e) =>
                      setEntrepreneurForm({
                        ...entrepreneurForm,
                        supplyChain: e.target.value.split(","),
                      })
                    }
                  />
                </div>

                <div className="py-4 ">
                  <Label>Patent</Label>
                  <Input
                    type="text"
                    placeholder="Managing Director"
                    onChange={(e) =>
                      setEntrepreneurForm({
                        ...entrepreneurForm,
                        patent: e.target.value.split(","),
                      })
                    }
                  />
                </div>

                <div className="py-4 ">
                  <Label>Trademark</Label>
                  <Input
                    type="text"
                    placeholder="Managing Director"
                    onChange={(e) =>
                      setEntrepreneurForm({
                        ...entrepreneurForm,
                        trademark: e.target.value.split(","),
                      })
                    }
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-1/2  m-auto">
                <div className="py-4 ">
                  <Label>Royalty</Label>
                  <Input
                    type="number"
                    placeholder="Managing Director"
                    onChange={(e) =>
                      setEntrepreneurForm({
                        ...entrepreneurForm,
                        royalty: parseInt(e.target.value),
                      })
                    }
                  />
                </div>

                <div className="py-4 ">
                  <Label>Profit</Label>
                  <Input
                    type="number"
                    placeholder="Managing Director"
                    onChange={(e) =>
                      setEntrepreneurForm({
                        ...entrepreneurForm,
                        profit: parseInt(e.target.value),
                      })
                    }
                  />
                </div>

                <div className="py-4 ">
                  <Label>Return</Label>
                  <Input
                    type="number"
                    placeholder="Managing Director"
                    onChange={(e) =>
                      setEntrepreneurForm({
                        ...entrepreneurForm,
                        return: parseInt(e.target.value),
                      })
                    }
                  />
                </div>

                <div className="py-4 ">
                  <Label>Image</Label>
                  <Input
                    type="file"
                    placeholder="Managing Director"
                    onChange={(e) =>
                      setEntrepreneurForm({
                        ...entrepreneurForm,
                        image: e.target.value,
                      })
                    }
                  />
                </div>
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

export default EntrepreneurForm;