// 5kyu

/* At a job interview, you are challenged to write an algorithm to check if a given string, s, can be formed from two other strings, part1 and part2.

The restriction is that the characters in part1 and part2 should be in the same order as in s.

The interviewer gives you the following example and tells you to figure out the rest from the given test cases.

For example:

'codewars' is a merge from 'cdw' and 'oears':

    s:  c o d e w a r s   = codewars
part1:  c   d   w         = cdw
part2:    o   e   a r s   = oears */

// 실패
// part1의 순서와 part2의 순서가 s의 순서와 일치해야함

function isMerge(s, part1, part2) {
  let str = a + b;
  return (
    s
      .split("")
      .sort()
      .join("") ===
    str
      .split("")
      .sort()
      .join("")
  );
}

// 다른 사람 풀이

function f(s, part1, part2) {
  return !s
    ? !(part1 || part2)
    : (s[0] == part1[0] && f(s.slice(1), part1.slice(1), part2)) ||
        (s[0] == part2[0] && f(s.slice(1), part1, part2.slice(1)));
}
