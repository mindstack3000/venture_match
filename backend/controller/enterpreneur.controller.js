const express = require("express");
const router = express.Router();
const Entrepreneur = require("../model/entrepreneur.model");
const Partner = require("../model/partner.model");
const Company = require("../model/company.model");

/*
 *@route  POST /entrepreneur/register/:id
 */

router.post("/register/:id", async (req, res) => {
  try {
    const {
      company_name,
      business_idea,
      description,
      founded_on,
      managing_director,
      parent_org,
      website,
      partners,
      head_office_address,
      valuation,
      revenue,
      roe,
      pe_ratio,
      book_val,
      industry_pe_ratio,
      de_ratio,
      capital,
      licensing,
      supply_chain,
      patent,
      trademark,
      royalty,
      profit,
      return_per,
      type,
      image,
    } = req.body;

    const id = req.params.id;

    const newPartners = await Promise.all(
      partners &&
        partners.map(async (item) => {
          console.log(item)
          let newPartner = new Partner({
            name: item.name,
            equity: item.equity,
          });
          return await newPartner.save();
        })
    );
    const partnerIds = newPartners.map((partner) => partner._id);

    type = "Entreperneur";
    const newCompany = new Company({
      company_name,
      business_idea,
      description,
      founded_on,
      managing_director,
      parent_org,
      partners: partnerIds,
      website,
      head_office_address,
      valuation,
      revenue,
      roe,
      pe_ratio,
      book_val,
      industry_pe_ratio,
      de_ratio,
      capital,
      licensing,
      supply_chain,
      patent,
      trademark,
      royalty,
      profit,
      return_per,
      type ,
      image,
    });

    await newCompany.save();

    const newEntrepreneur = new Entrepreneur({
      user_id: id,
      company_id: newCompany._id,
    });

    await newEntrepreneur.save();

    res.status(201).json({
      message: "Company registered successfully",
      company: newCompany,
      entrepreneur: newEntrepreneur,
      isRegistered: true,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

/* 
  !GET /enterpreneur/rank/
*/

router.get("/rank", async (req, res) => {
  try{
    const getCompany = await Company.find({ type : "Entreperneur"}).exec();
    console.log(getCompany);
  }catch(err){
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
})

module.exports = router;
