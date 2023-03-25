
import logger from '../../utils/winston.js';
import axios from 'axios';

export class DAOpokedexAPI {

    getPokedexData = async () => {
        try {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0');
            const pokemons = response.data.results;
            return pokemons;

        } catch (e) {
            logger.log('error', `❌ Error cant get pokémon data: ${e}`);
        }
    };



};