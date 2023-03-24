
import { Router } from 'express';
import { getPokedexController, getPokedexJSONController, getPokemonListController, getPokemonFinderController } from '../controllers/pokedexController.js';

const router = new Router()

router.get('/', getPokedexJSONController);
router.get('/view', getPokedexController);
router.get('/list', getPokemonListController);
router.get('/finder', getPokemonFinderController);


export { router as pokedexRouter };

