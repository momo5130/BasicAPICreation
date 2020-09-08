/*const fetch = require('node-fetch');
var url_string = "https://api.domainsdb.info/v1/domains/search?domain=zaiffly";
let proxy = "https://cors-anywhere.herokuapp.com/";
// request.open('GET',proxy+url_string,true)
// request.open('GET',url_string,true)
// request.send();

fetch(url_string)
	.then(res => res.json())
	.then(json => console.log(json));

*/

	var request = new XMLHttpRequest()
    var domainnme = 'facebook';
    var url_string = 'https://cors-anywhere.herokuapp.com/https://api.domainsdb.info/v1/domains/search?domain='+ domainnme;
    console.log(url_string)
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
			var data = this.responseText;
			console.log(data)
            
        }
      };
    request.open('GET',url_string , true) 
    request.send();
	