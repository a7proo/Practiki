function rot13(str){
    const alphabet = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
        'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    let resultat = []

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        let lowerChar = char.toLowerCase();
        let index = alphabet.indexOf(lowerChar);
        
        if (index !== -1) {
            let newIndex = (index + 13) % 26;
            let newChar = alphabet[newIndex];
            resultat.push(char === lowerChar ? newChar : newChar.toUpperCase());
        } else {
            resultat.push(char);
        }
    } 
    return resultat.join('');
}

const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');
const encryptBtn = document.getElementById('encryptBtn');

encryptBtn.onclick = function() {
    outputText.value = rot13(inputText.value);
};
