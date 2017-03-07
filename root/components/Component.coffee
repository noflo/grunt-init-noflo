noflo = require 'noflo'

exports.getComponent = ->
  c = new noflo.Component

  # Define a meaningful icon for component from http://fontawesome.io/icons/
  c.icon = 'cog'

  # Provide a description on component usage
  c.description = 'do X'

  # Add input ports
  c.inPorts.add 'in',
    datatype: 'string'
  # Add output ports
  c.outPorts.add 'out',
    datatype: 'string'

  # Provide a processing function
  c.process (input, output) ->
    # Check input preconditions
    return unless input.hasData 'in'
    # Receive input data
    data = input.getData 'in'
    # Send the output
    output.send
      out: data
    # Finish processing
    output.done()
