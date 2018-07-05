const fs = require('fs')
const { promisify } = require('util')
const path = require('path')

const fswrite = promisify(fs.writeFile)
const fsappend = promisify(fs.appendFile)

const pathAndName = pathToFile => filename => path.join(__dirname, `${pathToFile}/${filename}.csv`)

const writeHeader = (pathToFile, header) => fswrite(pathToFile, header + '\r\n')
const append = (pathToFile, row) => fsappend(pathToFile, row + '\r\n')

module.exports = {
  pathAndName,
  writeHeader,
  append
}
