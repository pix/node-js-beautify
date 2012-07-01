/*
 * node-js-beautify
 * https://github.com/pix/node-js-beautify
 *
 * Copyright (c) 2012 Camille Moncelier
 * Licensed under the MIT license.
 */


var Beautifier = function() {
};

Beautifier.prototype.beautify_js = function(source, options) {
  var b = require("./beautify.js");
  return b.js_beautify(source, options);
};

Beautifier.prototype.beautify_html = function(source, options) {
  var b = require("./beautify-html.js");
  return b.style_html(source, options);
};

Beautifier.prototype.beautify_css = function(source, options) {
  var b = require("./beautify-css.js");
  return b.css_beautify(source, options);
};

module.exports = Beautifier;
