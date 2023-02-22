import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import path from 'node:path';
import router from './router';

mongoose
  .set('strictQuery', false)
  .connect('mongodb://localhost:27017')
  .then(() => {
    const app = express();
    const port = 3333;

    app.use(morgan('tiny'));
    app.use(cors());
    app.use(helmet());
    app.use(express.json());
    app.use(router);
    app.use(
      '/uploads',
      express.static(path.resolve(__dirname, '..', 'uploads'))
    );

    app.listen(port, () => {
      console.log(
        `🚀 WaiterApp Server is online on port http://localhost:${port}`
      );
    });
  })
  .catch(() => {
    console.log('⚠️ Não foi possível conectar ao mongo');
  });
