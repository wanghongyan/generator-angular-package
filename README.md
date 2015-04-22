# AngularJS Module generator

[Yeoman](http://yeoman.io) generator to create AngularJS modules like a library.

[![Build Status](https://travis-ci.org/InfinitePress/generator-angular-package.svg?branch=master)](https://travis-ci.org/InfinitePress/generator-angular-package)

This generator takes the hard work to make a AngularJS module and gives you time to think in the core functionality of your module.
Just have to install [yeoman](http://yeoman.io) and than start generating your modules.


## Quick start

Install [yeoman](http://yeoman.io):

```sh
$ npm install -g yo
```

Install generator-angularjs-module:

```sh
$ npm install -g generator-angularjs-module
```

Create a new project directory:

```sh
$ mkdir myProject
$ cd myProject
```

Run:

```sh
$ yo angularjs-module
```
Answer the necessary questions to create the boilerplate for your module
At this point you will get a module structure like this:

```sh
.
├── .bowerrc                                  # Configure bower directory for development
├── .editorconfig                             # Editor configuration for code consistency
├── .gitignore                                # Includes files that Git should ignore
├── .jshintrc                                 # JSHint config with angular global support
├── LICENSE                                   # Custom license file with your name in it
├── README.md                                 # Basic README.md with title of your module
├── bower.json                                # Bower configuration with custom devDependencies and ignore files
├── dist                                      # This folder and contents is generated by running gulp
│   ├── myProject.js                          # Your module, for dev proposes
│   └── myProject.min.js                      # Your module, ready for production
├── gulpfile.js                               # Gulp configuration for build your module
├── karma-dist-concatenated.conf.js           # Karma configuration to run unit tests using myProject.js
├── karma-dist-minified.conf.js               # Karma configuration to run unit tests using myProject.min.js
├── karma-src.conf.js                         # Karma configuration to run unit tests using src/**/*.js
├── package.json                              # Npm configuration with necessary dependencies for development
├── modules                                   # Source directory
│   └── myProject
│       ├── directives                        # Your directives place
│       ├── controllers                       # Your controllers place
│       ├── filters                           # your filters place
│       ├── sampleLibrary.module.js           # Main module file
│       └── services                          # Your services place
└── test
    ├── e2e
    │   └── myProject                         # Directory where you can store E2E tests
    └── unit
        └── myProject
            ├── directives                    # Directory where you can store unit tests for directives
            ├── controllers                   # Directory where you can store unit tests for controllers
            ├── filters                       # Directory where you can store unit tests for filters
            ├── sampleLibrarySpec.js          # Unit tests for main module
            └── services                      # Directory where you can store unit tests for services
```

To use your module, use the subgenerators commands:
```sh
$ yo angularjs-module:directive <<directive name>>
$ yo angularjs-module:controller <<controller name>>
$ yo angularjs-module:service <<service name>>
```

Then you can build your project with

```sh
$ gulp
```
With this, you will have 2 files on dist folder:

-`<<your project name>>.js`: builded version for dev

-`<<your project name>>.min.js`: builded version for production

## License
MIT
