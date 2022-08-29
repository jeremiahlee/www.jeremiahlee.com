/*
The code is for generating an encrypted email address
that can be decrypted on /contact/ by /contact/contact.js

How to use:
1. Generate an encryption key and initialization vector
2. Use the key and IV to encrypt the email address.
3. Save the key, IV, encrypted email string in contact.js
*/

const generateInitializationVector = () => {
	return window.crypto.getRandomValues(new Uint8Array(12));
};

const generateKey = async () => {
	return window.crypto.subtle.generateKey(
		{
			name: "AES-GCM",
			length: 256
		},
		true,
		["decrypt", "encrypt"]
	);
};

const exportKey = async (key) => {
	const exportedKey = await window.crypto.subtle.exportKey(
		"jwk",
		key
	);

	return JSON.stringify(exportedKey);
};

const encodeText = (text) => {
	const encoder = new TextEncoder();
	return encoder.encode(text);
};

const encrypt = async (text, key) => {
	const encodedText = encodeText(text);

	const iv = generateInitializationVector();

	const cipher = await window.crypto.subtle.encrypt(
		{
			name: "AES-GCM",
			iv: iv
		},
		key,
		encodedText
	);

	// The initialization vector can be stored safely in plaintext
	// alongside the encrypted data. It is needed for decryption.
	return {
		cipher,
		iv
	};
};

const pack = (buffer) => {
	return window.btoa(String.fromCharCode.apply(null, new Uint8Array(buffer)));
};

const workflow = async () => {
	const emailAddress = window.prompt("Enter email address");

	const key = await generateKey();

	const output = await encrypt(emailAddress, key);

	document.getElementById("output").innerHTML =
`		const encryptedEmail = "${pack(output.cipher)}";
		const encryptionIV = "${pack(output.iv)}";
		const decryptionKey = ${await exportKey(key)};`;
};

window.addEventListener(
	"DOMContentLoaded",
	(event) => {
		document.getElementById("startButton").addEventListener("click", workflow);
	}
);
