var AmazonCognitoIdentity = require('amazon-cognito-identity-js');

var poolData = {
	UserPoolId: 'us-east-2_adhgIarR5', // Your user pool id here
	ClientId: '6t612ics7jsbu29v36m72af95r' // Your client id here
};

var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
var userData = {
	Username: 't.baboghlian@gmail.com',
	Pool: userPool,
};

var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

cognitoUser.confirmRegistration('685342', true, function (err, result) {
	if (err) {
		alert(err.message || JSON.stringify(err));
		return;
	}
	console.log('call result: ' + result);
});