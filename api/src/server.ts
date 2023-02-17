import express from 'express';

const app = express();

const port = 3333;

app.get('/', (request, response) => {
  return response.json({ message: 'Waiter App - Server Online' });
});

app.listen(port, () => {
  console.log(`🚀 WaiterApp Server is online on port http://localhost:${port}`);
});
