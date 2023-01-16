// You should implement your task here.

module.exports = function towelSort(matrix) {
    const result = [];
    var index = 1;
    if (matrix) {
        matrix.forEach((element) => {
            if (index == -1) {
                element.reverse();
            }
            element.forEach((el) => {
                result.push(el);
            });
            index *= -1;
        });
    }
    return result;
};
