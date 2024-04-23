import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Reports Route");
});

export default router;

// Things to do:
// 1. Get more details when register
// 2. The seller name, phone and email id should be fetched from jwt token
// 3. Sell page whole scrap
// 4. Add report page
// 5. Add report route
