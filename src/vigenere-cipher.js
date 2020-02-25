class VigenereCipheringMachine {
    constructor (isDirect) {
      this.isDirect = isDirect === false? false : true;
    }
    encrypt(message, key) {
      if (message && key) {

        if (!this.isDirect) {
          message = message.split('').reverse().join('');
        }
        let encryptedMessage = '';
        key = key.toUpperCase();
        message = message.toUpperCase();
        let keyPosition = 0;
        for (let i=0; i < message.length; i++) {
          if (message.codePointAt(i) > 64 && message.codePointAt(i) < 91) {
            encryptedMessage += String.fromCodePoint(((message.codePointAt(i) - 65) + (key.codePointAt(keyPosition % key.length) - 65)) % 26 + 65);
            keyPosition++;
          }else{
            encryptedMessage += message[i];
          }
        }
        return encryptedMessage;
      }else trow (new Error);
    }

    decrypt(encryptedMessage, key) {
      if (encryptedMessage && key) {
        
        if (!this.isDirect) {
          encryptedMessage = encryptedMessage.split('').reverse().join('');
        }

        let message = '';
        key = key.toUpperCase();
        encryptedMessage = encryptedMessage.toUpperCase();
        let keyPosition = 0;
        for (let i=0; i < encryptedMessage.length; i++) {
          if (encryptedMessage.codePointAt(i) > 64 && encryptedMessage.codePointAt(i) < 91) {
            message += String.fromCodePoint(((encryptedMessage.codePointAt(i) - 65) + 26 - (key.codePointAt(keyPosition % key.length) - 65)) % 26 + 65);
            keyPosition++;
          }else{
            message += encryptedMessage[i];
          }
        }
        // if (!this.isDirect) message.split('').reverse().join('');
        return message;
      }else trow (new Error);
    }
}

module.exports = VigenereCipheringMachine;
