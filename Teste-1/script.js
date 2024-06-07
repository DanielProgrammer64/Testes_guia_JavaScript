let points = [{
    x: 0,
    y: 0
}, {
    x: 1,
    y: 1
}]

let data = {
    trial1: [
        [1, 2],
        [3, 4]
    ],
    trial2: [
        [2, 3],
        [4, 5]
    ]
}

console.info(data.trial1[1]); // == [ 3, 4 ]
console.info(data.trial2[1][0]); // == 4
console.info(points[1].x); // == 1


let funcReturns = () => {
    let result = [];
    for (let elements of points) {
        for (let axis in elements) {
            result.push(axis);
        }
    };
    return result;
}

console.info(funcReturns()) ; // == [ 'x', 'y', 'x', 'y' ]

let BetterFunc = () => {
    for(let i = 0; i < points.length; i++) {
        for(let chave in points[i]) {
            console.info(`${chave}: ${points[i][chave]}`)
        }
    }
}

BetterFunc(); /*==

x: 0
y: 0
x: 1
y: 1

*/

let BetterFunc2 = () => {
    let result = [];
    for(let i = 0; i < points.length; i++){
        for(let chave in points[i]){
            result.push(`${chave}: ${points[i][chave]}`)
        }
    }
    console.info(result);
}

BetterFunc2(); // == [ 'x: 0', 'y: 0', 'x: 1', 'y: 1' ]