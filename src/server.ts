import app from './app';
import http from 'http';
import logger from './utils/logger';

const PORT: number = 3000;

const server = http.createServer(app);

const startServer = async () => {
  server.listen(PORT, () => {
    logger.info(`Listening on port ${PORT}`);
  });
};

startServer();
