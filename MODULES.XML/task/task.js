// Get the root element
var r = document.querySelector(":root");

// Create a function for getting a variable value
function myFunction_get() {
  // Get the styles (properties and values) for the root
  var rs = getComputedStyle(r);
  // Alert the value of the --blue variable
  let propStr = "";
  for ([key, val] in rs) {
    propStr = propStr + `${key}: ${val} \n`;
  }

  alert(rs.toString());
  console.table(rs);
}

// Create a function for setting a variable value
function myFunction_set(prop, val) {
  r.style.setProperty(prop, val);
}
myFunction_get();
