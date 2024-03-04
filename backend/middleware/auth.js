const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.header("Authorization");
    const token = authHeader && authHeader.split(" ")[1];

    if (!token)
      return res.status(401).json({ msg: "No token, authorization denied" });
    
    try {
      // Verify the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Add the user id to the request object
      req.user_id = decoded.user_id;
      req.entrepreneur_id = decoded.entrepreneur_id;
      req.investor_id = decoded.investor_id;
      req.admin_id = decoded.admin_id;
      req.email  = decoded.email;

      // Call the next middleware
      next();
    } catch (err) {
      res.status(401).json({ msg: "Token is not valid" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = authMiddleware;
