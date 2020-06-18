var SHA256 = require("crypto-js/sha256");
var CryptoJS = require("crypto-js");
/**
 * Variables: Do not change variable values to be able to answer the quiz
 */
 
const data1 = "Blockchain Rock!";
console.log(typeof data1)

const dataObject = {
     id: 1,
     body: "adele",
     time: new Date().getTime().toString().slice(0,-3)
 };

console.log(JSON.stringify(data1));

const dataObject2 = JSON.stringify(dataObject)
 console.log(dataObject2)
 
// /**
//  * Step 3: Add code to the `generate hash function
//  * Function that generate the SHA256 Hash
//  * @param {*} obj
//  */
 
function generateHash(obj) {
     // Write your code here
    var hash = CryptoJS.SHA256(JSON.stringify(obj));
    //console.log(hash.toString(CryptoJS.enc.Hex));
    return hash.toString(CryptoJS.enc.Hex)

}
 
console.log(`SHA256 Hash: ${generateHash(data1)}`);
// console.log("************************************");
console.log(`SHA256 Hash: ${generateHash(dataObject2)}`);
 
// /**
//  * Run your application using `node app.js`
//  */





//console.log(CryptoJS.SHA256("Message"));

const data = "adele";

console.log(typeof data);

var hash = CryptoJS.SHA256(data);

console.log(hash);

console.log(typeof hash);

console.log(hash.toString(CryptoJS.enc.Hex));

console.log(hash.toString(CryptoJS.enc.Base64))