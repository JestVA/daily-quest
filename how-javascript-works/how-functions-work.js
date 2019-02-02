// Make an object by taking property names from an array of strings

function make_set(array, value = true) {
    const object = Object.create(null);
    array.forEach(function(name) {
        object[name] = value;
    });
    return object;
}

