console.log('=====Excercise 3 start here=====')

// Write a program which tells the number of days in a month.
//   Enter a month: January
//   January has 31 days.

//   Enter a month: JANUARY
//   January has 31 day

//   Enter a month: February
//   February has 28 days.

//   Enter a month: FEbruary
//   February has 28 days.

const checkDaysInMonth = (leapYear=false) => {
    const month = prompt('Enter month name:');
    const daysOfFeb = leapYear?29:28;
  
    switch (month.toLowerCase()) {
      case 'january':
        console.log('January has 31 days.');
        break;
      case 'february':
        console.log(`February has ${daysOfFeb} days.`);
        break;
      case 'march':
        console.log('March has 31 days.');
        break;
      case 'april':
        console.log('April has 30 days.');
        break;
      case 'may':
        console.log('May has 31 days.');
        break;
      case 'june':
        console.log('June has 30 days.');
        break;
      case 'july':
        console.log('July has 31 days.');
        break;
      case 'august':
        console.log('August has 31 days.');
        break;
      case 'september':
        console.log('September has 30 days.');
        break;
      case 'october':
        console.log('October has 31 days.');
        break;
      case 'november':
        console.log('November has 30 days.');
        break;
      case 'december':
        console.log('December has 31 days.');
        break;
      default:
        console.log('Invalid month name.');
    }
  };
  

//   checkDaysInMonth(); //not a leap year
  

  //Write a program which tells the number of days in a month, now consider leap year.
//   checkDaysInMonth(true);