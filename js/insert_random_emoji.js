
//java code has a different comment notation

//list of chosen emojis
let emojis = [9749,9996,9997,9999,10002,10024,127183,127378,127384,127744,127752,127756,127758,127794,127849,127918,128008,128049,128062,128126]
let emojis1 = [128128,128214,128218,128221,128225,128568,128640,128701,129496,129497,129498	]
let emojis2 = [127918,128126,128161,128187,128190]
emojis = emojis2

//choose random element in list
var randomNumber = Math.floor(Math.random() * emojis.length);
	
//put the emoji id number into the format the html page will accept (&#000000)
var thisEmoji = "&#"+emojis[randomNumber].toString();

//insert into div named jim
if(document.getElementById("jim")){
	document.getElementById("jim").innerHTML = ( thisEmoji );
}

emojis = [127756,127744,127776,128126,128171,128300,128301,128302,127918,128161,128187,128190]

//choose random element in li
randomNumber = Math.floor(Math.random() * emojis.length);
	
//put the emoji id number into the format the html page will accept (&#000000)
thisEmoji = "&#"+emojis[randomNumber].toString();

//insert into div named jim
if(document.getElementById("mim")){
	document.getElementById("mim").innerHTML = ( thisEmoji );
}