const alphabet = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

function rot13(str) {
    let result = '';
    const changedLetters = new Set();
    
    for (const char of str) {
        const lowerChar = char.toLowerCase();
        const index = alphabet.indexOf(lowerChar);
        
        if (index !== -1) {
            const newIndex = (index + 13) % 26;
            const newChar = alphabet[newIndex];
            result += char === lowerChar ? newChar : newChar.toUpperCase();
            changedLetters.add(`${lowerChar} → ${newChar}`);
        } else {
            result += char;
        }
    }
    
    // Выводим преобразованные буквы
    if (changedLetters.size > 0) {
        document.getElementById('changedLetters').innerHTML = 
            `Изменённые буквы:<br>${Array.from(changedLetters).join('<br>')}`;
        document.getElementById('alphabetChanged').style.display = 'block';
    } else {
        document.getElementById('alphabetChanged').style.display = 'none';
    }
    
    return result;
}

document.getElementById('encryptBtn').onclick = function() {
    const text = document.getElementById('inputText').value;
    document.getElementById('outputText').value = rot13(text);
};

document.getElementById('alphabetOriginal').textContent = 
    `Алфавит: ${alphabet.join(' ')}`;