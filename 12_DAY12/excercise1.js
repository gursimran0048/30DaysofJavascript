//Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’
const exp =
  "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.";

console.log(
  exp.match(/\d+(\.\d+)?/g).reduce((acc, ele) => (acc += parseInt(ele)), 0)
);

//The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.


const text =
  "The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction.";

const regex = /-?\d+(\.\d+)?/g;

const numbers = text.match(regex).map(Number);
const sortedNumbers = numbers.sort((a, b) => a - b);

const distance = sortedNumbers[sortedNumbers.length - 1] - sortedNumbers[0];

console.log("Sorted Numbers:", sortedNumbers);
console.log("Distance between the two furthest points:", Math.abs(distance));


// Write a pattern which identify if a string is a valid JavaScript variable

// is_valid_variable('first_name') # True
// is_valid_variable('first-name') # False
// is_valid_variable('1first_name') # False
// is_valid_variable('firstname') # True

const isValidVariable = (variableName) => /^[a-zA-Z_][a-zA-Z0-9_]*$/.test(variableName);

console.log(isValidVariable('first_name'));   // Output: true
console.log(isValidVariable('first-name'));   // Output: false
console.log(isValidVariable('1first_name'));  // Output: false
console.log(isValidVariable('firstname'));    // Output: true


//Write a function called tenMostFrequentWords which get the ten most frequent word from a string?

function tenMostFrequentWords(paragraph) {
    // Convert the paragraph to lowercase to ensure case-insensitive counting
    const lowerCaseParagraph = paragraph.toLowerCase();
  
    // Use a regular expression to extract all the words from the paragraph
    const words = lowerCaseParagraph.match(/\b\w+\b/g);
  
    // Create an object to count the occurrences of each word
    const wordCounts = {};
    words.forEach(word => {
      wordCounts[word] = (wordCounts[word] || 0) + 1;
    });
  
    // Sort the words based on their counts in descending order
    const sortedWords = Object.entries(wordCounts).sort((a, b) => b[1] - a[1]);
  
    // Return the ten most frequent words along with their counts
    return sortedWords.slice(0, 10).map(([word, count]) => ({ word, count }));
  }
  
  const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;
  console.log(tenMostFrequentWords(paragraph));



//   Writ a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.
//   sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
//   console.log(cleanText(sentence))


  function cleanText(text) {
    // Remove special characters and symbols using regular expressions
    const cleanedText = text.replace(/[^a-zA-Z\s]/g, '');
  
    // Convert the text to lowercase
    const lowercaseText = cleanedText.toLowerCase();
  
    // Split the text into words
    const words = lowercaseText.split(/\s+/);
  
    // Create an object to count the occurrences of each word
    const wordCounts = {};
    words.forEach(word => {
      wordCounts[word] = (wordCounts[word] || 0) + 1;
    });
  
    // Sort the words based on their counts in descending order
    const sortedWords = Object.entries(wordCounts).sort((a, b) => b[1] - a[1]);
  
    // Return the three most frequent words along with their counts
    console.log(cleanedText);
    return sortedWords.slice(0, 3).map(([word, count]) => ({ word, count }));
  }
  
  const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;
  const sentence2 = "```js\n" +
  "console.log(mostFrequentWords(cleanedText))\n" +
  "[{word:'I', count:3}, {word:'teaching', count:2}, {word:'teacher', count:2}]```";

  console.log(cleanText(sentence));
  console.log(cleanText(sentence2));
  