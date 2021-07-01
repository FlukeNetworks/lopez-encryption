const { encryptData, decryptData } = require('./crypto');

let devEnvApiSecret = 'networksupervision'
let testEnvApiSecret = 'networksupervision'
let prodEnvApiSecret = '9f1a-924c69967b30'

console.log("******************** DEV ENVIRONMENT ********************")
process(devEnvApiSecret);

console.log("******************** TEST ENVIRONMENT ********************")
process(testEnvApiSecret);

console.log("******************** PROD ENVIRONMENT ********************")
process(prodEnvApiSecret);



function process(input) {
    const encryptedText = encryptData(input);
    console.log("ENCRYPTED TEXT: " + encryptedText);
    let splitText = encryptedText.split('+');
    let dataToDecrypt = {
        iv: splitText[0],
        content: splitText[1]
    };
    const decryptedText = decryptData(dataToDecrypt);
    console.log("DECRYPTED TEXT: " + decryptedText);
}