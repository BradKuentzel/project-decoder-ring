function substitution(input, alphabet, encode = true) {
    input = input.toLowerCase();
    if(!alphabet || !input || alphabet.length !==26){
        return false;
    }
    let result = '';
    let abc = 'abcdefghijklmnopqrstuvwxyz'
    const alphabetCheck = [];
    for(let i = 0;i < alphabet.length;i++){
        alphabetCheck.push(alphabet[i])
    }
    let duplicateChars = alphabetCheck.some((char, newArr)=> alphabetCheck.indexOf(char) !== newArr);
    if(duplicateChars){
        return false
    }
    for(let j = 0;j < input.length;j++){
        const character = input[j];
        const coded = alphabet.indexOf(input[j]);
        const trueabc = abc.indexOf(input[j]);
        if(alphabet.indexOf(input[j]) === -1){
            result += input[j];
            continue;
        }
        result += encode ? alphabet[trueabc] : abc[coded];
    }
    return result;
  }

module.exports = substitution;
