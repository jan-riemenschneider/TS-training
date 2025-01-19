function isPalindrome(word: string): Boolean {
  const reversedWord = word.replace(/\s+/g, "").split("").reverse().join("");
  if (word === reversedWord) {
    return true;
  } else return false;
}

console.log(isPalindrome("A man a plan a canal Panama"));
