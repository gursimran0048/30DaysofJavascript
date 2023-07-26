const lists = document.querySelectorAll(".listItem");

lists.forEach((list) => {
  if (list.textContent.includes("Done")) {
    list.style.backgroundColor = "green";
  } else if (list.textContent.includes("Ongoing")) {
    list.style.backgroundColor = "yellow";
  } else {
    list.style.backgroundColor = "red";
  }
});

const year = document.getElementById("year");
const timeStamp = document.getElementById("timeStamp");

function changeBg() {
  setInterval(() => {
    year.style.color = getRandomHexColor();
    const date = new Date();
    timeStamp.textContent = formatDateTimeToTimestamp(date);
    timeStamp.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

changeBg();

function getRandomHexColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function formatDateTimeToTimestamp(dateTime) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const year = dateTime.getFullYear();
  const month = monthNames[dateTime.getMonth()];
  const day = dateTime.getDate();
  const hour = dateTime.getHours().toString().padStart(2, "0");
  const minute = dateTime.getMinutes().toString().padStart(2, "0");
  const second = dateTime.getSeconds().toString().padStart(2, "0");

  return `${month} ${day}, ${year} ${hour}:${minute}:${second}`;
}
