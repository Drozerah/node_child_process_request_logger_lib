# Node.js Child Process Based Request Logger Library

> A library to write client side requests logs into a log file 

## Installation:

Open your terminal where you want to install the logger library then:

````bash
λ git clone https://github.com/Drozerah/node_child_process_request_logger_lib.git lib && cd lib && rm -rf .git
````
This command will create a `./lib` directory within your current working directory which contains the _logger_ files.

__Dependency:__

The _logger_ needs the `request-ip` NPM package dependecy to work so you also need to install it for production:

````bash
λ npm install request-ip --save
````

- more about [request-ip](https://www.npmjs.com/package/request-ip)

## Usage:

Say you allready have a Node.js Express.js server configured you can call the _logger_ in a top level middleware executed for every request to the app:

````javascript
const express = require('express')
const app = express()
/**
* Lib modules
*/
const { logger } = require('./lib/logger')

/* top middleware executed for every request to the app */
app.use((req, res, next) => {
  
  logger(req, 'tmp/http-logs.txt') // write logs as child process
  next()
})

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
````

__Notes:__

- the `logger(request, log.txt)` function takes two parameters
    - the `request` parameter is provided by the enclosing middleware
    - the second parameter is optional - default will create a `http-logs.txt` within the root folder of your application, passing in a path and a file name as a string will create the log file where specified with the path ex: `logger(req, temporary/log.txt)`

`./temporary/log.txt`
````
REQUEST: Wed Sep 25 2019 10:29:49 GMT+0200 (GMT+02:00)
TIME: 1569400189224
PATH: /
ClientIP: ::1
ProcID: 8580
ChildProcID: 9468
------------------------------------------------------
REQUEST: Wed Sep 25 2019 10:32:11 GMT+0200 (GMT+02:00)
TIME: 1569400331687
PATH: /
ClientIP: ::1
ProcID: 7360
ChildProcID: 9660
------------------------------------------------------
````

__Useful links:__

- [Node.js - Child Processes](https://nodejs.org/docs/latest-v10.x/api/child_process.html)

__Author:__

- Thomas G. aka Drozerah - [GitHub](https://github.com/Drozerah)