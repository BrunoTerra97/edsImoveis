import { Router } from 'express';

import { createImovel, listImovel, deleteImovel } from './controllers/ImovelController';

const routes = Router();

routes.get('/imoveis', listImovel);
routes.post('/imoveis', createImovel);
routes.delete('/imoveis/:id', deleteImovel)

export default routes;