const login = require('./login');
const register = require('./register');
const users = require('./users');

users.addUser('Roger', '1234').then(console.log);
users.addUser('Brian', '12345').then(console.log);
users.findUser('Roger').then(console.log)
