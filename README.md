# simple-s3-explorer

A simple app for exploring your S3 buckets

## Usage

No pre-built assets are distributed, so the code needs to be pulled & build locally.

### Prerequisites

Recent installations of Node.js & `pnpm` are required.

Listed below are the known working versions I'm running locally.

If your versions differ, [`nvm`](https://github.com/nvm-sh/nvm) is a great tool for trying out other Node.JS versions, and the `pnpm` installation is [here](https://pnpm.io/installation).

- `node` - 18.11.0
- `pnpm` - 7.29.2

### Setup

Simple S3 Explorer uses your local user AWS credentials. _Please make sure you've got valid credentials setup_, or consult the [docs](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html).

Your default AWS profile is used unless otherwise specified. This can be configured with the `AWS_PROFILE` environment variable. See below for more details.

After pulling the repo, run the following commands to install dependencies, build, then start the app.

```sh
$ pnpm install
$ pnpm build
$ pnpm start
```

#### Running with a different AWS Profile

The AWS profile used by the app can be configured by setting `AWS_PROFILE` environment variable for the `pnpm start` script.

##### Example

```sh
$ AWS_PROFILE=my-secondary-profile pnpm start
```
