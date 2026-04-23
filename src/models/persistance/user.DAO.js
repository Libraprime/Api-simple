import users from '../data/users.data.js'; // Don't forget the .js extension!

const get = (userId) => {
    // Simple and clean: find returns the first match or undefined
    return users.find((user) => user.id === userId);
};

const getAll = () => {
    return users;
};

const update = (newDetails) => {
    let isUserFound = false
    users.map((user, index) => {
        if (user.id === newDetails.id) {
            
        }   
    })

    // const index = users.findIndex(user => user.id === newDetails.id);
    
    // if (index !== -1) {
    //     // Merge existing user data with new details
    //     users[index] = { ...users[index], ...newDetails };
    //     return users[index];
    // }
    // return null;
};

const insert = (details) => {
    // Note: users.length + 1 can cause ID collisions if you delete users.
    // For a simple API, this works for now.
    const newUser = { ...details, id: users.length + 1 };
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