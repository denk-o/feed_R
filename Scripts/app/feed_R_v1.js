var Snoocore = window.Snoocore;
var hash = window.location.hash;
window.reddit = new Snoocore({
	userAgent: 'feed-R_fossa_1.0',
	oauth:{
		type: 'implicit',
		key: '3-nfUj766Qzatw',
		redirectUri: 'http://denk-o.github.io/feed_R',
		scope:['identity', 'read', 'history']
	}
});
//authentication here
//Should try to figure out how to auto authenticate
document.getElementById('auth_url').href=reddit.getImplicitAuthUrl();
var match =(''+window.location.hash).match(/acess_token=(.*?)&/);
var accessToken = match ? match[1] : '';
if(accessToken){
	reddit.auth(accessToken).then(function(){
		return reddit('/api/v1/me').get();
	}).done(function(result){
		document.getElementById('out').innerText = JSON.stringfy(result, null, 2);
	});
}

//lets try to get the comments from a user
window.comments = function(){
	//take in a user input
	var username = document.getElementById('username').value;
	var size = 10;
	return reddit('/user/$username/comments').listing({
		$username: username,
		limit: size
	}).then(function(slice){
		console.log(slice);
		for(var i=0;i<size;i++){
			$('#out').append('<br>'+ slice.children[i].data.body);
		}
	})
}