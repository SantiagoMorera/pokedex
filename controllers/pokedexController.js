import { getPokedexService } from '../services/pokedexServices.js';
import logger from '../utils/winston.js';

export const getPokedexController = async (req, res) => {
    try {
        const pokemonList = await getPokedexService();

        res.render('pages/pokedexListado', { layout: 'logged', pokemonList });

    } catch (e) {
        res.status(500).send('Server Error')
        logger.log('error', `❌ Error cant get pokémon controller ${e}`);
    }
};
export const getPokedexJSONController = async (req, res) => {
    try {
        const pokemonList = await getPokedexService();
        res.json(pokemonList)
    } catch (e) {
        res.status(500).send('Server Error')
        logger.log('error', `❌ Error cant get pokémon controller ${e}`);
    }
};
export const getPokemonListController = async (req, res) => {
    try {
        res.render('pages/pokedexFavoritos', { layout: 'logged' })
    } catch (e) {
        res.status(500).send('Server Error')
        logger.log('error', `❌ Error cant get pokémon List controller ${e}`);
    }
};
export const getPokemonFinderController = async (req, res) => {
    try {
        res.render('pages/pokedexFinder', { layout: 'logged' })
    } catch (e) {
        res.status(500).send('Server Error')
        logger.log('error', `❌ Error cant get pokémon List controller ${e}`);
    }
};









