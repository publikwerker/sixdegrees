const request = require('request');
const SEQ_API = "http://localhost:8080/api";

export default function Sequencer(iterations, callback){
  let url = `${SEQ_API}/sequence/${iterations}`;
  console.log(`url is ${url}`);
  request({url, json:true}, (err, response, body) => {
    if (err){
      console.log(err);
      callback(`Unable to access network connection`);
    } else if (response.body.errors) {
      callback(response.body.errors);
    } else {
      callback(undefined, body)};
  });
}