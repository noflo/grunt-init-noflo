noflo = require 'noflo'

class {%= component_name %} extends noflo.Component
  constructor: ->
    @inPorts =
      in: new noflo.Port
    @outPorts =
      out: new noflo.Port

exports.getComponent = -> new {%= component_name %}
