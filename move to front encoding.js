// 6kyu
/* 
Motivation
The goal of data compression is to remove redundancy from an input. Some of you already know run-length-encoding, where elements get encoded with their number of consecutive occurences. But what if elements are not directly consecutive but just close to each other?

(This is especially important for the Burrows-Wheeler-Transformation, which creates a permutation of the input, where equal symbols are close to each other. There is also a kata about that from me.)

Move To Front Encoding
In this encoding we use a prioritized and changing alphabet for our input. As the name suggests, when encoding a symbol from our alphabet, we look up the index of that symbol in our alphabet. This is our representation for that symbol, and then change the alphabet, by moving the symbol to the front. Example with the alphabet ['a', 'b', 'c']:

encode("abc", "ccc")    === [2, 0, 0]
encode("abc", "acacac") === [0, 2, 1, 1, 1, 1]
encode("aab", "b")      === [2]

describe("Fixed tests", ()=>{
    it("encode", ()=>{
      Test.assertDeepEquals( encode( "abc", "ababab" ), [0,1,1,1,1,1] );
      Test.assertDeepEquals( encode( [0,1,2], [0,1,0,1,0,1] ), [0,1,1,1,1,1] );
      Test.assertDeepEquals( encode( "abc", "cccbbb" ), [2,0,0,2,0,0] );
    });
    it("decode", ()=>{
      Test.assertDeepEquals( decode( "abc", [0,1,1,1,1,1] ), "ababab" );
      Test.assertDeepEquals( decode( [0,1,2], [0,1,1,1,1,1] ), [0,1,0,1,0,1] );
      Test.assertDeepEquals( decode( "abc", [2,0,0,2,0,0] ), "cccbbb" );
    }); */
