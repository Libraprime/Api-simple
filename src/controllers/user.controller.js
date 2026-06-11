import userService from "../services/user.service.js";
import { StatusCodes } from "http-status-codes";


const STATUS = {
  status: 'OK',
  NOT_FOUND: 'Not Found',
  failure: 'Failure',
};

/**
 * Retrieves all users.
 * @param {*} req 
 * @param {*} res 
 * @returns 
*/

const getAllUsers = (req, res) => {
  const users = userService.getAllUsers();
  
  if (users.length) {
    return res.status(StatusCodes.OK).send(users);
  }

  return res.status(StatusCodes.NOT_FOUND).send({
    status: STATUS.NOT_FOUND,
    Message: 'No users found',
  });
}


/** * 
 * Retrieves a user by ID.
 * @param {*} req 
 * @param {*} res 
 * @returns 
*/
const getUsers = (req, res) => {
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
}


/** 
 * Adds a new user.
 * @param {*} req 
 * @param {*} res 
 * @returns 
*/
const addUser = (req, res) => {
  const { body: user } = req;

  const addedUser = userService.addUser(user);

  return res.status(StatusCodes.CREATED).send({
    status: STATUS.status,
    user: addedUser,
  });
}

/**
 * Updates an existing user by ID.
 * @param {*} req 
 * @param {*} res 
 * @returns 
*/
const updateUser = (req, res) => {
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
}

/**
 * Removes a user by ID.
 * @param {*} req 
 * @param {*} res 
 * @returns 
*/
const removeUser = (req, res) => {
  const id = parseInt(req.params.id, 10);

  const deletedUser = userService.removeUser(id);

  if (deletedUser) {
    return res.status(StatusCodes.OK).send({
      status: STATUS.status,
      Message: `User with ID ${id} deleted successfully`,
    });
  } else {
    return res.status(StatusCodes.NOT_FOUND).send({
      status: STATUS.failure,
      Message: `User with ID ${id} not found`,
    });
  }
}

export default {
  getAllUsers,
  getUsers,
  addUser,
  updateUser,
  removeUser
}