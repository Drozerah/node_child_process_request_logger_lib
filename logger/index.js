/**
 * Module dependencies
 */
const path = require('path')
const { spawn } = require('child_process')
/**
* NPM Dependencies
*/
const requestIp = require('request-ip')
/**
 * Write logs in default logs.txt file in the current workind directory
 *
 * We write logs for:
 *
 * - the request date (REQUEST)
 * - the request timestamps (TIME)
 * - the path called by the client (PATH)
 * - the client IP address (ClientIP)
 * - the node process id (ProcID)
 * - the child process id (ChildProcID)
 *
 * Method: we use the fs.writeFile() method in a child process to write the logs within a given file name
 *
 * Dependencie: this fonction require the NPM 'request-ip' module for the client IP address
 *
 * @param  {object} req the request Object
 * @param  {string} string  the log file name to write, default is http-logs.txt within the root directory
 * @returns {string} write the log file with data
 * @author Drozerah https://gist.github.com/Drozerah/
 */
const logger = (req, fileName = 'http-logs.txt') => {
  /**
   *  Child Process Spawn Logger
   *  write logs from request url
   */
  const loggerData = {
    fileName, // logs file name
    reqDate: `${new Date()}`, // request date
    reqTime: `${Date.now()}`, // request time
    path: req.url, // the path requested by a client
    clientIP: `${requestIp.getClientIp(req)}`, // client IP address
    pid: process.pid // the current Node process identifier
  }
  const spawnLogger = path.join(__dirname, 'child_process_spawn_logger')
  // run child logger process
  return spawn(process.argv[0], [spawnLogger, JSON.stringify(loggerData)], {
    detached: true,
    stdio: 'ignore'
  }).unref()
}
module.exports.logger = logger
