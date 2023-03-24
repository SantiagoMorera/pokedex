import { DAOpokedexAPI } from "./DAOpokedex/DAOpokedexAPI.js";

import { MongoConnectSingleton } from "../utils/MongoConnectSingleton.js";

import logger from '../utils/winston.js';

let mode = process.argv[ 2 ];

export let DAO;

MongoConnectSingleton.getInstance();

if (mode == 'mongo') {
    logger.log('info', `✅ DAOpokedexAPI ON`);
    DAO = new DAOpokedexAPI;
} else {
    throw logger.log('warn', `⚠️ DAOfactory unsetted`);
};
