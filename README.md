grunt-init-noflo [![Build Status](https://travis-ci.org/noflo/grunt-init-noflo.svg?branch=master)](https://travis-ci.org/noflo/grunt-init-noflo) [![Greenkeeper badge](https://badges.greenkeeper.io/noflo/grunt-init-noflo.svg)](https://greenkeeper.io/)
================

Create a [NoFlo](https://noflojs.org) project or module with [grunt-init][], including [fbp-spec](https://github.com/flowbased/fbp-spec) unit tests.

[grunt-init]: http://gruntjs.com/project-scaffolding

## Installation

If you haven't already done so, install [grunt-init][].

Once grunt-init is installed, place this template in your `~/.grunt-init/` directory. It's recommended that you use git to clone this template into that directory, as follows:

```
git clone https://github.com/noflo/grunt-init-noflo.git ~/.grunt-init/noflo
```

_(Windows users, see [the documentation][grunt-init] for the correct destination directory path)_

## Usage

At the command-line, cd into an empty directory, run this command and follow the prompts.

```
grunt-init noflo
```

_Note that this template will generate files in the current directory, so be sure to change to a new directory first if you don't want to overwrite existing files._

## Changes

* 1.0.0 (November 9 2017)
  - Updated all dependencies to NoFlo 1.x
  - Switched the component template from CoffeeScript to ES6
  - Switched the test template to fbp-spec
