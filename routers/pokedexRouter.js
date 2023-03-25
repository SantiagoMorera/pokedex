
import { Router } from 'express';
import { checkAuthentication } from '../middleware/passportAuth.js'
import { getPokedexController, getPokedexJSONController, getPokedexListController, getPokedexFinderController, getPokedexURLController } from '../controllers/pokedexController.js';

const router = new Router()




router.get('/', checkAuthentication, getPokedexJSONController);
router.get('/list', checkAuthentication, getPokedexController);
router.get('/favoritos', checkAuthentication, getPokedexListController);
router.get('/buscar', checkAuthentication, getPokedexFinderController);
router.get('/url', checkAuthentication, getPokedexURLController);



export { router as pokedexRouter };

