# uppercaseband-vue2

[![CircleCI](https://circleci.com/gh/markdeleon01/uppercaseband-vue2/tree/master.svg?style=svg)](https://circleci.com/gh/markdeleon01/uppercaseband-vue2/tree/master)

As a matter of interest and passion for JavaScript and music in general, I created a Vue2 web application for my band UPPERCASE.

The live site can be found on: https://uppercaseband-vue2.onrender.com

## Project setup

1.  Install NodeJS on your local machine
2.  Clone this project repository
3.  Navigate to the project folder and install

```
npm install
```

4.  Install JSON Server to simulate a backend REST service to deliver data in JSON format to the front-end application

```
npm install -g json-server
```

5.  JSON Server will use the _db.json_ file in the project folder to serve mock data as defined in the file
6.  Run the mock API server

```
json-server --watch db.json
```

### Compiles and hot-reloads for development

```
npm run serve
```

The front-end application runs on: http://localhost:8080/

### Compiles and minifies for production

```
npm run build
```

### Run your unit tests

```
npm run test:unit
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
