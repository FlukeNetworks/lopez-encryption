const crypto = require('crypto');

const algorithm = 'aes-256-cbc';
const secretKey = "wTWB(.pW/Fs(9j.nf6Jn9h<2dD'b[DeZ";
const iv = crypto.randomBytes(16);

const encryptData = (text) => {
    const cipher = crypto.createCipheriv(algorithm, secretKey, iv);
    const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);
    return iv.toString('hex') + '+' + encrypted.toString('hex');
};

const decryptData = (hash) => {
    const decipher = crypto.createDecipheriv(algorithm, secretKey, Buffer.from(hash.iv, 'hex'));
    const decrpyted = Buffer.concat([decipher.update(Buffer.from(hash.content, 'hex')), decipher.final()]);
    return decrpyted.toString();
};

module.exports = {
    encryptData,
    decryptData
};