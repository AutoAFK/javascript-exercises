const removeFromArray = function (array, ...excludeValues) {
    return array.filter(value => !excludeValues.includes(value));
};

// Do not edit below this line
module.exports = removeFromArray;
