const decode = (bytestream) => {
	const decoder = new TextDecoder();
	return decoder.decode(bytestream);
}

const decrypt = async (cipher, key, iv) => {
	const encoded = await window.crypto.subtle.decrypt(
		{
			name: "AES-GCM",
			iv: iv
		},
		key,
		cipher
	);
	return decode(encoded);
}

const importKey = async (jwk) => {
	return window.crypto.subtle.importKey(
		"jwk",
		jwk,
		{
			name: "AES-GCM"
		},
		false,
		["decrypt"]
	);
};

const unpack = (packedText) => {
	const string = window.atob(packedText);
	const buffer = new ArrayBuffer(string.length);
	const bufferView = new Uint8Array(buffer);
	for (let i = 0; i < string.length; i++) {
		bufferView[i] = string.charCodeAt(i)
	}
	return buffer;
}

window.addEventListener(
	"DOMContentLoaded",
	async (event) => {
		// These are generated using the code from /contact/encoder/
		const encryptedEmail = "cPn5i9S1RSQfl6Hc4tmkAstbu3Hn2gXOAnXeSJ3JcSBI+1Oz1g==";
		const encryptionIV = "5mm2rCBh+GBWnjvG";
		const decryptionKey = {"alg":"A256GCM","ext":true,"k":"SPTU3A1jcAragTxLB0M-2idT5jfuU_2SLnvPDNND8do","key_ops":["encrypt","decrypt"],"kty":"oct"};

		// Decrypt, then replace the placeholder text with a mailto link
		const decryptedEmail = await decrypt(
			unpack(encryptedEmail),
			await importKey(decryptionKey),
			unpack(encryptionIV)
		);

		document.getElementById("emailPlaceholder").innerHTML = `<a href="mailto:${decryptedEmail}">${decryptedEmail}</a>`;
	}
);
