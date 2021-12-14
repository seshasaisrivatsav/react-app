// TODO:
const usersMap = new Map();
    usersMap.set("sesha", "sesha");
    usersMap.set("test", "test");
    usersMap.set("admin", "admin");

/**
  * @param user
 * @return {Promise<String>} created user
 */
const addUser = (user) => {
    return new Promise((res, rej) => {
        if (usersMap.get(user.userName) != null) {
            rej("user already exists")
        } else {
            usersMap.set(user.userName, user.password);
            res(user.userName + "created");
        }
    });
}

const removeUser = user => {
    return new Promise((res, rej) => {
       if (usersMap.get(user.username)) {
           res(usersMap.delete(user.username));
       } else {
           rej(user.username + " not found");
       }
    });
}

const loginUser = user => {
    return new Promise((res, rej) => {
       if (usersMap.get(user.userName)) {
           res(usersMap.get(user.userName));
       } else {
           rej(user.userName + " not found");
       }
    });
}

const getUsers = () => {
    return usersMap;
}

export { addUser, removeUser, loginUser, getUsers };