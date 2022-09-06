import mongoose from 'mongoose';
import logger from './logger';

async function connect(): Promise<void> {
  const DBURI: string = String(process.env.DBURI);
  try {
    await mongoose.connect(DBURI);
    logger.info('Connected to DB');
  } catch (err) {
    logger.error('Could not connect to db');
    process.exit(1);
  }
}

export default connect;
