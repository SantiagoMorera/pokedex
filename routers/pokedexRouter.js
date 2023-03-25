
import { Router } from 'express';
import { checkAuthentication } from '../middleware/passportAuth.js'
import { getPokedexController, getPokedexJSONController, getPokemonListController, getPokemonFinderController } from '../controllers/pokedexController.js';

const router = new Router()




router.get('/', checkAuthentication, getPokedexJSONController);
router.get('/list', checkAuthentication, getPokedexController);
router.get('/favoritos', checkAuthentication, getPokemonListController);
router.get('/buscar', checkAuthentication, getPokemonFinderController);


export { router as pokedexRouter };

