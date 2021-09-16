import {
  isLeapYear,
  diffInDates,
  msSinceEpoch,
  dayOfMonth,
  diffInTime,
  getDOY,
  getWeekNum,
  getDIM,
  getMSinMonth,
  getMonthName,
  getNextLeapYear,
  dateFromDOY,
  getFutureDate,
} from "./dateFuncs.mjs";
let d1 = new Date("2020-12-31");
let d2 = new Date("2021-09-13T12:15:00");
let d = new Date();
console.log(isLeapYear(d));
console.log(diffInDates(d1, d));
console.log(msSinceEpoch(d));
console.log(dayOfMonth(d));
console.log(diffInTime(d2, d));
console.log(getDOY(d));
console.log(getWeekNum(d));
console.log(getDIM(d, 0));
console.log("getfuturedates");
console.log(getFutureDate(new Date(), 30, 0, 0, 0, 0, 0, 0));
console.log(getFutureDate(new Date(), 0, 30, 0, 0, 0, 0, 0));
console.log(getFutureDate(new Date(), 0, 0, 3, 0, 0, 0, 0));
console.log(getFutureDate(new Date(), 0, 0, 0, 12, 0, 0, 0));
console.log(getFutureDate(new Date(), 0, 0, 0, 0, 4, 0, 0));
console.log(getFutureDate(new Date(), 0, 0, 0, 0, 0, 1, 0));
console.log(getFutureDate(new Date(), 0, 0, 0, 0, 0, 6, 0));
console.log(getFutureDate(new Date(), 0, 0, 0, 0, 0, 12, 0));
console.log(getFutureDate(new Date(), 0, 0, 0, 0, 0, 0, 20));
console.log(getFutureDate(new Date(), 5, 5, 5, 5, 5, 5, 5));
