const express = require("express");
const {
  createQuoteInDb,
  getQuotesFromDb,
  getRandomQuoteFromDb,
  searchQuotes,
} = require("../controllers/quoteController");
const { path } = require("path");
const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "index.html"));
});

router.get("/quotes", getQuotesFromDb);
router.get("/random", getRandomQuoteFromDb);
router.get("/quotes/search", searchQuotes);
router.post("/quote", createQuoteInDb);

module.exports = router;
