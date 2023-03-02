import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import helmet from 'helmet';
import path from 'node:path';
import http from 'node:http';
import { Server } from 'socket.io';
import router from './router';

const app = express();
const server = http.createServer(app);
export const io = new Server(server);

mongoose
  .set('strictQuery', false)
  .connect('mongodb://localhost:27017')
  .then(() => {
    const port = 3333;

    app.use(morgan('common'));
    app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
    app.use((req, res, next) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', '*');
      res.setHeader('Access-Control-Allow-Headers', '*');

      next();
    });
    app.use(express.json());
    app.use(router);
    app.use(
      '/uploads',
      express.static(path.resolve(__dirname, '..', 'uploads'))
    );

    server.listen(port, () => {
      console.log(
        `🚀 WaiterApp Server is online on port http://localhost:${port}`
      );
    });
  })
  .catch(() => {
    console.log('⚠️ Não foi possível conectar ao mongo');
  });
