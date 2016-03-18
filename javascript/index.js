var request = require('request'),
	cheerio = require('cheerio'),
	Promise = require('bluebird');

var url = "http://google.com/";

function fetchUsingCallback(url, callBack){
	request(url, function(err, req, res){
		if(err) callBack(err)
		callBack(null, res);
	});
}

function fetechUsingPromise(url){
	return new Promise(function(resolve, reject){
		request(url, function(err, req, res){
			if(err) reject(err);
			resolve(res);
		})
	})
}

fetchUsingCallback(url, function(err, res){
	getTitle(res, "Fetched with callback ")
});

fetechUsingPromise(url).then(function(result){
	getTitle(result, "Fectched from promise ");
})

function getTitle(res, text){
	var $ = cheerio.load(res);
	var title = $('title').text();
	console.log(text+  title);
}