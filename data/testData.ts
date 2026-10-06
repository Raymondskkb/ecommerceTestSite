import dotenv from 'dotenv';
dotenv.config({ path: '.env' });

// interface TestData {
//   validUser: {
//     username: string;
//     password: string ;
//   };
//   invalidUser: {
//     username: string ;
//     password: string ;
//   };
//   url_dev: string ;
// }

export const testData = {
  validUser: {
    username: process.env.TEST_USERNAME,
    password: process.env.TEST_PASSWORD
  },
  invalidUser: {
    username: "wrongUsername",
    password: "wrongPassword"
  },
  url_dev: process.env.URL_DEV,
};