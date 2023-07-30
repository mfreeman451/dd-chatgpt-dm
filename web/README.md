# dd-chatgpt-dm (web)

Used for initial character creation.

## Setup

Make sure to install the dependencies:

```bash
# pnpm
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# pnpm
pnpm -o dev
```

## Production

Build the grpc-web proto transformations:

```bash
# protoc
cd web/
protoc --proto_path=proto --ts_out=pb --ts_proto_opt=forceLong=long --plugin=./node_modules/.bin/protoc-gen-ts proto/*.proto
```

Build the application for production:

```bash
# pnpm
pnpm run build
```

Locally preview production build:

```bash
# pnpm
pnpm run preview
```
