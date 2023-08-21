function countWords(sentence) {
    let words = sentence.toLowerCase().split(/\s+/);
    let wordcount = {};
    words.forEach(word => {
        let noSymbols = word.replace(/[^a-z0-9]/g, '');
        if (wordcount.hasOwnProperty(noSymbols)) {
            wordcount[noSymbols]++;
        } else {
            wordcount[noSymbols] = 1;
        }
    });
    for (let word in wordcount) {
        console.log(`${word}: ${wordcount[word]}`);
    }
}

let sentence = "John the second is the son of John the first, while the second son of John the second is William the second.";
countWords(sentence);