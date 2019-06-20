//Find the shortest word
const danishWhords = ['bil', 'plante', 'kaffe', 'bog', 'ø'];

//Find the shortest word
function theShortestWord (arr) {
    let shortLength = Infinity;
    let shortest = "";
    for (let words of arr) {
        if (words.length < shortLength) {
            shortLength = words.length;
            shortest = words;
            
            
        }
    }
    return shortest;
}

console.log(theShortestWord(danishWhords));

//Find the longest word
function longestWord (arr) {
    let longLength = 0;
    let longest = "";
        for (let words of arr) {
            if (words.length > longLength) {
                longLength = words.length;
                longest = words;
            }
        }
    return longest;
};

console.log(longestWord(danishWhords));