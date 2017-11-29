const login = require('./login');
const register = require('./register');
const users = require('./users');

users.addUser('Roger', '1234').then(console.log);
users.addUser('Roger', '12345').then(console.log);
