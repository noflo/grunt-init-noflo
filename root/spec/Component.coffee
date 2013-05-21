noflo = require 'noflo'
if typeof process is 'object' and process.title is 'node'
  chai = require 'chai' unless chai
  component = require '../src/components/{%= component_name %}.coffee'
else
  component = require '{%= name %}/components/{%= component_name %}.js'

describe '{%= component_name %} component', ->
  c = null
  ins = null
  out = null
  beforeEach ->
    c = callback.getComponent()
    ins = noflo.socket.createSocket()
    out = noflo.socket.createSocket()
    c.inPorts.in.attach ins
    c.outPorts.out.attach cb
