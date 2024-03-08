// get current date
let today = new Date();
let currDate = today.getDate();
let currMonth = today.getMonth() + 1;
let currYear = today.getFullYear();
let dateInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export function countAge(data) {
  if (data.date > currDate) {
    currDate = currDate + dateInMonth[currMonth - 1];
    currMonth = currMonth - 1;
  }
  if (data.month > currMonth) {
    currMonth = currMonth + 12;
    currYear = currYear - 1;
  }

  let day = currDate - data.date;
  let month = currMonth - data.month;
  let year = currYear - data.year;

  return { day, month, year };
}
