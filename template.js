/*
 * grunt-init-noflo
 * https://noflojs.org/
 *
 * Copyright (c) 2013 Henri Bergius
 *
 * Derived from grunt-init-node copyright (c) 2012 "Cowboy" Ben Alman, contributors
 *
 * Licensed under the MIT license.
 */

'use strict';

// Basic template description.
exports.description = 'Create a NoFlo package, including Mocha unit tests.';

// Template-specific notes to be displayed before question prompts.
exports.notes = '_Project name_ should be a unique ID not already in use at npmjs.org.';

// Template-specific notes to be displayed after question prompts.
exports.after = 'You should now install project dependencies with _npm ' +
  'install_. After that, you may execute project tasks with _grunt_. For ' +
  'more information about installing and configuring Grunt, please see ' +
  'the Getting Started guide:' +
  '\n\n' +
  'http://gruntjs.com/getting-started';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function(grunt, init, done) {

  init.process({type: 'node'}, [
    // Prompt for these values.
    init.prompt('name'),
    init.prompt('description'),
    {
      name: 'component_name',
      message: 'Give a name for your first NoFlo component. Component names are usually CamelCased verbs',
      'default': 'DoSomething'
    },
    init.prompt('version'),
    init.prompt('licenses'),
    init.prompt('author_name'),
    init.prompt('author_email'),
    init.prompt('author_url'),
    init.prompt('repository'),
    {
      name: 'travis',
      message: 'Will this project be tested with Travis CI?',
      'default': 'Y/n',
      warning: 'If selected, you must enable Travis support for this project in https://travis-ci.org/profile'
    }
  ], function(err, props) {
    props.keywords = [];
    props.dependencies = {
      'noflo': '~0.5.0'
    };
    props.devDependencies = {
      'grunt': '~0.4.1',
      'grunt-contrib-coffee': '~0.6.6',
      'grunt-coffeelint': '~0.0.6',
      "grunt-cafe-mocha": "~0.1.2",
      "chai": "~1.5.0",
      "mocha": "~1.9.0",
      "grunt-mocha-phantomjs": "~0.2.2",
      "grunt-component-build": "~0.2.7",
      "grunt-contrib-uglify": "~0.2.0",
      "grunt-contrib-watch": "~0.3.1",
      "component-json": "~0.1.4",
      "grunt-combine": "~0.8.3",
      "grunt-component": "~0.1.2",
      "grunt-noflo-manifest": "~0.1.2"
    };
    props.scripts = {
      test: 'grunt test'
    };
    // TODO: compute dynamically?
    props.travis = /y/i.test(props.travis);
    props.travis_node_version = '0.10';

    // Files to copy (and process).
    var files = init.filesToCopy(props);

    // Remove Travis config file if it isn't used
    if (!props.travis) { delete files['.travis.yml']; }

    // Add properly-named license files.
    init.addLicenseFiles(files, props.licenses);

    // Actually copy (and process) files.
    init.copyAndProcess(files, props);

    // Generate package.json file.
    init.writePackageJSON('package.json', props);

    // All done!
    done();
  });

};
