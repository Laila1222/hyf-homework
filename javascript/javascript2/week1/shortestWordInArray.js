    //Find the shortest word
const danishWhords = ['bil', 'plante', 'kaffe', 'bog', 'ø'];

function theShortestWord (arr) {
    let shortLength = Infinity;
    let shortest = "";

    if (arr.length > 0) {
        for (let words of arr) {
            if (words.length < shortLength) {
                shortLength = words.length;
                shortest = words;
                
                
            }
        }
    }
    return shortest;
}

console.log(theShortestWord(danishWhords));

function longestWord (arr) {
    let longLength = 0;
    let longest = "";

    if (arr.length > 0) {
        for (let words of arr) {
            if (words.length > longLength) {
                longLength = words.length;
                longest = words;
            }
        }
    }
    return longest;
};

console.log(longestWord(danishWhords));