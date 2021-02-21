This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Basic movie app made with React as an excuse to try different redux middleware technologies

### Available Scripts

In the project directory, you can run:

 ```
 npm install
 npm start
```
Before running the app, please define a varible in an enviroment file `.env` in the root directory 
with your [TMDB](https://www.themoviedb.org/documentation/api) API KEY as follows:

```
REACT_APP_API_KEY='api_key_string'
```

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### The same movie APP is coded with different middleware applications that handle asynchronous operations

| Branch        | Tech            |
| ------------- |:----------------| 
| master        | CustomMiddleware|
| redux-thunk   | redux-thunk     |
| redux-saga    | redux-saga      |
