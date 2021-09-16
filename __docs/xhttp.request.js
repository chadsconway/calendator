var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    myFunction(this);
  }
};
xhttp.open("GET", "books.xml", true);
xhttp.send();

function myFunction(xml) {
  var xmlDoc = xml.responseXML;
  var x, y, i, newEle, newText, txt;

  // add an edition element
  newEle = xmlDoc.createElement("edition");
  newText = xmlDoc.createTextNode("first");
  newEle.appendChild(newText);
  x = xmlDoc.getElementsByTagName("book")[0];
  x.appendChild(newEle);

  // display all elements
  xlen = x.childNodes.length;
  y = x.firstChild;
  txt = "";
  for (i = 0; i < xlen; i++) {
    if (y.nodeType == 1) {
      txt += y.nodeName + "<br>";
    }
    y = y.nextSibling;
  }
  document.getElementById("demo").innerHTML = txt;
}
