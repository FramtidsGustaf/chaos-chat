import app from './app';
import http from 'http';
import logger from './utils/logger';
import dotenv from 'dotenv';
import connect from './utils/connect';
dotenv.config();

const server = http.createServer(app);
const PORT: number = Number(process.env.PORT);

const startServer = async () => {
  server.listen(PORT || 3000, async () => {
    logger.info(`Listening on port ${PORT}`);
    await connect();
  });
};

startServer();
