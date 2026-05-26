import users from '../data/users.data.js'; // Don't forget the .js extension!

const get = (userId) => {
    const findUser = users.find((user) => {
        if (user.id === userId) {
            return user;
        }
        return null;
    })
    
    return findUser;
};

const getAll = () => {
    return users;
};

const update = (userId, newDetails) => {
    let existingUser = null;
    let userIndex;
    
    users.map((user, index) => {
        if (user.id === userId) {
            userIndex = index;
            existingUser = user;
        }   
    });

    if (!existingUser) {
        return false; // Or throw an error, depending on your error handling strategy
    }

    const updatedUser = { ...existingUser, ...newDetails };

    users.splice(userIndex, 1, updatedUser);

    return updatedUser;
};

const insert = (details) => {
    // Note: users.length + 1 can cause ID collisions if you delete users.
    // For a simple API, this works for now.
    const newUser = {  id: users.length + 1, ...details};
    users.push(newUser);
    return newUser;
};

const remove = (userId) => {
    const index = users.findIndex(user => user.id === userId);
    
    if (index !== -1) {
        const deletedUser = users[index];
        users.splice(index, 1);
        return deletedUser; // Usually helpful to return what was deleted
    }
    return false;
};

export default {
    get,
    getAll,
    update,
    insert,
    remove
};