const leapYears = function(year) {
    const isDividedByFour = year % 4 === 0;
    const isCentury = year % 100 === 0;
    const isYearDividedByFourHundred = year % 400 === 0;

    if (isDividedByFour && (!isCentury || isYearDividedByFourHundred)){
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
