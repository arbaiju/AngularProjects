/**
 * Created by arxxbx on 10/3/2014.
 */
/*var xhr = new XMLHttpRequest();
xhr.open("GET", "http://www.codecademy.com/", false);
// Add your code below!
xhr.send();
//console.log(xhr.status);
//console.log(xhr.statusText);
*/


var xhr = new XMLHttpRequest();
xhr.open("GET", "http://www.codecademy.com/files/samples/javascript_learn_apis.xml", false);

xhr.setRequestHeader('Content-Type', 'text/xml');
xhr.send();

var xmlDocument = xhr.responseXML;
console.log(xmlDocument.childNodes['0'].textContent);
console.log(xmlDocument);
/*
 var demo = '{"pets": { "name": "Jeffrey", "species": "Giraffe"}}';

 var json = JSON.parse(demo);
 console.log(json);
 */