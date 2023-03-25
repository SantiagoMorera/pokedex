import { DAO } from "../DAOs/DAOsFactory.js";
import logger from '../utils/winston.js';
import fetch from "node-fetch";

export const getPokedexService = async () => {
    try {
        return await DAO.getPokedexData()
    } catch (e) {
        logger.log('error', `❌ Error cant get pokémon service: ${e}`);
    }
};

/* Aqui te quedaste */
// export const getPokedexURLService = async () => {
//     try {
//         const data = await DAO.getPokedexData()
//         const urls = data.map(objeto => objeto.url)
//         const imagesURL = await fetch(urls)

//         console.log('PokeDataUrl:', imagesURL);
//     } catch (e) {
//         logger.log('error', `❌ Error cant get pokémon service: ${e}`);
//     }
// };
