# ts-beamery
Beamery Task TypeScript implementation

## Still left to do
- Switch to storing only user points instead of whole grid array
  - Use Player Point class for checking wins
  - Could use a Graph data structure
- Add tests for all classes
- Cache checks before checking whole grid again for winner
- Better cli for the game
- Create microservice/REST endpoints to play the game with postman
- Host service
- Create lobbies with joinable games
- Integrate redis caching service

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