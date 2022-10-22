'use strict'

function errorHandler (error) {
  console.error(error)
  throw new Error('Server operation failure')
}

module.exports = errorHandler
