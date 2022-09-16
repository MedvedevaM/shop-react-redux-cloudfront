# React-shop-cloudfront

### [Link to the Bucket](https://nodejs-aws-app.s3.eu-west-1.amazonaws.com/index.html)

### [Link to the CloudFront Distribution](https://dh0wjanh04urt.cloudfront.net/)

## Used technologies

- [Vite](https://vitejs.dev/) as a project bundler
- [React](https://beta.reactjs.org/) as a frontend framework
- [React-router-dom](https://reactrouterdotcom.fly.dev/) as a routing library
- [MUI](https://mui.com/) as a UI framework
- [React-query](https://react-query-v3.tanstack.com/) as a data fetching library
- [Formik](https://formik.org/) as a form library
- [Yup](https://github.com/jquense/yup) as a validation schema
- [Serverless](https://serverless.com/) as a serverless framework
- [Vitest](https://vitest.dev/) as a test runner
- [MSW](https://mswjs.io/) as an API mocking library
- [Eslint](https://eslint.org/) as a code linting tool
- [Prettier](https://prettier.io/) as a code formatting tool
- [TypeScript](https://www.typescriptlang.org/) as a type checking tool

## Available Scripts

### `start`

Starts the project in dev mode with mocked API on local environment.

### `build`

Builds the project for production in `dist` folder.

### `preview`

Starts the project in production mode on local environment.

### `test`, `test:ui`, `test:coverage`

Runs tests in console, in browser or with coverage.

### `lint`, `prettier`

Runs linting and formatting for all files in `src` folder.

### `client:deploy`

Deploy the project build from `dist` folder to configured in `serverless.yml` AWS S3 bucket.

### `client:build:deploy`

Combination of `build` and `client:deploy` commands with or without confirmation.

### `cloudfront:setup`

Deploy configured in `serverless.yml` stack via CloudFormation.

### `cloudfront:domainInfo`

Display cloudfront domain information in console.

### `cloudfront:invalidateCache`

Invalidate cloudfront cache.

### To build and deploy: `cloudfront:build:deploy`

Combination of `cloudfront:setup` and `client:build:deploy` commands.

### To build, deploy and invalidate cash: `cloudfront:build:deploy:invalidateCache`

Combination of `cloudfront:build:deploy` and `cloudfront:invalidateCache` commands.

### `serverless:remove`

Remove an entire stack configured in `serverless.yml` via CloudFormation.
