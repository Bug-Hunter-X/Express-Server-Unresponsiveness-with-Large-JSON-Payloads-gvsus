const express = require('express');
const app = express();
app.use(express.json());

app.post('/data', async (req, res) => {
  const data = req.body;
  try {
    const result = await processData(data);
    res.json({ result });
  } catch (error) {
    console.error('Error processing data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

async function processData(data) {
  // Simulate a long-running operation
  return new Promise((resolve) => {
    let sum = 0;
    setTimeout(() => {
      for (let i = 0; i < 1000000000; i++) {
        sum += i;
      }
      resolve(sum);
    }, 0);
  });
}

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});