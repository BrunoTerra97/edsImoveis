import { Request, Response } from 'express';

import connection from '../database/connections';
import { randomBytes } from 'crypto';

const listImovel = async (req: Request, res: Response) => {
  // const { page = 1 } = req.query;
  
  const [ count ] = await connection('imoveis').count();

  const imoveis = await connection('imoveis').select('*').from('imoveis');
    
  return res.json({ imoveis });
}

const createImovel = async (req: Request, res: Response) => {
  const { 
    quartos,
    tipoImovel,
    suites,
    salasEstar,
    salasJantar,
    area,
    bairro,
    armario,
    andar,
    valorCondominio,
    portaria,
    descricao,
    aluguel 
  } = req.body;

  const [ id ] = await connection('imoveis').insert({
    id: randomBytes(24).toString("HEX"),
    quartos,
    tipoImovel,
    suites,
    salasEstar,
    salasJantar,
    area,
    bairro,
    armario,
    andar,
    valorCondominio,
    portaria,
    descricao,
    aluguel,
  });

  return res.json({ id });
};

const deleteImovel = async (req: Request, res: Response) => {
  const { id } = req.params;
  const imovelId = req.headers.authorization;

  const imovel = await connection('imoveis')
    .where('id', id)
    .select('id')
    .first();

  if (imovel.id !== imovelId) {
    return res.status(401).json({ error: 'Operation not permited.'})
  }

  await connection('imoveis').where('id', id).delete();
  return res.status(204).send();

}

export { createImovel, listImovel, deleteImovel };