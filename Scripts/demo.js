var Snoocore = require('snoocore');

var reddit = new Snoocore({
	userAgent: 'u/mytestdemo_fossa_feedR.1.0',
	oauth:{
		type: 'script',
		key: 'r5FdhiW10tlPLQ',
		secret: '4GqdsIEJqm2HIc0ovmBXNrFvatA',
		username: 'ohwellokay_',
		password: '2818vngR',
		scope: ['identity', 'read', 'vote']
	}	
});

reddit('api/v1/me').get().then(function(result){
	console.log(result.name);
	return reddit('/r/askreddit/hot').listing();
}).then(function(slice){
	return slice.next();
}).then(function(slice){
	var firstSubmission=slice.children[0];
	console.log('upvoting post:');
	console.log(firstSubmission.data.title);
	console.log(firstSubmission.data.url);
	return reddit('/api/vote').post({
		dir: 1,
		id: firstSubmission.kind+'_'+firstSubmission.data.id
	});
}).then(function(){
	console.log('done');
});
