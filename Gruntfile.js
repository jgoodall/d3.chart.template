module.exports = function(grunt) {

  "use strict";

  // name is pulled from the package.json file's 'name'

  grunt.initConfig({
    meta: {
      pkg: grunt.file.readJSON("package.json"),
      srcFiles: [
        "src/template.js",
        "src/template-extensions.js"
      ]
    },
    watch: {
      scripts: {
        files: ["src/**/*.js"],
        tasks: ["jshint"]
      }
    },
    jshint: {
      options: {
        indent: 2,
        globalstrict: true,
        laxcomma: true
      },
      chart: {
        options: {
          browser: true,
          globals: {
            d3: true
          }
        },
        files: {
          src: "<%= meta.srcFiles %>"
        }
      },
      grunt: {
        options: {
          node: true
        },
        files: {
          src: ["Gruntfile.js"]
        }
      }
    },
    concat: {
      options: {
        banner: "/*! <%= meta.pkg.name %> - v<%= meta.pkg.version %>\n" +
          " *  License: <%= meta.pkg.license %>\n" +
          " *  Date: <%= grunt.template.today('yyyy-mm-dd') %>\n" +
          " */\n"
      },
      dist: {
        files: {
          "<%= meta.pkg.name %>.js": "<%= meta.srcFiles %>"
        }
      },
      release: {
        files: {
          "<%= meta.pkg.name %>.js": "<%= meta.srcFiles %>"
        }
      }
    },
    uglify: {
      options: {
        // Preserve banner
        preserveComments: "some"
      },
      dist: {
        files: {
          "<%= meta.pkg.name %>.min.js": "<%= meta.pkg.name %>.js"
        }
      },
      release: {
        files: {
          "<%= meta.pkg.name %>.min.js": "<%= meta.pkg.name %>.js"
        }
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-watch");

  grunt.registerTask("default", ["jshint", "concat:dist", "uglify:dist"]);
  grunt.registerTask("release", ["jshint", "concat", "uglify"]);
};
