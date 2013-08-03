/* globals console:true */

'use strict';

d3.chart("TemplateChart", {
  initialize: function() {

    this._width  = this.base.attr("width") || 250;
    this._height = this.base.attr("height") || 250;

    console.log('loaded chart - width: ' + this._width + ', height: ' + this._height);

  },

  width: function(w) {
    if (arguments.length === 0) {
      return this._width;
    }
    var oldWidth = this._width;
    this._width = w;
    if (this._width !== oldWidth) {
      this.base.attr("width", this._width);
      this.trigger("change:width", this._width, oldWidth);
      if (this.data) {
        this.draw(this.data);
      }
    }

    return this;
  },

  height: function(h) {
    if (arguments.length === 0) {
      return this._height;
    }
    var oldHeight = this._height;
    this._height = h;
    if (this._height !== oldHeight) {
      this.base.attr("height", this._height);
      this.trigger("change:height", this._height, oldHeight);
      if (this.data) {
        this.draw(this.data);
      }
    }

    return this;
  }

});