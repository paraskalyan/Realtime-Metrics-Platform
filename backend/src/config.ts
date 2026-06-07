import dotenv from 'dotenv';
dotenv.config();

export default {
    PORT: process.env.PORT || 4000,
    REDIS_URL: process.env.REDIS_URL || 'redis://127.0.0.1',
    REDIS_PORT: process.env.REDIS_PORT || 6379,
}