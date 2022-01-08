/*
Use the following code to retrieve configured secrets from SSM:

const aws = require('aws-sdk');

const { Parameters } = await (new aws.SSM())
  .getParameters({
    Names: ["aws_access_key_id","AWS_SECRET_ACCESS_KEY"].map(secretName => process.env[secretName]),
    WithDecryption: true,
  })
  .promise();

Parameters will be of the form { Name: 'secretName', Value: 'secretValue', ... }[]
*/
/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	AUTH_BESTPLACESINPRFA1DB046_USERPOOLID
	AWS_ACCESS_KEY_ID
Amplify Params - DO NOT EDIT */

exports.handler = async event => {
    // TODO implement
    const response = {
        statusCode: 200,
        event,
        //  Uncomment below to enable CORS requests
        //  headers: {
        //      "Access-Control-Allow-Origin": "*",
        //      "Access-Control-Allow-Headers": "*"
        //  },
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};
