const arguments = process.argv;
const args = arguments.slice(2);
const host = args[0];
const fileName = args[1];

// console.log(args);

const request = require('request');
const fs = require('fs');

request(host, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.

  const content = body;

  fs.writeFile(fileName, content, err => {
    if (err) {
      console.error(err);
      return;
    }

    console.log(`Downloaded and saved ${content.length} bytes to ${fileName} `);
  })

});

