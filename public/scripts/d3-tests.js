var xAxis = d3.scaleLinear()
                .domain([0, 5])
                .range([0, 350]);

var histogram = d3.histogram()
                    .domain(xAxis.domain())
                    .thresholds(xAxis.ticks(1));


var angularValues = [2, 3, 4, 3, 3, 3, 5, 2, 3, 3, 4];

var initialObject = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
var angularBins = angularValues.reduce(function(previousObject, currentValue) {
    if (previousObject.hasOwnProperty(currentValue)) {
        previousObject[currentValue]++;
    }

    return previousObject;
}, initialObject);

var max = function(someObject) {
    var top = undefined;
    for (var key in someObject) {
        if (someObject.hasOwnProperty(key)) {
            if (top == undefined) {
                top = someObject[key];
            }

            if (someObject[key] > top) {
                top = someObject[key];
            }
        }
    }

    return top;
}

console.info(angularBins);

for (var bin in angularBins) {
    if (angularBins.hasOwnProperty(bin)) {
        console.log(bin + ' should have ' + angularBins[bin] * (100 / max(angularBins)) + '% height');
    }
};
