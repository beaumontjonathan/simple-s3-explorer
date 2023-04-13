# simple-s3-explorer

A simple app for exploring your S3 buckets

## Usage

No pre-built assets are distributed, so the code needs to be pulled & build locally.

### Prerequisites

Recent installations of Node.js & `pnpm` are required.

Listed below are the known working versions I'm running locally.

If your versions differ, [`nvm`](https://github.com/nvm-sh/nvm) is a great tool for trying out other Node.JS versions, and the `pnpm` installation is [here](https://pnpm.io/installation).

- `node` - 18.11.0
- `pnpm` - 8.2.0

### Setup

Simple S3 Explorer uses your local user AWS credentials. _Please make sure you've got valid credentials setup_, or consult the [docs](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html).

Your default AWS profile is used unless otherwise specified. This can be configured with the `AWS_PROFILE` environment variable. See below for more details.

After pulling the repo, run the following commands to install dependencies, build, then start the app.

Ports `4000` & `5000` are used, so make sure no processes on your machine are using them already.

```sh
$ pnpm install
$ pnpm build
$ pnpm start
```

The app should now be accessible on http://localhost:5000.

#### Running with a different AWS Profile

The AWS profile used by the app can be configured by setting `AWS_PROFILE` environment variable for the `pnpm start` script.

##### Example

```sh
$ AWS_PROFILE=my-secondary-profile pnpm start
```

## Terminal UI

There is an experimental, incomplete Terminal UI (tui) powered by
[ink](https://github.com/vadimdemedes/ink).

This is unfinished & try at your own risk.

### Usage

To start the tui in dev mode, run thr following.

```sh
$ pnpm --filter cli run start:dev
```

## TODO

- [ ] Development guide frontend/backend
- [ ] Tests
- [ ] CI
- [ ] Electron/bundled app
