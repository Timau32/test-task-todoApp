import express, { Request, Response } from 'express';

import cors from 'cors';
import 'dotenv/config';
import connectDb from './db';
import router from './routes';
import errorHandler from './middlewares/ErrorHandlerMiddleware';

const port = process.env.PORT || 8000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
app.use(errorHandler);

export const start = async () => {
  try {
    await connectDb();

    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (Err) {
    console.log(Err);
  }
};

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript + Node.js + Express!');
});

start();

export default app;
