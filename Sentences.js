// Gets a string, divides it by its sentences, things like ; , ? ! '' etc... also count as sentences.
const str = "Hello world. i am 'karim shooti' aka moein. my favourite colors are blue blue blue etc... and im crazy; what the fuck? extra text, alright bye";

function SentenceFinder(str) {
    str = str.replace(/;/g, '.');
    str = str.replace(/!/g, '.');
    str = str.replace(/\?/g, '.');

    let sentences = str.split('.').map(sentence => sentence.trim()).filter(sentence => sentence.length > 0);
    let quotes = str.match(/'([^']+)'/g);
    sentences.push(quotes)

    return sentences;
}

console.log(SentenceFinder(str));