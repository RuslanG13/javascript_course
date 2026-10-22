const channel = "Youtube";

function multiplyBy(factor) {
    console.log(channel);

    return (number) => {
        return number * factor;
    }
}

const double = multiplyBy(2);
const triple = multiplyBy(3);

console.log(double(5));  // 10
console.log(triple(5));  // 15