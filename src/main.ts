function isPalindrome(word: string): Boolean {
  const reversedWord = word.replace(/\s+/g, "").split("").reverse().join("");
  if (word === reversedWord) {
    return true;
  } else return false;
}

console.log(isPalindrome("A man a plan a canal Panama"));

function FizzBuzz(n: number): (number | string)[] {
  const mixedarray: (number | string)[] = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      mixedarray.push("FizzBuzz");
    } else if (i % 5 === 0) {
      mixedarray.push("Buzz");
    } else if (i % 3 === 0) {
      mixedarray.push("Fizz");
    } else mixedarray.push(i);
  }
  return mixedarray;
}
console.log(FizzBuzz(15));

function filterEvenNumbers(n: number[]): number[] {
  const newArray: number[] = [];

  n.forEach((element) => {
    if (element % 2 === 0) {
      newArray.push(element);
    }
  });
  return newArray;
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));
