const noflo = require('noflo');

// Define component interface
// This is a pretty simplistic example. Read more at
//   https://noflojs.org/documentation/components/
exports.getComponent = function () {
  const c = new noflo.Component();

  // Define a meaningful icon for component from http://fontawesome.io/icons/
  c.icon = 'cog';

  // Provide a description on component usage
  c.description = 'do X'

  // Add input ports
  c.inPorts.add('in', {
    datatype: 'string',
  });
  // Add output ports
  c.outPorts.add('out', {
    datatype: 'string',
  });
  c.outPorts.add('error', {
    datatype: 'object',
  });

  // Provide a processing function
  c.process((input, output) => {
    // Check input preconditions
    if (!input.hasData('in')) {
      return;
    }
    // Receive input data
    const data = input.getData('in');
    // Do something, then ...
    // Send the output
    output.send({
      out: data,
    });
    // Finish processing
    output.done();
  });

  // Return the component instance
  return c;
};
