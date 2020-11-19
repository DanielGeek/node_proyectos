const AWS = require('aws-sdk');

// Enter copied or downloaded access ID and secret key here
const ID = 'tu access ID';
const SECRET = 'tu secret key';

// The name of the bucket that you have created
const BUCKET_NAME = 'nombredetubucket-en-s3';


// Now, we need to initialize the S3 interface by passing our access keys:
const s3 = new AWS.S3({
    accessKeyId: ID,
    secretAccessKey: SECRET
});

const params = {
    Bucket: BUCKET_NAME,
    CreateBucketConfiguration: {
        // Set your region here
        LocationConstraint: "eu-west-1"
    }
};

s3.createBucket(params, function(err, data) {
    if (err) console.log(err, err.stack);
    else console.log('Bucket Created Successfully', data.Location);
});

// ir a la consola y ejecutar el comando node create-bucket.js