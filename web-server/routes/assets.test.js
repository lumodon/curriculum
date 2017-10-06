'use strict'
const cheerio = require('cheerio')

whenLoggedIn(function() {
  describe.only('/assets/fonts', function(){
    const routes = [
    '/calendar', 
    '/cos', 
    '/glossary',
    '/guide',
    '/modules',
    '/phases'
    ]

    routes.map(route => {
      it(`should import fonts to route ${route}`, function(){
        return this
          .get(route)
          .then(response => {
            const $ = cheerio.load(response.text)
            expect(response).to.have.status(200)
            //expect($('nav').html())
            //console.log($('nav').parseHTML())
            console.log('spy', this.spy.on(require('./assets.js')))
            //console.log(response)
            console.log($.parseHTML(response.text))
          }).catch(error => {
            throw error
          })
      })
    })
  })
}) 