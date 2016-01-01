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