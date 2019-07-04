// 6kyu

/* Write a function that receives two strings and returns n, where n is equal to the number of characters we should shift the first string forward to match the second.

For instance, take the strings "fatigue" and "tiguefa". In this case, the first string has been rotated 5 characters forward to produce the second string, so 5 would be returned.

If the second string isn't a valid rotation of the first string, the method returns -1.
Examples:
``` "coffee", "eecoff" => 2 "eecoff", "coffee" => 4 "moose", "Moose" => -1 "isn't", "'tisn" => 2 "Esham", "Esham" => 0 "dog", "god" => -1 ```
For Swift, your function should return an Int?. So rather than returning -1 when the second string isn't a valid rotation of the first, return nil.

shiftedDiff("coffee", "eecoff") => 2
shiftedDiff("eecoff", "coffee") => 4
shiftedDiff("moose", "Moose") => nil
shiftedDiff("isn't", "'tisn") => 2
shiftedDiff("Esham", "Esham") => 0
shiftedDiff("dog", "god") => nil */

function shiftedDiff(first, second) {
  // ...
  let f = first;
  let s = second;

  if (f.length != s.length) return -1;
  if (f === s) return 0;
  let fSplit = f.split("");
  for (let i = 1; i < f.length; i++) {
    fSplit.unshift(fSplit.pop());
    if (fSplit.join("") == s) return i;
  }
  return -1;
}

// 다른사람

function shiftedDiff(first, second) {
  if (first.length != second.length) return -1;
  return (second + second).indexOf(first);
}
