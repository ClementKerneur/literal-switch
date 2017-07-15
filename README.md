# description

Use literal object like switch function.

# install

``` shell
$ npm i --save literal-switch
```

# usage

``` javascript
var Switch = require('literal-switch')

var nb = Switch({
    One: function() { return 'One' },
    Two: function() { return 'Two' },
    Three: function() { return 'Three' }
}, 'Two')

console.log(nb)
```