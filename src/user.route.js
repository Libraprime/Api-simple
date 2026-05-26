import express from 'express';
import { StatusCodes } from 'http-status-codes';

import userService from './services/user.service.js';


const router = express.Router();

const STATUS = {
  status: 'OK',
  NOT_FOUND: 'Not Found',
  failure: 'Failure',
};

router.get('/all' , (req, res) => {
  const users = userService.getAllUsers();
  
  if (users.length) {
    return res.status(StatusCodes.OK).send(users);
  }

  return res.status(StatusCodes.NOT_FOUND).send({
    status: STATUS.NOT_FOUND,
    Message: 'No users found',
  });
});

router.get('/:id', (req, res) => {
  //localhost:3000/v1/users/1
  const id = parseInt(req.params.id, 10);
  const user = userService.getUser(id);

  if (user) {
    return res.status(StatusCodes.OK).send({
      status: STATUS.status,
      user,
    });
  }

  return res.status(StatusCodes.NOT_FOUND).send({
    status: STATUS.NOT_FOUND,
    Message: `User with ID ${id} not found`,
  });
});
 

router.post('/', (req, res) => {
  const { body: user } = req;

  const addedUser = userService.addUser(user);

  // if (!user.name) {
  //   return res.status(StatusCodes.BAD_REQUEST).send({
  //     status: STATUS.failure,
  //     Message: 'Name is required'
  //   });
  // }

  return res.status(StatusCodes.CREATED).send({
    status: STATUS.status,
    user: addedUser,
  });
});

router.put('/:id', (req, res) => {
  const { body: user } = req;

  const id = parseInt(req.params.id, 10)

  const updatedUser = userService.updateUser(id, user);

  if (updatedUser) {
    return res.status(StatusCodes.OK).send({
      status: STATUS.status,
      user: updatedUser,
    });
  } else {
    return res.status(StatusCodes.NOT_FOUND).send({
      status: STATUS.failure,
      user: `User ${id} is not found`,
    });
  }
});

router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const deletedUser = userService.removeUser(id);

  if (deletedUser) {
    return res.status(StatusCodes.OK).send({
      status: STATUS.status,
      user: deletedUser,
    });
  } else {
    return res.status(StatusCodes.NOT_FOUND).send({
      status: STATUS.failure,
      user: `User ${id} is not found`,
    });
  }
});


export default router;