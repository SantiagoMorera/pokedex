import { DAO } from "../DAOs/DAOsFactory.js";
import logger from '../utils/winston.js';

export const getPokedexService = async () => {
    try {
        return await DAO.getPokedexData()
    } catch (e) {
        logger.log('error', `❌ Error cant get pokémon service: ${e}`);
    }
};

