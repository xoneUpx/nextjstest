import Test from '../../lib/import-from-backend.js';

export default async (req,res)=> { 
  const data = await Test('/');
  console.log(data);
  res.status(202).json(data);
}
