import express from 'express';
import mongoose from 'mongoose';

mongoose
  .set('strictQuery', false)
  .connect('mongodb://localhost:27017')
  .then(() => {
    const app = express();

    const port = 3333;

    app.get('/', (request, response) => {
      return response.json({ message: 'Waiter App - Server Online' });
    });

    app.listen(port, () => {
      console.log(
        `🚀 WaiterApp Server is online on port http://localhost:${port}`
      );
    });
  })
  .catch(() => {
    console.log('⚠️ Não foi possível conectar ao mongo');
  });
