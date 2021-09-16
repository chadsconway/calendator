const { default: axios } = require("axios");

axios
  .post("http://localhost/calendator", {
    testInfo: "this is some test info",
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
