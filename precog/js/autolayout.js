function autolayout(step_function) {
    step_function = step_function || function (step, steps) { return {x: step * 1200}; };
    var elements = document.getElementsByClassName('slide');
    var eps = 1e-5;
    var step;
    for (var i = 0; i < elements.length; i++) {
        step = step_function(i, elements.length);
        for (var attr in step) {
            elements[i].dataset[attr] = (Math.abs(step[attr]) < eps) ? 0 : step[attr];
        }
    }
}