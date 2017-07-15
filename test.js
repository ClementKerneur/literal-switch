var Switch = require('./index.js')

var nb = Switch({
    One: function() { return 'One' },
    Two: function() { return 'Two' },
    Three: function() { return 'Three' }
}, 'Two')

console.log(nb)