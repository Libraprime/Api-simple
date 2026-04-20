import express from 'express';
import { StatusCodes } from 'http-status-codes';

import userService from './services/user.service.js';


const router = express.Router();
// const port = 3000;

const STATUS = {
  status: 'OK',
  NOT_FOUND: 'Not Found',
  failure: 'Failure',
};


router.post('/add', (req, res) => {
  const { body: user } = req;

  const addedUser = userService.addUser(user);

  // if (!user.name) {
  //   return res.status(StatusCodes.BAD_REQUEST).send({
  //     status: STATUS.failure,
  //     Message: 'Name is required'
  //   });
  // }

  return res.status(StatusCodes.CREATED).send({
    status: STATUS.success,
    Message: addedUser,
  });
});

router.post('/update', (req, res) => {
  const { body: user } = req;

  const addedUser = userService.addUser(user);

  return res.status(StatusCodes.CREATED).send({
    status: STATUS.success,
    Message: addedUser,
  });
});

router.get('/ping', (req, res) => {
  res.status(StatusCodes.NOT_FOUND).send('OK');
});

export default router;