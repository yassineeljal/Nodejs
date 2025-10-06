import { Router } from 'express';
import { createUser, listUsers, getUser, updateUser, deleteUser } from '../controllers/user.controller';
const r = Router();
r.post('/', createUser);
r.get('/', listUsers);
r.get('/:id', getUser);
r.put('/:id', updateUser);
r.delete('/:id', deleteUser);
export default r;
