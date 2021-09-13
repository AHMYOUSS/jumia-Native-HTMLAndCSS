var time = new Date();
var days = time.getDay();
var hours = time.getHours() ;
var minutes = time.getMinutes()
var second = time.getSeconds();

var current = `${days}  ${hours}:${minutes}`;
//document.getElementById("header").innerHTML=current;