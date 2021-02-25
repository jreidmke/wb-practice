//With 2 pointers

//String Reverse
//Reverse String

var reverseString = function(s) {
    let counter = 0;
    let currLeft;
    for(let i = s.length - 1; i >= s.length / 2; i--) { //<== key part. You must stop reversing half way through. Otherwise, you will "unreverse" the string. 
        currLeft = s[counter];
        s[counter] = s[i];
        s[i] = currLeft;
        counter++;
    };
    return s;
};

//Limiting yourself to one pointer

var reverseString = function(s) {
    let currLeft;
    for(let i = s.length - 1; i >= s.length / 2; i--) {
        currLeft = s[s.length - i - 1];
        s[s.length - i - 1] = s[i];
        s[i] = currLeft;
    };
    return s;
};

//REVERSE VOWELS IN A STRING VOWEL REVERSE

function reverseVowels2(s) {
    const vowels = "aeiouAEIOU";
    let sArr = [...s];
    let left = 0;
    let right = s.length - 1;
    while(left < right) {
        //if they are both vowels, switch em
        if(vowels.indexOf(sArr[left]) !== -1 && vowels.indexOf(sArr[right]) !== -1) {
            [sArr[left], sArr[right]] = [sArr[right], sArr[left]]
            ++left;
            --right;
        };
        if(vowels.indexOf(sArr[right]) == -1) {
            --right;
        };
        //if left is a vowel but right isn't, move the r pointer left
        if(vowels.indexOf(sArr[left]) == -1) {
            ++left;
        }
        //if right is a vowel but left isn't, move the l right
    };
    return sArr.join('');
};

//REVERSE STRING EVERY K Spaces

var reverseStr = function(s, k) {
    for(let i=0; i < s.length; i += k*2) {
        let subStr = s.slice(i, k + i);
        s = s.replace(subStr, subStr.split('').reverse().join(''));
    };
    return s;
};