let lib = {
    "A": ".-",    "B": "-...",  "C": "-.-.",  "D": "-..",
    "E": ".",     "F": "..-.",  "G": "--.",   "H": "....",
    "I": "..",    "J": ".---",  "K": "-.-",   "L": ".-..",
    "M": "--",    "N": "-.",    "O": "---",   "P": ".--.",
    "Q": "--.-",  "R": ".-.",   "S": "...",   "T": "-",
    "U": "..-",   "V": "...-",  "W": ".--",   "X": "-..-",
    "Y": "-.--",  "Z": "--..",  " ": " ",

    "1": ".----", "2": "..---", "3": "...--", "4": "....-", "5": ".....",
    "6": "-....", "7": "--...", "8": "---..", "9": "----.", "0": "-----",

    ".": ".-.-.-", ",": "--..--", "?": "..--..",  "'": ".----.",
    "/": "-..-.",  "(": "-.--.",  ")": "-.--.-",  "&": ".-...",
    ":": "---...", ";": "-.-.-.", "=": "-...-",   "+": ".-.-.",
    "-": "-....-", "_": "..--.-", "\"": ".-..-.", "$": "...-..-",
    "!": "-.-.--", "@": ".--.-."
};

function isEmpty(obj) {
    if (Object.keys(obj).length > 0)
        console.log("False");
    else
        console.log("True");
}

function toHuman(string) {
    let human = [];
    let humanString = "";
    let stringAsArray = string.split("|");
    for (let element in stringAsArray) {
        for (let key in lib) {
            if (lib[key] === stringAsArray[element])
                human.push(key);
        }
    }
    for (let i in human)
        humanString += human[i];
    console.log(humanString);
}