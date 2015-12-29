$.getJSON(
	"http://www.reddit.com/r/pics.json?jsonp=?",
	function foo(data){
		$.each(
			data.data.children.slice(0,10),
			function(i, post){
				$("#reddit-content").append('<br>'+post.data.title);
				$("#reddit-content").append('<br>'+post.data.url);
				$("#reddit-content").append( '<br>' + post.data.permalink );
              	$("#reddit-content").append( '<br>' + post.data.ups );
              	$("#reddit-content").append( '<br>' + post.data.downs );
              	$("#reddit-content").append( '<hr>' );
			})
	})
.success(function(){alert("second success");})
.error(function(){alert("error");})
.complete(function(){alert("complete");});
//trying raw.js on client side  here
var rawjs = require("raw.js");