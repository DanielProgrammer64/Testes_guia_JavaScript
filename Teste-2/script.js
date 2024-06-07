let points = [{
    x: 0,
    y: 0
}, {
    x: 1,
    y: 1
}]


Array.prototype.dist = () => {
    let p1 = this[0];
    let p2 = this[1];

    let Formula_A = p2.x-p1.x;
    let Formula_B = p2.y-p1.x;
    
    console.info(Math.sqrt(Formula_A*Formula_A + Formula_B*Formula_B))
}

console.info(points.dist())