import CryptoJS from 'crypto-js'

export function encrypt(keyStr, word){ 
	var key  = CryptoJS.enc.Utf8.parse(keyStr.slice(0,16));
    var srcs = CryptoJS.enc.Utf8.parse(word);
    console.log(key);
    console.log(srcs);
	var encrypted = CryptoJS.AES.encrypt(srcs, key, {mode:CryptoJS.mode.ECB,padding: CryptoJS.pad.Pkcs7});
	return encrypted.toString();
}
