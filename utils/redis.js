
import redis from "redis";
import session from "express-session";
import RedisStore from 'connect-redis';
import logger from "../utils/winston.js";

import { createClient } from 'redis';

export const client = createClient({
    password: 'euTjhrf8c8q3uSfOBy1Hi09iUvYanPjX',
    socket: {
        host: 'redis-14483.c84.us-east-1-2.ec2.cloud.redislabs.com',
        port: 14483
    },
    legacyMode: true,
});

export const RedisStoreSession = RedisStore(session);

export const redisConnect = () => {
    try {
        client.connect()
        logger.log('info', "✅ Redis from cloud ON")

    } catch (error) {
        throw logger.log('error', `❌ Can not connect to Redis! ${e}`)
    }
};