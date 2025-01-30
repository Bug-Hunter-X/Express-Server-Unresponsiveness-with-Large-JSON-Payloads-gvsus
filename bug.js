const express = require('express');
const app = express();
app.use(express.json());
app.post('/data', (req, res) => {
  const data = req.body;
  // Process data synchronously
  const result = processData(data); 
  res.json({ result });
});

function processData(data) {
  // Simulate a long-running operation
  let sum = 0;
  for (let i = 0; i < 1000000000; i++) {
    sum += i;
  }
  return sum;
}

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});