console.log('======Excercise 3 starts here=======');

//'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
const sentence1 ='Love is the best thing in this world. Some found their love and some are still looking for their love.';

console.log(sentence1.match(/love/gi).length)


//Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
const sentence2 = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence2.match(/because/gi).length)


//Clean the following text and find the most frequent word (hint, use replace and regular expressions).
const sentence3 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';

// Clean the text using regular expressions
const cleanedText = sentence3.replace(/[%$@#&;!.,?]/g, '').replace(/\s+/g, ' ').trim().toLowerCase();

// Split the cleaned text into words
const words = cleanedText.split(' ');

// Count word occurrences using an object
const wordCounts = {};
words.forEach((word) => {
  wordCounts[word] = (wordCounts[word] || 0) + 1;
});

// Find the most frequent word
let mostFrequentWord = '';
let maxCount = 0;
Object.entries(wordCounts).forEach(([word, count]) => {
  if (count > maxCount) {
    maxCount = count;
    mostFrequentWord = word;
  }
});

console.log(wordCounts);

console.log('Cleaned Text:', cleanedText);
console.log('Most Frequent Word:', mostFrequentWord);
console.log('Frequency:', maxCount);


//Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
const text = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';

// Extract numbers using regular expression
const numbers = text.match(/\d+/g).map(Number);

// Calculate total annual income
const salaryPerMonth = numbers[0];
const annualBonus = numbers[1];
const onlineCoursesPerMonth = numbers[2];
const totalAnnualIncome = (salaryPerMonth * 12) + annualBonus + (onlineCoursesPerMonth * 12);

console.log('Total Annual Income:', totalAnnualIncome, 'euro');
