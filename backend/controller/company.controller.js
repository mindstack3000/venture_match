const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const Company = require("../model/company.model");

/*
 *@route  POST /Company/register
 */

/*
  todo user._id
  todo user.name
  todo user.email
  todo user.profile_img
  todo user.type

 */

router.post("/register", async (req, res) => {
  try {
    const {
      company_name,
      business_idea,
      description,
      founded_on,
      managing_director,
      partner,
      parent_org,
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
      type,
    } = req.body;

    // Check if the user already exists
    const user = await User.findOne({ email });
    if (user) return res.status(400).json({ msg: "Username already exists" });

    // Create a new user
    const newUser = new User({
      name,
      email,
      password,
      dob,
      phone_no,
      profile_img,
      gender,
      highest_edu,
      type: null,
    });

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Replace the password with the hashed password
    newUser.password = hashedPassword;

    // Save the user
    await newUser.save();

    // Sign the token
    const token = jwt.sign(
      { user_id: newUser._id, email: newUser.email },
      process.env.JWT_SECRET
    );

    if (token) {
      res.status(201).json({
        message: "User register successfully",
        token,
        user_id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        profile_img: newUser.profile_img,
        type: newUser.type,
      });
    } else {
      res.status(400).json({ message: "User register failed" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
});

/*
 * @route POST /User/login
 */

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate
    if (!email || !password)
      return res.status(400).json({ msg: "Not all fields have been entered." });

    // Check for existing user
    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ msg: "No User with this username" });

    // Validate password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

    // Sign the token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    if (token) {
      res.status(201).json({
        message: "User login successfully",
        token,
        user_id: user._id,
        name: user.name,
        email: user.email,
        profile_img: user.profile_img,
        type: user.type,
      });
    } else {
      res.status(400).json({ message: "User login failed" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
