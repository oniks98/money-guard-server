import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import { getEnvVar } from './utils/getEnvVar.js';
import router from './routers/index.js';

import { notFoundHandler } from './middlewares/notFoundHandler.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { swaggerDocs } from './middlewares/swaggerDocs.js';

import { limiter } from './middlewares/limiter.js';
import { TransactionCollection } from './db/models/transactions.js';

const PORT = Number(getEnvVar('PORT', '8080'));

export const setupServer = async () => {
  const app = express();

  app.use(express.json());

  const corsOptions = {
    origin: ['http://localhost:5173', 'https://money-guard-psi.vercel.app'],
    credentials: true,
  };
  app.use(cors(corsOptions));

  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  app.use(limiter); // захист від атак

  await TransactionCollection.collection.createIndex({ userId: 1, date: 1 });
  //  створюємо індекс -Якщо немає індексів по userId і date MongoDB буде сканувати всю колекцію (повільно), фільтрувати транзакції, і вже потім рахувати.

  app.use('/api', router);
  app.use('/api-docs', swaggerDocs());

  app.use('*', notFoundHandler);
  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
