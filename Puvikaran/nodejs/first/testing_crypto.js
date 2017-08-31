var crypto = require('crypto');
/*
var mykey = crypto.createCipher('aes-128-cbc', 'samuel');
var mystr = mykey.update('decryption success', 'utf8', 'hex');
mystr += mykey.final('hex');

console.log(mystr);
*/

var mykey = crypto.createDecipher('aes-128-cbc', 'samuel');
var mystr = mykey.update('93524d0fef2e1b168fbdafa29f65c312a5031982ce3fcc661a8d14bc6be18b8c', 'hex', 'utf8');
mystr += mykey.final('utf8');

console.log(mystr);
