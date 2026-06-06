import express, { Request, Response } from 'express';
import config from './config';
import { errorHandler } from './middlewares/error.middleware';

const app = express();
const PORT = config.PORT;

app.use(express.json());

app.use(errorHandler);

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello from Express with TypeScript and ESM!' });
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
