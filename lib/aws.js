import AWS from 'aws-sdk';
import 'dotenv/config';

AWS.config.update({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
});

const getDataFromS3 = (res, rej) => {
  const s3 = new AWS.S3();
  const params = { Bucket: 'relili', Key: 'relili.json' };
  s3.getObject(params, (error, data) => (error ? rej(error) : res(JSON.parse(data.Body.toString()))));
};

export const getData = () => new Promise(getDataFromS3);
