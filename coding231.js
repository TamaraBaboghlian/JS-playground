var AmazonCognitoIdentity = require('amazon-cognito-identity-js');




const poolData = {
    UserPoolId: 'us-east-2_adhgIarR5', // Your user pool id here
    ClientId: '6t612ics7jsbu29v36m72af95r' // Your client id here
  };
const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

const attributeList = [];

const dataEmail = {
  Name: 'email',
  Value: 't.baboghlian@gmail.com'
};

const dataPhoneNumber = {
  Name: 'phone_number',
  Value: '+374801709',
};

const attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(dataEmail);

const attributePhoneNumber = new AmazonCognitoIdentity.CognitoUserAttribute(
  dataPhoneNumber
);

attributeList.push(attributeEmail);
attributeList.push(attributePhoneNumber);


// userPool.signUp('t.baboghlian@gmail.com', 'Password@123', attributeList, null, function(
//   err,
//   result
// ) {
//   console.log("******** SUCCESSFULLY CREATED *********");
//   if (err) {
//     // alert(err.message || JSON.stringify(err));
//       console.log(err.message || JSON.stringify(err))
//     return;
//   }
//   const cognitoUser = result.user;
//   console.log('user name is ' + cognitoUser.getUsername());
// });

register(userPool, 't.baboghlian@gmail.com', 'Password@123', attributeList).then(console.log);

// console.log(data);


function register(userPool, email, password, attribute_list) {
  return new Promise((resolve, reject) => {
    userPool.signUp(email, password, attribute_list, null, (err, result) => {
      console.log('inside');
      if (err) {
        console.log(err.message);
        reject(err);
        return;
      }
      cognitoUser = result.user;
      resolve(cognitoUser)
    });
  });
}