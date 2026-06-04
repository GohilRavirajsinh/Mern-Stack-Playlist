let a = 6;

const fact = (number) => {
    let fac = 1;
    for (let index = 1; index <= number; index++) {
        fac = fac * index
    }
    return fac
}
console.log(fact(a))


// using reduce
function FacFor(number) {
    let arr = Array.from(Array(number + 1).keys())
    let c = arr.slice(1,).reduce((a, b) => a * b)
    return c
}

console.log(FacFor(a))