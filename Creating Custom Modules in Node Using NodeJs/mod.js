console.log("Hello World");

function average(arr) {
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });

    return sum / arr.length;
};

module.exports = {
    avg: average,
    name: "bilal",
    age: 18,
    console: ("Hello World")
};