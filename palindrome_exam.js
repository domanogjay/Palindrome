function isPalindrome(str) {
  if (typeof str == 'string')
  {
    var stringWord = str.split("").reverse().join("");

    if (str.toLowerCase() == stringWord.toLowerCase())
      console.log(`The given string: \"${str}\" is an example of a palindrome, \nthe reversed value is: \"${stringWord}\"`);
    else  
      console.log(`The given string: \"${str}\" is not an example of a palindrome`);

  } else
    console.log(`The given value: ${str} is not a string! \nThe expected data type of the value is string.`);
}

// Call the function and pass an argument.
isPalindrome("123454321");
