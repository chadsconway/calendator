import { setDateProps } from "./dateProps.mjs";
let d = new Date();
d = setDateProps(d);
console.log("day of year: " + d.AXRdoyProp);
console.log("week number: " + d.AXRwkProp);
console.log("month: " + d.AXRmoProp);
console.log("day of week: " + d.AXRdayProp);
