var express = require("express");
var app = express();

var mockDB = [{"name":"1","description":"#1\n","image":"https://ipfs.io/ipfs/QmeUt4a8aCM8e96uXV7hh6SzkSqqjcX2ybdVTdwoFnybds",
"external_url":"https://myweb","attributes":[
{"Specie":"1","Fur":"1","Hat":"1","Clothes":"1","Accessory":"1","Background":"1"},
{"key":"Specie","trait_type":"Specie","value":"1"},
{"key":"Fur","trait_type":"Fur","value":"1"},
{"key":"Hat","trait_type":"Hat","value":"1"},
{"key":"Clothes","trait_type":"Clothes","value":"1"},
{"key":"Accessory","trait_type":"Accessory","value":"1"},
{"key":"Background","trait_type":"Background","value":"1"}]},
{"name":"2","description":"#2\n","image":"https://ipfs.io/ipfs/QmeUt4a8aCM8e96uXV7hh6SzkSqqjcX2ybdVTdwoFnybds",//#2
"external_url":"https://myweb","attributes":[
{"Specie":"2","Fur":"2","Hat":"2","Clothes":"2","Accessory":"2","Background":"2"},
{"key":"Specie","trait_type":"Specie","value":"2"},
{"key":"Fur","trait_type":"Fur","value":"2"},
{"key":"Hat","trait_type":"Hat","value":"2"},
{"key":"Clothes","trait_type":"Clothes","value":"2"},
{"key":"Accessory","trait_type":"Accessory","value":"2"},
{"key":"Background","trait_type":"Background","value":"2"}]}];


app.get("/urlTest/:number", (req, res, next) => {
	var number = req.params.number;
	if(number>1 || number<0){
		res.send("No Fox Found :(");
	}
	res.json(mockDB[number]);
})

app.get("/url/:number", (req, res, next) => {
	var number = req.params.number;
	if(number>10000 || number<0){
		res.send("No Fox Found :(");
	}
	res.json(mockDB[number]); // this number need to do postgre query
})

app.listen(3000, () => {
 console.log("Server running on port 3000");
});