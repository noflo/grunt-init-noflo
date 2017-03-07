noflo = require 'noflo'
unless noflo.isBrowser()
  chai = require 'chai' unless chai
  path = require 'path'
  baseDir = path.resolve __dirname, '../'
else
  baseDir = '{%= name %}'

describe '{%= component_name %} component', ->
  component = null
  before ->
    # Wrap the component into a function
    component = noflo.asCallback '{%= component_name %}',
      baseDir: baseDir
  describe 'when receiving data', ->
    it 'should send it out as-is', (done) ->
      # Send some data to the component and wait for results
      component 'foo', (err, result) ->
        return done err if err
        chai.expect(result).to.equal 'foo'
        done()
