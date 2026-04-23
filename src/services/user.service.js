import userDao from '../models/persistance/user.DAO.js';

const getUser = (userId) => {
  userDao.get(userId);
};

const addUser = (details) => {
  return userDao.insert(details);
};

const updateUser = (userId, details) => {
  return userDao.update(userId, details);
};

const removeUser = (userId) => {
  userDao.remove(userId);
};

export default { 
  addUser, 
  getUser, 
  updateUser, 
  removeUser 
};