function reverseWord(word) {
    var reversed = '';
    for (var i = word.length - 1; i >= 0; i--) {
        reversed += word[i];
    }
    return reversed;
}

function reverseSentenceWords(sentence) {
    var words = sentence.split(' '); 
    var reversedSentence = '';

    for (var i = 0; i < words.length; i++) {
        reversedSentence += reverseWord(words[i]);

        if (i < words.length - 1) {
            reversedSentence += ' '; 
        }
    }

    return reversedSentence;
}

var inputSentence = "This is a sunny day";
var reversedSentence = reverseSentenceWords(inputSentence);
console.log(reversedSentence); 
