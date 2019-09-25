/**
 * Module dependencies
 */
const fs = require('fs')

const data = JSON.parse(process.argv[2]) // process arguments
const { fileName, reqDate, reqTime, path, clientIP, pid } = data
const cpid = process.pid // child process id
const separatorSize = `REQUEST: ${reqDate}`
const logs = `REQUEST: ${reqDate}\nTIME: ${reqTime}\nPATH: ${path}\nClientIP: ${clientIP}\nProcID: ${pid}\nChildProcID: ${cpid}\n${'-'.repeat(separatorSize.length)}\n`
/**
* write logs
*/
fs.writeFile(fileName, logs, { flag: 'a+' }, err => {
  // error handling
  if (err !== null) {
    console.log(err)
  }
})
