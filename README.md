# Lopez Encryption using NodeJS
This repo is a acts a utility tool for encrypting app keys for LinkWareLive

## Dependencies
* Crptyo 
* Nodemon

## Running
nodemon index.js

## Changing API Keys for encryption
Add the variable and call the process method.  Encrypted and Decrypted values are printed on console.

## Note
 1. The Initilization Vector (iv) uses 16 random bytes for creating cipher. This has to excately 16 bytes.
 2. Encrypted text is a combination of iv + ciper
 3. While decrypting text one has to send input to decryptData method in an object format as 
      {
          iv: foo
          content: bar
      }
 4. Remember: The data is pulled from Docker environment variables. Hence these are already ecrypted.
