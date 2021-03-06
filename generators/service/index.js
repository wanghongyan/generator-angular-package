/**
 * Created by coichedid on 21/04/15.
 */
/**
 * Created by coichedid on 21/04/15.
 */
/**
 * Created by coichedid on 20/04/15.
 */
'use strict';

var util = require('util'),
  fs = require('fs'),
  yeoman = require('yeoman-generator');


var ServiceGenerator = yeoman.generators.NamedBase.extend({
  askForModuleName: function() {
    var modulesFolder = process.cwd() + '/modules/';
    var done = this.async();

    var prompts = [{
      type: 'list',
      name: 'moduleName',
      default: 'core',
      message: 'Which module does this controller belongs to?',
      choices: []
    }
    ];

    // Add module choices
    if (fs.existsSync(modulesFolder)) {

      fs.readdirSync(modulesFolder).forEach(function(folder) {
        var stat = fs.statSync(modulesFolder + '/' + folder);

        if (stat.isDirectory()) {
          prompts[0].choices.push({
            value: folder,
            name: folder
          });
        }
      });
    }

    this.prompt(prompts, function(props) {
      this.moduleName = props.moduleName;
      this.slugifiedModuleName = this._.slugify(this.moduleName);

      this.slugifiedServiceName = this._.slugify(this._.humanize(this.name));
      this.classifiedServiceName = this._.classify(this.slugifiedServiceName);
      this.humanizedServiceName = this._.humanize(this.slugifiedServiceName);
      done();
    }.bind(this));
  },

  renderDirectiveFile: function() {
    this.template('service.js', 'modules/' + this.slugifiedModuleName + '/services/' + this.slugifiedServiceName + '.service.js');
  }
});

module.exports = ServiceGenerator;
