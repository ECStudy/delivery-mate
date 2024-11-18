import { getAWSCredentials } from '@/lib/aws/config';
import aws from 'aws-sdk';

export function getS3Client() {
  const s3Client = new aws.S3(getAWSCredentials());

  return s3Client;
}

//usage
// import { getS3Client } from '@/lib/aws/s3';
//
// const s3Client = getS3Client();
// const params = {
//   Bucket: 'bucket-name',
//   Key: 'file-name',
// };

// s3Client.getObject(params, (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });
