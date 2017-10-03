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
      return expect(this
        .get('/api/fluffy'))
        .should.be.rejectedWith(Error);
    })
  })
})