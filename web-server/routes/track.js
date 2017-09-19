const url = require('url')
const bodyParser = require('body-parser')
const queries = require('../../database/queries')
const commands = require('../../database/commands')

module.exports = app => {

  app.get('/track', (request, response, next) => {
    request.backOffice.getAllUsers({
      includePhases: true,
    }).then(users => {
      response.render('track', {users, title: 'Track'})
    })
    .catch(next)
  })

}
