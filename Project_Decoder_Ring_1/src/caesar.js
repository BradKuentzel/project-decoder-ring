function caesar(input, shift, encode = true) {
    const toBeCoded = input.toLowerCase();
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let coded = "";
    let newIndex = 0;

    if(shift === 0 || shift < -25 || shift > 25 || shift === undefined){
        return false
    }
    for(character in toBeCoded){
        alphabet.find(letter => {
            if(letter === toBeCoded[character]){
                encode ? newIndex = alphabet.indexOf(letter) + shift : newIndex = alphabet.indexOf(letter) - shift

                if(newIndex > 25){
                    newIndex -= 26;
                } else if(newIndex < 0){
                    newIndex += 26;
                }
                coded += alphabet[newIndex]
            }
        })
        if(alphabet.indexOf(toBeCoded[character].toLowerCase()) === -1) coded += toBeCoded[character]
    }
    return coded
}

module.exports = caesar;
