//palindrome
const input = "A man, a plan, a canal: Panama";
const input1 = "A man nama";

const isPalindrome = (str) => {
  let start = 0,
    end = str.length - 1;
  function isLetter(str) {
    return str.length === 1 && str.match(/[a-z0-9]/i);
  }
  while (start < end) {
    while (start < end && !isLetter(str[start])) {
      start++;
    }
    while (start < end && !isLetter(str[end])) {
      end--;
    }
    if (str[start].toLowerCase() !== str[end].toLowerCase()) {
      return false;
    }
    start++;
    end--;
  }
  return true;
};

console.log(isPalindrome(input1));
