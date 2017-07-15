module.exports = function(functions, run) {
    if(typeof functions[run] === 'function' && run != 'default') {
        return functions[run]()
    } 
    else if(typeof functions.default === 'function') {
       return functions.default() 
    }
    else {
        return false
    }
}