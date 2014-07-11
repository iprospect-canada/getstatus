Http status getter
==========================
--------------------------

Http status getter is a command line tool allowing to get Http statuses array for post-processing.

  - Install
  - Use the function
  - Enjoy

This tool is made to improve performances are given by PHP script. NodeJs is naturally faster because its awesome.

Version
----

0.1.1

Installation
--------------

```sh
npm install getstatus
```

Usage example
------

```sh
var lib = require('getstatus');
var EventEmitter = require('events').EventEmitter;

var app = new EventEmitter();

var items = [ 'http://www.google.fr', 'http://iprospect.com', 'http://www.yahoo.ca'];

console.log('--------------------');
lib.getStatus(items.shift(), items, app);
app.on('complete', function(results){
  console.log('--------------------');
  console.log(results);
  console.log('--------------------');
});

```

Result array
------

```sh
[ { url: 'http://www.google.fr', status: 200 },
  { url: 'http://iprospect.com', status: 200 },
  { url: 'http://www.yahoo.ca', status: 301 } ]
```

License
----

iProspect All Rights Reserved © 2014

Author
----
[Thibault Montel]


[Thibault Montel]:thibault.montel@iprospect.com
