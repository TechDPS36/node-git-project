// Deve ser a primeira linha!!
require("dd-trace").init({
  profiling: true,
  runtimeMetrics: true
});

const express = require("express");
const app = express();
const port = 3006;

app.get("/", (req, res) => {
  res.send("Hello World from Node.js + Datadog! 🚀");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});