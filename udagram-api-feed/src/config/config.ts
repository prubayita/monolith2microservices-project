export const config = {
  'username': "pabrodbproject3",
  'password': "pabrodbproject3",
  'database': "pabrodbproject3",
  'host': 'pabrodbproject3.cpqhip8o1yik.us-east-1.rds.amazonaws.com',
  'dialect': 'postgres',
  'aws_region': "us-east-1",
  'aws_profile': 'default',
  'aws_media_bucket': "arn:aws:s3:::project3pabro",
  'url': process.env.URL,
  'jwt': {
    'secret': process.env.JWT_SECRET,
  },
};
