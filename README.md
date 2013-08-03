d3.chart.template
=================

This project will scaffold out building a [d3.chart](http://misoproject.com/d3-chart/). This is based on [d3.chart.template](https://github.com/misoproject/d3.chart.template).

## Installing

Clone this repo into a new directory and then remove the template git information. Replace <chartname> below with the name of the chart you will be creating.

    git clone https://github.com/jgoodall/d3.chart.template.git d3.chart.<chartname>
    cd <chartname>
    rm -rf .git
    git init

## Using

To get started, do the following:

1. Customize the `package.json` file to set your name, description, repository, author, etc. The name will be used by grunt to create the concatenated chart from the source files in the `src` directory.
2. Rename the source files in `src` to the kind of chart you are building.
3. Edit `meta.srcFiles` in `Gruntfile.js` to match the source file names.
4. Run `bower install` to install `d3` and `d3.chart` into `bower_components`
5. Run `npm install -d` to install the grunt modules.
6. Create your chart.
7. Edit the files in `example` to match your new name and test your chart.
8. Run `grunt` to build the concatenated and minified versions in the project root.
9. [optional]Publish your chart on the [d3.chart charts page](http://misoproject.com/d3-chart/charts.html)

## Building

[Grunt](http://gruntjs.com/) will use the `Gruntfile.js` to build the files in `src/` into a single file and a compressed file in the root directory of the project. Just run `grunt`.

To run [jshint](http://www.jshint.com/) continually on file changes in the `src` directory, run `grunt watch`.

## Publishing Charts

To get your chart published on the d3.chart [website](http://misoproject.com/d3-chart/charts.html) there are only two requirements:

* You must name your repo in the following format: `d3.chart.*`. For example: `d3.chart.barchart` or `d3.chart.my-epic-chart`. 
* You must have a `package.json` in your repo that declares the version of d3.chart that your chart utilizes like so:

```json
{
  "d3.chart": {
    "version" : "0.0.1"
  }
}
```

## To Do

* Add testing setup