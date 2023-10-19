let protoArray1 = "3,6,9,12";
let protoArray2 = "A;C;M;E";
let protoArray3 = "space delimited string";
let protoArray4 = "Comma-spaces, might, require, typing, caution";

strings = [protoArray1, protoArray2, protoArray3, protoArray4];

//2) 
function reverseCommas() {
    if (strings[0].includes(',')) {
        let splitArray = strings[0].split(',');
        let reversedArray = splitArray.reverse();
        return reversedArray.join(',');
    } else {
        return strings[0];
    }
}

//3)
function semiDash() {
    if (strings[1].includes(';')) {
        let splitArray = strings[1].split(';');
        let sortedArray = splitArray.sort();
        return sortedArray.join('-');
    } else {
        return strings[1];
    }
}

//4)
function reverseSpaces() {
    if (strings[2].includes(' ')) {
        let splitArray = strings[2].split(' ');
        let reversedSortedArray = splitArray.sort().reverse();
        return reversedSortedArray.join(' ');
    } else {
        return strings[2];
    }
}

//5)
function commaSpace() {
    if (strings[3].includes(', ')) {
        let splitArray = strings[3].split(', ');
        let reversedArray = splitArray.reverse();
        return reversedArray.join(',');
    } else {
        return strings[3];
    }
}

// NOTE: Don't add or modify any code below this line or your program might not run as expected.
module.exports = {
	strings : strings, 
	reverseCommas : reverseCommas,
	semiDash: semiDash, 
	reverseSpaces : reverseSpaces,
	commaSpace : commaSpace
};

