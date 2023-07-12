function countPrimeNumbers() {
    let count = 0;
    for (let i = 2; i <= 100; i++) {
        let check = 1;
        for (let divisor = 2; divisor < i; divisor++) {
            if (i % divisor === 0) {
                check = 0;
                break;
            }
        }
        count += check;
        }
    return count;
}
let start = performance.now();
for (let iter = 0; iter <= 100; iter++) {
    countPrimeNumbers();
};
let end = performance.now();
let elapsed = (end - start);
console.log(`Execution time of calculating countPrimeNumbers 100 times was ${elapsed} milliseconds.`);