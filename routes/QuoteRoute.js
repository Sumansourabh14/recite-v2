const express = require("express");
const {
  createQuoteInDb,
  getQuotesFromDb,
  getRandomQuoteFromDb,
  searchQuotes,
} = require("../controllers/quoteController");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ success: true, message: "Recite - Quotes API is running..." });
});

router.get("/quotes", getQuotesFromDb);
router.get("/random", getRandomQuoteFromDb);
router.get("/quotes/search", searchQuotes);
router.post("/quote", createQuoteInDb);

module.exports = router;
