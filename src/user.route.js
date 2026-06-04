import express from 'express';
import { StatusCodes } from 'http-status-codes';
import { expressYupMiddleware } from 'express-yup-middleware';
import userController from './controllers/user.controller.js';
import userService from './services/user.service.js';
import { removeUser, getUser, addUser, updateUser } from './user.schemas.js';


const router = express.Router();

router.get('/all' , userController.getAllUsers);

router.get(
  '/:id', 
  expressYupMiddleware({ 
    schemaValidator: getUser, 
    expectedStatusCode: StatusCodes.BAD_REQUEST
  }),
  userController.getUsers
);
 

router.post(
  '/', 
  expressYupMiddleware({ 
    schemaValidator: addUser,
    expectedStatusCode: StatusCodes.BAD_REQUEST
  }), 
  userController.addUser
);

router.put(
  '/:id', 
  expressYupMiddleware({ 
  schemaValidator: updateUser, 
}), 
  userController.updateUser
);

router.delete(
  '/:id',
    expressYupMiddleware({ 
    schemaValidator: removeUser,
  }),
  userController.removeUser
);


export default router;