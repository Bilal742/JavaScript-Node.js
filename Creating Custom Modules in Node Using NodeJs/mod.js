console.log("Hello world");

function average(arr) {
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum + arr.length;
};

module.exports = {
    avg: average,
    name: "bilal", 
    age: 18
};

module.exports.name = "ali"