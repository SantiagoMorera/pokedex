
import { Router } from 'express';
import { getPokedexController, getPokedexJSONController, getPokemonListController, getPokemonFinderController } from '../controllers/pokedexController.js';

const router = new Router()

router.get('/', getPokedexJSONController);
router.get('/list', getPokedexController);
router.get('/favoritos', getPokemonListController);
router.get('/buscar', getPokemonFinderController);


export { router as pokedexRouter };

