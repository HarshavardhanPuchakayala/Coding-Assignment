function reverseWords() {
    const userInput = document.getElementById("userInput").value;
    const reversedSentence = reverseWordsInSentence(userInput);
    document.getElementById("output").textContent = reversedSentence;
}

function reverseWordsInSentence(sentence) {
    const words = sentence.split(' ');
    const reversedWords = words.map(word => {
        return word.split('').reverse().join('');
    });
    return reversedWords.join(' ');
}