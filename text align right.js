// 6kyu

/* Your task in this Kata is to emulate text justify right in monospace font. You will be given a single-lined text and the expected justification width. The longest word will never be greater than this width.

Here are the rules:

Use spaces to fill in the gaps on the left side of the words.
Each line should contain as many words as possible.
Use '\n' to separate lines.
Gap between words can't differ by more than one space.
Lines should end with a word not a space.
'\n' is not included in the length of a line.
Last line should not contain '\n'
Example with width=30:

        Bacon ipsum dolor amet
excepteur ut kevin burgdoggen,
   shankle cupim dolor officia
       ground round id ullamco
   deserunt nisi. Commodo tail
    qui salami, brisket boudin 
tri-tip. Labore flank laboris,
  cow enim proident aliqua sed
      hamburger consequat. Sed
     consequat ut non bresaola
   capicola shoulder excepteur
 veniam, bacon kevin. Pastrami
   shank laborum est excepteur
 non eiusmod bresaola flank in
nostrud. Corned beef ex pig do
   kevin filet mignon in irure
 deserunt ipsum qui duis short
        loin. Beef ribs dolore
  meatball officia rump fugiat
  in enim corned beef non est. */

// 실패

// 크롬, runjs에서는 실행되는데 코드워에서는 실행되지 않음

function alignRight(text, width) {
  let splitStr = text.split(",");
  let lengthArr = [];
  let lengthStr = 0;
  for (let i = 0; i < splitStr.length; i++) {
    lengthStr = width - splitStr[i].length;
    for (let j = 0; j < lengthStr; j++) {
      splitStr[i] = " " + splitStr[i];
    }
  }

  return splitStr.join("\n");
}

alignRight("Two lines, I am", 10);
