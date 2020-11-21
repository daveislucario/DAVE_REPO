import express from 'express';
import * as middleware from '../../middleware';
import {
    index,
    register,
    signin,
    update,
    remove,
} from './user.controller';

let userRouter = express.Router();

//userRouter.get('/', middleware.isAuthenticated, index);
//userRouter.post('/', create);
//userRouter.delete('/:id', remove);
//userRouter.put('/', update);
userRouter.get('/', middleware.isAuthenticated, index);
userRouter.put('/:id', middleware.isAuthenticated, update);
userRouter.delete('/:id', middleware.isAuthenticated, remove);
userRouter.post('/register', register);
userRouter.post('/signin', signin);
    

export default userRouter;



