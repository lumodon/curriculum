'use strict'

whenLoggedIn(function() {
  describe.only('bodyParser is working', function(){
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
})