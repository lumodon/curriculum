'use strict'

whenLoggedIn(function() {
  describe.only('bodyParser', function(){
    it('should respond with a parsed json object', function(){
      this.webServerSession().agent.app._events.request.post('/api', (request, response) => {
        response.send(request.body)
      })

      return this
        .post('/api')
        .send({test: 167})
        .then(response => {
          expect(response.body).to.deep.equal({test: 167})
        })
    })
  })

  describe.only('Error routes', function(){
    it('should respond with a json of the error stack', function(){
      return this
        .get('/api/fluffy')
        .catch(error => {
          expect(error).to.have.status(404)
          expect(error.response.text).to.equal('<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<title>Error</title>\n</head>\n<body>\n<pre>Cannot GET /api/fluffy</pre>\n</body>\n</html>\n')
        })
    })
  })

})