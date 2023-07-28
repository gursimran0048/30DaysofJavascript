console.log("======Excercise-3 starts from here======");

//Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
// YYY-MM-DD HH:mm eg. 20120-01-02 07:05

const humanDate = new Date();
let hDate = humanDate.getDate();
let hMonth = humanDate.getMonth() + 1;
let hYear = humanDate.getFullYear();
let hHour = humanDate.getHours();
let hMin = humanDate.getMinutes();

hDate = hDate < 10 ? "0" + hDate : hDate;
hMonth = hMonth < 10 ? "0" + hMonth : hMonth;
hHour =
  hHour < 10
    ? "0" + hHour
    : hHour > 12
    ? hHour - 12 < 10
      ? "0" + (hHour - 12)
      : hHour
    : hHour;
hMin = hMin < 10 ? "0" + hMin : hMin;

console.log(`${hYear}-${hMonth}-${hDate} ${hHour}:${hMin}`);
