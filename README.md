# node-js-beautify

Another fork of js-beautify for node

## Getting Started
Install the module with: `npm install node-js-beautify`

```javascript
var Beautifier = require('node-js-beautify');
var b = new Beautifier(); // "awesome"
console.log(b.beautify_js('var a;', {});
console.log(b.beautify_html('<a href=""/>', {});
console.log(b.beautify_css('text-decoration: underline;', {});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt](https://github.com/cowboy/grunt).

## Release History
v0.1.0
	- Initial release

## License
Copyright (c) 2012 Camille Moncelier  
Licensed under the MIT license.
