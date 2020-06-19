var CryptoJS = require("crypto-js"), SHA256 = require("crypto-js/sha256");

const data = 'This is the first block'
const dataObject = {
    id: 1,
    body: 'This is the first block',
    time: new Date().getTime().toString().slice(0, -3)
};

/**
 * Returns a hash of the object
 *
 * @param {Object} obj Object to pass
 * @param {string} enc If encoding is undefined, Hex encoding is used, otherwise it is Base64
 * @return {string} result Hash of the object
 */
function generateHash(obj, enc) {
    enc = enc || 'Hex';
    let result;
    var hash;
    hash = CryptoJS.SHA256(JSON.stringify(obj));
    result = enc == 'Hex' ? hash.toString(CryptoJS.enc.Hex) : hash.toString(CryptoJS.enc.Base64);
    return result
};


console.log(`SHA256 Hash, Hex encoding: ${generateHash(data)}`);
console.log(`SHA256 Hash, Base64 encoding: ${generateHash(data, 'Base64')}`);
console.log("************************************");
console.log(`SHA256 Hash, Hex encoding: ${generateHash(dataObject)}`);
console.log(`SHA256 Hash, Base64 encoding: ${generateHash(dataObject, 'Base64')}`);


