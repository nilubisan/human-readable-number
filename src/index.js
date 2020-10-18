module.exports = function toReadable (number) {

    const BILLION = 1000000000;
    const MILLION = 1000000;
    const THOUSAND = 1000;
    const HUNDRED = 100;
    const TEN = 10;
    const UNIT = 1;

    let result = "";
    let arr = [number,result];
    arr = byBillion(arr);
    arr = byMillion(arr);
    arr = byThousand(arr);
    arr = byHundred(arr);
    arr = byTen(arr);
    arr = toNine(arr)

    return arr[1];


    function byBillion(args) {
    let[number,textedNumber] = args;
    if(number/BILLION >= 1) {
        textedNumber += numberToText(Math.trunc(number/BILLION)) + " billion";  
        number = number%BILLION > 0 ? number%BILLION : "";
        if(number > 0) textedNumber += " ";
        return [number, textedNumber];
    }
    else return [number, textedNumber];
    }

    function byMillion(args) {
    let[number,textedNumber] = args;
    if(number/MILLION >= 1) {
        textedNumber += numberToText(Math.trunc(number/MILLION)) + " million";
        number = number%MILLION > 0 ? number%MILLION : "";
        if(number > 0) textedNumber += " ";
        return [number, textedNumber];
    }
    else return [number, textedNumber];
    }

    function byThousand(args) {
    let[number,textedNumber] = args;
    if(number/THOUSAND >= 1) {
        textedNumber += numberToText(Math.trunc(number/THOUSAND)) + " thousand";
        number = number%THOUSAND > 0 ? number%THOUSAND : "";
        if(number > 0) textedNumber += " ";
        return [number, textedNumber];
    }
    else return [number, textedNumber];
    }

    function byHundred(args) {
        let[number,textedNumber] = args;
    if(number/HUNDRED >= 1) {
        textedNumber += numberToText(Math.trunc(number/HUNDRED)) + " hundred";
        number = number%HUNDRED > 0 ? number%HUNDRED : "";
        if(number > 0) textedNumber += " ";
        return [number, textedNumber];
    }
    else return [number, textedNumber];
    }

    function byTen(args) {
        let[number,textedNumber] = args;
    if(number/TEN >= 1) {
        textedNumber += (number <= 19 ? numberToText(Math.trunc(number)) : 	   
        numberToText(Math.trunc(number/TEN)*TEN));
        number = number <= 19 ? "" : number%TEN;
        number > 0 ? textedNumber += " " : number = "";
        return [number, textedNumber];
    }
    else return [number, textedNumber];
    }

    function toNine(args) {
    let[number,textedNumber] = args;
    if(number >= 0 && number <= 9) {
    textedNumber += numberToText(number);
    return [number, textedNumber];
    }
    else return [number, textedNumber];
    }


    function numberToText(number) {
            console.log(`number - ${number}`);
    if(number > 20 && number <= 99 && (number%TEN != 0)) {
        return numberToText(Math.trunc(number/TEN)*TEN) + " " + numberToText(number%TEN);
    } 

    if(number > 100 && number <= 999 && (number%HUNDRED != 0)) {
        return numberToText(Math.trunc(number/HUNDRED)*HUNDRED) + " " + numberToText(number%HUNDRED);
    }

    switch(number) {
        case 0:
        return "zero";
        case 1: 
        return "one";
        case 2:
        return "two";
        case 3:
        return "three";  
        case 4:
        return "four";
        case 5:
        return "five";
        case 6:
        return "six";
        case 7:
        return "seven";
        case 8:
        return "eight";
        case 9:
        return "nine";
        case 10:
        return "ten";
        case 11:
        return "eleven";
        case 12:
        return "twelve";
        case 13:
        return "thirteen";  
        case 14:
        return "fourteen";
        case 15:
        return "fifteen";
        case 16:
        return "sixteen";
        case 17:
        return "seventeen";
        case 18:
        return "eighteen";
        case 19:
        return "nineteen";
        case 20:
        return "twenty";
        case 30:
        return "thirty";  
        case 40:
        return "forty";
        case 50:
        return "fifty";
        case 60:
        return "sixty";
        case 70:
        return "seventy";
        case 80:
        return "eighty";
        case 90:
        return "ninety";
        case 100:
        return "hundred";
        case 200:
        return "two hundred";
        case 300:
        return "three hundred";  
        case 400:
        return "four hundred";
        case 500:
        return "five hundred";
        case 600:
        return "six hundred";
        case 700:
        return "seven hundred";
        case 800:
        return "eight hundred";
        case 900:
        return "nine hundred";
        default :
        return "";
    }
}


}
