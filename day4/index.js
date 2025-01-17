// 1.	Debounce Function: Implement a debounce function that limits the frequency of a function's execution
//  when called repeatedly within a specified time frame. 
// This is useful in scenarios like resizing or scrolling events.


// Debounce Function
function debounce(func, delay){
    let timer;
    return function(){
        let context = this;
        let args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(context, args);
        }, delay);
    }
}




// 2. Longest Substring Without Repeating Characters: Find the length of the longest substring without repeating characters.

// Longest Substring Without Repeating Characters
function longestSubstringWithoutRepeatingCharacters(str) {
    let longest = 0;
    let seen = {};
    let start = 0;

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (seen[char] !== undefined) {
            start = Math.max(start, seen[char] + 1);
        }

        seen[char] = i;
        longest = Math.max(longest, i - start + 1);
    }

    return longest;
}

console.log(longestSubstringWithoutRepeatingCharacters('abcabcbb')); // Output: 3


// 3. Group Anagrams: Given an array of strings, group them into anagrams.

// Group Anagrams
function groupAnagrams(strs){
    let map = {};
    for(let str of strs){
        let sorted = str.split('').sort().join('');
        if(map[sorted]){
            map[sorted].push(str);
        }
        else{
            map[sorted] = [str];

        }

    }
    return Object.values(map);
}
