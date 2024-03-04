/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import React, { useEffect, useState } from 'react';

import { Label } from '@/components/ui/label';

import { Button } from '@/components/ui/button';

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import AddressForm from './AddressForm';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

function EntrepreneurForm() {
  const [address, setAddress] = useState({
    line1: '',
    line2: '',
    plotno: '',
    city: '',
    state: '',
    country: '',
    zip: '',
  });
  //licencing boolean
  const [entrepreneurForm, setEntrepreneurForm] =
    useState<EntrepreneurFormType>({
      company_name: '',
      business_idea: '',
      partners: [],
      head_office_address: address,
      website: '',
      description: '',
      founded_on: '',
      managing_director: '',
      parent_org: '',
      valuation: 0,
      revenue: 0,
      roe: 0,
      pe_ratio: 0,
      book_val: 0,
      industry_pe_ratio: 0,
      de_ratio: 0,
      capital: 0,
      licensing: '',
      supplyChain: [],
      patent: [],
      trademark: [],
      royalty: 0,
      profit: 0,
      return_per: 0,
      image: '',
      type: '',
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
        <form className="w-1/2" onSubmit={(e) => console.log(e)}>
          <Swiper
            pagination={{ type: 'progressbar', dynamicBullets: true }}
            navigation={true}
            modules={[Pagination, Navigation]}>
            <SwiperSlide>
              <div className="md:w-1/2 w-full m-auto">
                <div className="py-4 ">
                  <Label>Company Name</Label>
                  <Input
                    placeholder="Company Name"
                    onChange={(e) =>
                      setEntrepreneurForm({
                        ...entrepreneurForm,
                        company_name: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="py-4 ">
                  <Label>Business Idea</Label>
                  <Textarea
                    placeholder="Business Idea"
                    className="bg-white"
                    onChange={(e) =>
                      setEntrepreneurForm({
                        ...entrepreneurForm,
                        business_idea: e.target.value,
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
                  <Label>Founded On</Label>
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
                        managing_director: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="py-4 ">
                  <Label>Parent Organization</Label>
                  <Input
                    placeholder="Parent Organization"
                    onChange={(e) =>
                      setEntrepreneurForm({
                        ...entrepreneurForm,
                        parent_org: e.target.value,
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
                        name: '',
                        equity: 0,
                      });

                      setEntrepreneurForm({
                        ...entrepreneurForm,
                        partners: partners,
                      });
                      // console.log(entrepreneurForm);
                    }}>
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
                    placeholder="Website"
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
                    placeholder="Valuation"
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
                    placeholder="Revenue"
                    onChange={(e) =>
                      setEntrepreneurForm({
                        ...entrepreneurForm,
                        revenue: parseInt(e.target.value),
                      })
                    }
                  />
                </div>

                <div className="py-4 ">
                  <Label>Return on Equity</Label>
                  <Input
                    type="number"
                    placeholder="Return on Equity"
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
                    placeholder="PE Ratio"
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
                    placeholder="Book Value"
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
                    placeholder="INdustry PE Ratio"
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
                    placeholder="Debt Equity Ratio"
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
                    placeholder="Capital"
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
                    type="string"
                    placeholder="Licensing"
                    onChange={(e) =>
                      setEntrepreneurForm({
                        ...entrepreneurForm,
                        licensing: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="py-4 ">
                  <Label>Supply Chain</Label>
                  <Input
                    type="text"
                    placeholder="Supply Chain"
                    onChange={(e) =>
                      setEntrepreneurForm({
                        ...entrepreneurForm,
                        supplyChain: e.target.value.split(','),
                      })
                    }
                  />
                </div>

                <div className="py-4 ">
                  <Label>Patent</Label>
                  <Input
                    type="text"
                    placeholder="Patent"
                    onChange={(e) =>
                      setEntrepreneurForm({
                        ...entrepreneurForm,
                        patent: e.target.value.split(','),
                      })
                    }
                  />
                </div>

                <div className="py-4 ">
                  <Label>Trademark</Label>
                  <Input
                    type="text"
                    placeholder="Trademark"
                    onChange={(e) =>
                      setEntrepreneurForm({
                        ...entrepreneurForm,
                        trademark: e.target.value.split(','),
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
                    placeholder="Royalty"
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
                    placeholder="Profit"
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
                    placeholder="Return"
                    onChange={(e) =>
                      setEntrepreneurForm({
                        ...entrepreneurForm,
                        return_per: parseInt(e.target.value),
                      })
                    }
                  />
                </div>

                <div className="py-4 ">
                  <Label>Image</Label>
                  <Input
                    type="file"
                    placeholder="Image"
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
