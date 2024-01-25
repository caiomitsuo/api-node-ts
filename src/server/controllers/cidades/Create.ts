import { Request, Response } from 'express';

interface ICidade {
  nome: String,
}
export const create = (req: Request<{}, {}, ICidade>, res: Response) => {

  const data: ICidade = req.body;

  console.log(data);

  return res.send('Create city');
};
