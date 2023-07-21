console.log('=====Excercise 2 start here=====')

// Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

let scores= 49;
const getGrade = (scores)=>{
    if(scores>=80 && scores<=100)
    return 'A'
    else if(scores>=70 && scores<=89)
    return 'B'
    else if(scores>=60 && scores<=69)
    return 'C'
    else if(scores>=50 && scores<=59)
    return 'D'
    else if(scores>=0 && scores<=49)
    return 'Fail'
    else
    return 'Invalid Input'
}
console.log(getGrade(scores));

// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

const checkSeason = ()=>{
    const month = prompt('Enter month name:');
    if(month.toLowerCase()==='september' || month.toLowerCase()==='october' || month.toLowerCase()==='november' )
    return 'Autum'
    else if(month.toLowerCase()==='december' || month.toLowerCase()==='january' || month.toLowerCase()==='february' )
    return 'Winter'
    else if(month.toLowerCase()==='march' || month.toLowerCase()==='april' || month.toLowerCase()==='may' )
    return 'Spring'
    else if(month.toLowerCase()==='june' || month.toLowerCase()==='july' || month.toLowerCase()==='august' )
    return 'Summer'
    else
    return 'Invalid Input'
}
// console.log(checkSeason());



// Check if a day is weekend day or a working day. Your script will take day as an input.
//     What is the day  today? Saturday
//     Saturday is a weekend.

//     What is the day today? saturDaY
//     Saturday is a weekend.

//     What is the day today? Friday
//     Friday is a working day.

//     What is the day today? FrIDAy
//     Friday is a working day.

const getDay = ()=>{
    const day1 = prompt('Enter Day:');
    const day = day1?.toLowerCase();

    switch(day){
        case 'sunday': console.log('Sunday is Holiday'); break;
        case 'monday': console.log('Monday is working day'); break;
        case 'tuesday': console.log('Tuesday is working day'); break;
        case 'wednesday': console.log('Wednesday is working day'); break;
        case 'thrusday': console.log('Thrusday is working day'); break;
        case 'friday': console.log('Friday is working day'); break;
        case 'saturday': console.log('Saturday is a weekend'); break;
        default : console.log('Invalid input');
    }
}
// getDay();