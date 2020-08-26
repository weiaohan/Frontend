const { get } = require("http");

function getRandomMoney(amount, count) {
    const randomArr = [];
    const randomMoney = [];
    for (let i = 0; i < count - 1; i++) {
        let random = Math.random();
        if (!randomArr.includes(random)) randomArr.push((random * amount).toFixed(2));
    }
    randomArr.sort((a, b) => a - b);
    randomMoney.push(Number(randomArr[0]))
    for (let i = 1; i < count - 1; i++) {
        randomMoney.push(Number((Number(randomArr[i]) - Number(randomArr[i-1])).toFixed(2)));
    }
    // randomMoney.push((amount - Number(randomArr[count - 2])).toFixed(2));
    let total = randomMoney.reduce((a,b) => Number(a) + Number(b), 0);
    total = Number(total.toFixed(2));
    randomMoney.push(Number((amount - total).toFixed(2)));
    return randomMoney;
}

const randomMoney =  getRandomMoney(100, 2);
console.log(randomMoney);