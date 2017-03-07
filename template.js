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

var path = require('path');

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
    init.prompt('license', 'MIT'),
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
    var basePackage = grunt.file.readJSON(path.resolve(__dirname, 'package.json'));

    props.keywords = basePackage.keywords;
    props.dependencies = basePackage.dependencies;
    props.devDependencies = basePackage.devDependencies;
    props.scripts = {
      test: 'grunt test'
    };
    // TODO: compute dynamically?
    props.travis = /y/i.test(props.travis);
    props.travis_node_version = '4.6';

    // Files to copy (and process).
    var files = init.filesToCopy(props);

    // Remove Travis config file if it isn't used
    if (!props.travis) { delete files['.travis.yml']; }

    // Actually copy (and process) files.
    init.copyAndProcess(files, props);

    // Generate package.json file.
    init.writePackageJSON('package.json', props);

    // All done!
    done();
  });

};
