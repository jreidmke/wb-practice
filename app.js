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

//NEW REVERSE WORDS WORD REVERSE

var reverseWords = function(s) {
    let sArr = s.split(' ');
    let nArr = [];
    for(let word of sArr) {
        word = word.split('').reverse().join('');
        nArr.push(word);
        nArr.push(" ");
    }
    return nArr.join('').trim();
};

var reverseWords = function(s) {
    let wordStart = 0;
    for(let i = 0; i <= s.length; i++) {
        if(s[i] !== " " && i !== s.length){
          continue;  
        } else {
            let subStr = s.slice(wordStart, i);
            s = s.replace(subStr, subStr.split('').reverse().join(''));
            wordStart = i + 1;
        }
    };
    return s
};

var reverseWords = function(s) {
    let wordStart = 0;
    let nString = ""
    for(let i = 0; i <= s.length; i++) {
        if(s[i] !== " " && i !== s.length){
          continue;  
        } else {
            let subStr = s.slice(wordStart, i);
            nString += subStr.split('').reverse().join('') + " "
            wordStart = i + 1;
        }
    };
    return nString.trim()
};

//DETECT CAPITAL FIRST PASS

var detectCapitalUse = function(s) {
    if(s.split("").every(x => x.toUpperCase() === x)) return true;
    if(s.split("").every(x => x.toLowerCase() === x)) return true
    if(s[0].toUpperCase() === s[0] && s.slice(1).split("").every(x => x.toLowerCase() === x)) return true;
    return false;
};

//NOW USE CHAR AT


//CONTAINS DUPLICATE
var containsDuplicate = function(nums) {
    let obj = {};
  for(let n of nums) {
    if(n in obj) return true;
    obj[n] = 1;
  };
  return false;
};

var containsDuplicate = function(nums) {
    nums.sort();
  for(let i = 0; i < nums.length; i++) {
    if(nums[i]===nums[i+1]) return true;
  };
  return false
};


//BEST TIME TO BUY AND SELL STOCK

function maxProfit(prices) {
    let profit = 0;
    let buyingPrice = prices[0];
    for(let i = 1; i < prices.length; i++) {
      if(prices[i] > buyingPrice) {
        profit += prices[i] - buyingPrice;
        buyingPrice = prices[i];
      } else {
        buyingPrice = prices[i];
      }
    }
    return profit;
  }
  
  maxProfit([1,2,3,4,5])

  //PALINDROME

  let left = 0;
  let right = s.length - 1;
  while(left < right) {
    if(s[left] !== s[right]) return false; 
      ++left;
      --right;
  };
  return true;

  //ANAGRAM

  function validAngram(s, t) {
    if(s.length !== t.length) return false;
    function freq(str) {
      let obj = {};
      for(let char of str) {
        if(obj[char] > 0) {
          obj[char]++;
        } else {
          obj[char]=1;
        };
      };
      return obj;
    };
      let sObj = freq(s);
      let tObj = freq(t);
      let letters = Object.keys(sObj);
      for(let l of letters) {
        if(sObj[l] !== tObj[l]) return false;
      }
    return true;
  }

  //ROMAN
  
  function romanToInt(s) {
    let answer = 0;
    for(let i = s.length - 1; i >=0; i--) {
      let num = roman[s.charAt(i)];
      if(4 * num < answer) answer -= num;
      else answer += num;
    };
    return answer
  }
    

//EXCEL PROBLEM
  function titleToNumber(s) {
    let output = 0
    for (let i = 0; i < s.length; i++) {
      const code = s[i].charCodeAt() - 64
      output = output * 26 + code
    }
    return output
  }

//PASCAL

function generate(numRows) {
    var pascal = [];
    for (var i = 0; i < numRows; i++) {
        pascal[i] = [];
        pascal[i][0] = 1;
        for (var j = 1; j < i; j++) {
            pascal[i][j] = pascal[i-1][j-1] + pascal[i-1][j]
        }
        pascal[i][i] = 1;
    }
    return pascal;
};

function missingNumber(nums) {
    for(let i = 0; i <= nums.length; i++) {
      if(nums.indexOf(i) === -1) return i;
    }
  };

function fdas(s) {
    let map = {}

for (let char of s) {
    map[char] ? map[char]++ : map[char] = 1
}

for (let i = 0; i < s.length; i++) {
    if (map[s[i]] === 1) return i
}
    
return -1
};

function reverseString(s, reverseS="") {
  if(s.length === 0) return reverseS;
  reverseS += s[s.length - 1];
  return reverseString(s.slice(0, s.length - 1), reverseS);
};


function addToElement(arr, idx=0, char="a") {
  //conditional to check if there is still operation left to complete
  if(idx > arr.length - 1) return arr;
  //access the element we are attempting to manipulate/modify
  //manipulate the element
  arr[idx] = char.concat(arr[idx]);
  //recall our function with new arguemnts.
  return addToElement(arr, idx=idx += 1); 
}

addToElement(["james", "pete", "maria"]);


function camelToTitle(s) {
  let newStr = "";
  let left = 0;
  //add first substring
  for(let i = 0; i < s.length; i++) {
    if(s[i] === s[i].toUpperCase()) {
      newStr += s.slice(left, i) + " ";
      left = i;
    }
    if(i >= s.length - 1) {
      newStr += s.slice(left, i+1);
    };
    continue;
  };
  newStr = newStr.replace(newStr[0], newStr[0].toUpperCase());
  return newStr;
}

camelToTitle("helloThisIsFun");

function binarySearch(arr, el) {
  let left = 0;
  let right = arr.length - 1; 
  while(left <= right) {
    let mid = Math.floor((left + right) / 2);
    if(mid === el) return mid - 1; 
    if(el > arr[mid]) {
      left = mid+1;
    };
    if(el < arr[mid]) {
      right = mid - 1;
    }
  };
};

x = [1, 2, 3, 4, 5, 6, 7, 8, 9]

binarySearch(x, 4);
function titleToCamel(s) {
  s = s.replace(s[0], s[0].toLowerCase()).replaceAll(' ', '');
  return s;
};

function mostFrequent(arr) {
  let item;
  let tempCount = 0;
  let maxCount = 1;
  for(let i = 0; i < arr.length; i++) {
    for(let j=i; j < arr.length; j++) {
      if(arr[i] === arr[j]) {
        tempCount++;
      };
      if(tempCount > maxCount) {
        item=arr[i];
        maxCount=tempCount;
      }
    }
    tempCount=0; 
  };
  return item;
}

function mostFrequent(arr) {
  let obj = {};
  for(let i of arr) {
    if(obj[i] > 0) {
      obj[i]++
    } else {
      obj[i] = 1;
    }
  };
  let max = 1;
  let item;
  for(prop in obj) {
    if(obj[prop] > max) {
      max = obj[prop]
      item = prop;
    }
  };
  return item
};



y = [1, 1, 1, 3];

mostFrequent(y)

//   let sorted =  Object.entries(obj).sort((a, b) => a[1] - b[1]); 
//   return sorted[sorted.length - 1]

