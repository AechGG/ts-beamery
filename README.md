# ts-basic
Basic TypeScript implementation

## Using node on local machine

Git clone and install the packages

```
npm install
```

Run the app:

```
npm run build
npm run serve
```

## Using Docker

Build the image: 

```
docker build --tag test . 
```

Run the image:

```
docker run -p 3000:3000
```

# Run Tests

To run the tests you need to have installed the packages as seen above.

Then run:

```
npm run test
```