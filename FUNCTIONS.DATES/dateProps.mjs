const MS_IN_DAY = 86400000;
const MS_IN_HOUR = 3600000;
const MS_IN_MINUTE = 60000;
const MS_IN_YEAR = 31536000000;
const MS_IN_LEAP_YEAR = MS_IN_YEAR + MS_IN_DAY;
const MS_TIMEZONE_OFFSET = 18000000;

Date.prototype.setAXRdoyProp = function () {
  var newYear = new Date(this.getFullYear(), 0, 1);
  var newms = newYear.getTime() + MS_TIMEZONE_OFFSET;
  var currms = this.getTime() + MS_TIMEZONE_OFFSET;
  var newcurrdiff = currms - newms;
  var daynum = Math.floor(newcurrdiff / MS_IN_DAY) + 1;
  this.AXRdoyProp = daynum;
};

Date.prototype.setAXRwkProp = function () {
  this.setAXRdoyProp();
  var daynum = this.AXRdoyProp;
  var newYear = new Date(this.getFullYear(), 0, 1);
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
  this.AXRwkProp = weeknum;
  console.log("daynum = " + daynum);
};

Date.prototype.setAXRdayProp = function () {
  switch (this.getDay()) {
    case 0:
      this.AXRdayProp = "Sunday";
      break;
    case 1:
      this.AXRdayProp = "Monday";
      break;
    case 2:
      this.AXRdayProp = "Wednesday";
      break;
    case 3:
      this.AXRdayProp = "Thursday";
      break;
    case 4:
      this.AXRdayProp = "Friday";
      break;
    case 5:
      this.AXRdayProp = "Saturday";
      break;
  }
};
Date.prototype.setAXRmoProp = function () {
  if (this.getMonth() == 0) {
    this.AXRmoProp = "January";
  }
  if (this.getMonth() == 1) {
    this.AXRmoProp = "February";
  }
  if (this.getMonth() == 2) {
    this.AXRmoProp = "March";
  }
  if (this.getMonth() == 3) {
    this.AXRmoProp = "April";
  }
  if (this.getMonth() == 4) {
    this.AXRmoProp = "May";
  }
  if (this.getMonth() == 5) {
    this.AXRmoProp = "June";
  }
  if (this.getMonth() == 6) {
    this.AXRmoProp = "July";
  }
  if (this.getMonth() == 7) {
    this.AXRmoProp = "August";
  }
  if (this.getMonth() == 8) {
    this.AXRmoProp = "September";
  }
  if (this.getMonth() == 9) {
    this.AXRmoProp = "October";
  }
  if (this.getMonth() == 10) {
    this.AXRmoProp = "November";
  }
  if (this.getMonth() == 11) {
    this.AXRmoProp = "December";
  }
};
function setDateProps(d) {
  d.setAXRdoyProp();
  d.setAXRwkProp();
  d.setAXRmoProp();
  d.setAXRdayProp();
  return d;
}

export { setDateProps };
