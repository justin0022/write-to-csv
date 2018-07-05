const fs = require('fs')
const { promisify } = require('util')

const fswrite = promisify(fs.writeFile)
const fsappend = promisify(fs.appendFile)

const writeHeader = (pathToFile, header) => fswrite(pathToFile, header + '\r\n')
const append = (pathToFile, row) => fsappend(pathToFile, row + '\r\n')

module.exports = {
  writeHeader,
  append
}
