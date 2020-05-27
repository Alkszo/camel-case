// first I write a function that replaces a string charcter with specified index, it'll be needed later
// replaceChar takes three arguments: a string, a character to be swaped in and an index number
// that specifies where the swap will take place
// so, for example, expected output of replaceChar('test', 'x', 2) will be 'text'
const replaceChar = (origString, newChar, index) => {
    let firstPart = origString.substr(0, index);
    let lastPart = origString.substr(index + 1);
      
    return firstPart + newChar + lastPart;
}
// now the camel function proper consist of two while loops utilising indexOf method
// a while loop will continue to run as long as conditions in brckets checks as true
// index.Of method takes character(s) as argument and returns the index of their first occurance 
// in a string upon which indexOf is called
// it also returns -1 when the string does not contain given character, 
// so it's a handy method for checking if undesired characters ('_' and ' ' in this case) are eliminated
const toCamelCase = (str) => {
    while (str.indexOf('_') !== -1) { //this will run untill there are '_' in the string
        let index = str.indexOf('_') + 1; //this identifies the index of character following first underscore in the string
        let upper = str[index].toUpperCase(); //this takes said character to upper case
        str = replaceChar(str, upper, index); //this uses previously written function to replace a character after underscore with it's uppercase version
        str = str.replace('_', '-'); //this replaces first underscore in the string with dash; while loop will go over the string again and execute if there are any '_' left
    }
    while (str.indexOf(' ') !== -1) { //a similar loop for spaces
        let index = str.indexOf(' ') + 1; //identify character after space
        let upper = str[index].toUpperCase(); //uppercase it
        str = replaceChar(str, upper, index); //replace character
        str = str.replace(' ', ''); //delete space
    }
    // and for the final touch I make sure the first character is in lower case
    return str.charAt(0).toLowerCase() + str.substr(1);
}
console.log(toCamelCase('I want to_be a_camel'))
console.log(toCamelCase('Camelise me'))
console.log(toCamelCase('Camels_camels everywhere'))
console.log(toCamelCase('Do you fancy living in a desert?'))
