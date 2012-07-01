var Beautifier = require('../lib/node-js-beautify.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports['awesome'] = {
  setUp: function(done) {
    // setup here
    done();
  },
  'beautify_js': function(test) {
    test.expect(1);
    var b = new Beautifier();
    test.equal('var a;', b.beautify_js('var a;', {}), 'Beautified successfuly');
    test.done();
  },
  'beautify_html': function(test) {
    test.expect(1);
    var b = new Beautifier();
    test.equal('<a href="" />', b.beautify_html('<a href=""/>', {}), 'Beautified successfuly');
    test.done();
  }
};
