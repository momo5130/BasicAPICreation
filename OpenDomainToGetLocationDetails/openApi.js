var request = new XMLHttpRequest()
var url_string = 'https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=1b86037203c974b443f8f8303682d79c';
request.open('GET',url_string,true)
request.send();

request.onload = function()
{
    console.log(this.response);
    var data = JSON.parse(this.response);
    for(i=0;i<DataCue.length;i++)
        console.log(data[i]);
}