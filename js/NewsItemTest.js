var $ = require("jquery"),
	NewsItem = require("./NewsItem"),
	React = require('react');

$.ajax({
	url: '/json/items.json'
}).then(function(items){
	console.log("items", items);
	React.render(
		<NewsItem item={items[0]} rank={1}/>, 
		document.getElementById("content")
	);
});

