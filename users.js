const users = [];

function findUser(username){
  return new Promise(function(resolve, reject){
    const user = users.filter(e => e.username === username);
  })
}

function addUser(username, password){
  return new Promise(function(resolve,reject){
    const user = {
      username,
      password
    }

    users.push(user);

    resolve(user);
  })
}

function printUsers(){
  console.log(users)
}

module.exports = {findUser, addUser, printUsers}
