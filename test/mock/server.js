/* eslint-disable */
const express = require("express");
const cors = require("cors");
const { generateMockSymbols, generateMockIncomeStatements } = require("./data");

const app = express();
const port = 4000;

app.use(cors());

app.get("/api/income/:symbol", (req, res) => {
  const { symbol } = req.params;
  const count = parseInt(req.query.count) || 25;
  const data = generateMockIncomeStatements(symbol, count);
  res.json(data);
});

app.get("/api/symbols", (req, res) => {
  const count = parseInt(req.query.count) || 25;
  const data = generateMockSymbols(count);
  res.json(data);
});

app.listen(port, () => {
  console.log(`Mock API server running at http://localhost:${port}`);
});
