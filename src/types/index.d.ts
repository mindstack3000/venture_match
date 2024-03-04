type EntrepreneurFormType = {
  companyName: string;
  idea: string;
  description: string;
  founded_on: string;
  managing_director: string;
  parent_org: string;
  partners: {
    name: string;
    equity: number;
  }[];
  website: string;
  head_office_address: {
    line1: string;
    line2: string;
    plotno: string;
    city: string;
    state: string;
    country: string;
    zip: string;
  };
  valuation: number;
  revenue: number;
  roe: number;
  pe_ratio: number;
  book_val: number;
  industry_pe_ratio: number;
  de_ratio: number;
  capital: number;
  licensing: number;
  supplyChain: string[];
  patent: string[];
  trademark: string[];
  royalty: number;
  profit: number;
  return: number;
  type: string;
  image: string;
};
type InvestorFormType = {
  capital:number;
  individual?:boolean;
  experience?:number;
  description:string;
  occupation?:string;
  company?: string;
};
