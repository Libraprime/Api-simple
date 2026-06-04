import userDao from '../models/persistance/user.DAO.js';

const getUser = (userId) => userDao.get(userId);


const getAllUsers = () => userDao.getAll();

const addUser = (details) => userDao.insert(details);

const updateUser = (userId, details) => userDao.update(userId, details);


const removeUser = (userId) => userDao.remove(userId);

export default { 
  addUser, 
  getUser,
  getAllUsers, 
  updateUser, 
  removeUser 
};