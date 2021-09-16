const MS_IN_DAY = 86400000;
const MS_IN_HOUR = 3600000;
const MS_IN_MINUTE = 60000;
const MS_IN_WEEK = MS_IN_DAY * 7;
const MS_IN_YEAR = 31536000000;
const MS_IN_LEAP_YEAR = MS_IN_YEAR + MS_IN_DAY;
const MS_TIMEZONE_OFFSET = -18000000;
/**
 * ^ get day in month
 * @function getDIM
 * @param d
 * @returns
 */
function getDIM(date, month) {
  let m;
  let leap = false;
  if (date === 0) {
    m = month;
  } else {
    m = date.getMonth();
    leap = isLeapYear(date.getFullYear());
  }
  if (
    m === 0 ||
    m === 2 ||
    m === 4 ||
    m === 6 ||
    m === 7 ||
    m === 9 ||
    m === 11
  )
    return 31;
  if (m === 1 && leap) return 29;
  if (m === 1) return 28;
  if (m === 3 || m === 5 || m === 7 || m === 10) return 30;
}
/**
 * ^ get MS in month
 * @param d
 * @returns
 */
function getMSinMonth(m) {
  let d = getDIM(0, m);
  return d * MS_IN_DAY;
}

/**
 * ^ get Month Name
 * @param
 * @returns
 */
function getMonthName(d) {
  let mo;
  if (d.getMonth() == 0) {
    mo = "January";
  }
  if (d.getMonth() == 1) {
    mo = "February";
  }
  if (d.getMonth() == 2) {
    mo = "March";
  }
  if (d.getMonth() == 3) {
    mo = "April";
  }
  if (d.getMonth() == 4) {
    mo = "May";
  }
  if (d.getMonth() == 5) {
    mo = "June";
  }
  if (d.getMonth() == 6) {
    mo = "July";
  }
  if (d.getMonth() == 7) {
    mo = "August";
  }
  if (d.getMonth() == 8) {
    mo = "September";
  }
  if (d.getMonth() == 9) {
    mo = "October";
  }
  if (d.getMonth() == 10) {
    mo = "November";
  }
  if (d.getMonth() == 11) {
    mo = "December";
  }
  return mo;
}
/**
 * ^ is leap year
 * @param year
 * @returns
 */
function isLeapYear(year) {
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}
/**
 * @function getNextLeapYear
 * @param date1
 * @param date2
 * @returns
 */
function getNextLeapYear(year) {
  if (isLeapYear(year)) {
    return 0;
  } else if (isLeapYear(year + 1)) {
    return 1;
  } else if (isLeapYear(year + 2)) {
    return 2;
  } else if (isLeapYear(year + 3)) {
    return 3;
  }
}

//^diff in 2 dates
function diffInDates(date1, date2) {
  var timeDif = date1.getTime() - date2.getTime();
  return Math.floor(timeDif / MS_IN_DAY);
}
//^ ms since epoch
function msSinceEpoch(date) {
  return Date.parse(date);
}

function dayOfMonth(date) {
  return date.getDate();
}

function diffInTime(date1, date2) {
  let diff = date1.getTime() - date2.getTime();
  let h = Math.floor(diff / MS_IN_HOUR);
  let minMS = diff - h * MS_IN_HOUR;
  let m = Math.floor(minMS / MS_IN_MINUTE);
  let secMS = minMS - m * MS_IN_MINUTE;
  let s = secMS / 1000;
  return `${h}:${m}:${s}`;
}

function getDOY(d) {
  var year = d.getFullYear();
  var newYear = new Date(year, 0, 1);
  var newms = newYear.getTime() + MS_TIMEZONE_OFFSET;
  var currms = d.getTime() + MS_TIMEZONE_OFFSET;
  var newcurrdiff = currms - newms;
  var daynum = Math.floor(newcurrdiff / MS_IN_DAY) + 1;
  return daynum;
}

function getWeekNum(d) {
  var year = d.getFullYear();
  var daynum = getDOY(d);
  var newYear = new Date(year, 0, 1);
  var day = newYear.getDay();
  var weeknum;
  // if year starts before middle of week
  if (day < 4) {
    weeknum = Math.floor(daynum / 7) + 1;
    if (weeknum > 52) {
      nYear = new Date(this.getFullYear() + 1, 0, 1);
      nDay = nYear.getDay();
      weeknum = nday < 4 ? 1 : 53;
    }
  } else {
    weeknum = Math.floor((daynum + day - 1) / 7);
  }
  return weeknum;
}

function dateFromDOY(doy, begYear) {
  let begms = new Date(begYear, 0, 1);
  let ms2doy = doy * MS_IN_DAY;
  let cumms = begms + ms2doy;
  let date = new Date(cumms);
  return date;
}

function getFutureDate(
  date,
  addSeconds,
  addMinutes,
  addHours,
  addDays,
  addWeeks,
  addMonths,
  addYears
) {
  let start = date.getTime();
  //^add years
  let endms = start;
  let yearms = addYears * MS_IN_YEAR;
  endms = endms + yearms;
  //^add months
  if (addMonths !== 0) {
    let startmo = date.getMonth();
    let endmonth = startmo + addMonths;
    let i = startmo;
    for (i; i < endmonth; i++) {
      let adjmonth = i % 12;
      console.log("adjmonth = " + adjmonth);
      let ms = getMSinMonth(0, adjmonth);
      endms = endms + ms;
    }
  }
  //^add weeks
  let weekms = addWeeks * MS_IN_WEEK;
  endms = endms + weekms;
  //^add days
  let dayms = addDays * MS_IN_DAY;
  endms = endms + dayms;
  //^add hours
  let hourms = addHours * MS_IN_HOUR;
  endms = endms + hourms;
  //^add minutes
  let minutems = addMinutes * MS_IN_MINUTE;
  endms = endms + minutems;
  //^add seconds
  let secondms = addSeconds * 1000;
  endms = endms + secondms;
  endms = endms + MS_TIMEZONE_OFFSET;
  let enddate = new Date(endms);
  return enddate;
}

export {
  MS_TIMEZONE_OFFSET,
  MS_IN_MINUTE,
  MS_IN_HOUR,
  MS_IN_DAY,
  MS_IN_WEEK,
  MS_IN_YEAR,
  getDIM,
  getMSinMonth,
  getMonthName,
  isLeapYear,
  getNextLeapYear,
  diffInDates,
  msSinceEpoch,
  dayOfMonth,
  diffInTime,
  getDOY,
  getWeekNum,
  dateFromDOY,
  getFutureDate,
};

/**
 * ^ Built-in Date Functions
 */
let n = new Date();
let y = n.getFullYear();
let m = n.getMonth();
let d = n.getDate();
let h = n.getHours();
let min = n.getMinutes();
let s = n.getSeconds();
let ms = n.getMilliseconds();
let msEpoch = n.getTime();
let dow = n.getDay();
