# RequireJS CSS Plugin

## Requirements

* [RequireJS](http://requirejs.org/docs/download.html#requirejs)
* [RequireJS Text](http://requirejs.org/docs/download.html#text)

## Usage

Stylesheets can be required as dependencies just like the way we're used to require text files.
Instead of prefixing your dependency with ***text!***, use ***css!***. The plugin will generate a style block in the head section.

### Example

<pre>
require([ 'css!static/css/module' ], function( css ) {
	// Stylesheet is added at this point, let's render something...
});
</pre>