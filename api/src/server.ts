import express from 'express';
import mongoose from 'mongoose';
import router from './router';

mongoose
  .set('strictQuery', false)
  .connect('mongodb://localhost:27017')
  .then(() => {
    const app = express();

    const port = 3333;

    app.use(router);

    app.listen(port, () => {
      console.log(
        `🚀 WaiterApp Server is online on port http://localhost:${port}`
      );
    });
  })
  .catch(() => {
    console.log('⚠️ Não foi possível conectar ao mongo');
  });
