import express, { Request, Response } from 'express';
import config from './config';
import { errorHandler } from './middlewares/error.middleware';
import { requestLogger } from './middlewares/logger.middleware';
import logger from './config/logger';
import { startConsumer } from './kafka/consumer';
import { connectProducer } from './kafka/producer';

const app = express();
const PORT = config.PORT;

app.use(express.json());

// Test Endpoint
app.get('/', (req: Request, res: Response) => {
  logger.info("/ endpoint hit")
  res.json({ message: 'Hello from Express with TypeScript and ESM!' });
});

app.use(errorHandler);
app.use(requestLogger);

const start = async () => {
  await connectProducer();
  await startConsumer();
  app.listen(PORT, () => {
    logger.info(`⚡️[server]: Server is running at http://localhost:${PORT}`);
  });
};

start();

