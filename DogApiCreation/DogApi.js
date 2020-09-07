var request = new XMLHttpRequest()
var url_string = 'https://dog.ceo/api/breeds/list/all';
request.open('GET',url_string,true)
request.send();

request.onload = function()
{
    console.log(this.response);
    var data = JSON.parse(this.response);
    for(i=0;i<DataCue.length;i++)
        console.log(data[i]);
}