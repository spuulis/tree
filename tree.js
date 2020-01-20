function tree(c, R, al, th, N, k, level) {
    let be = al - (N - 1) * th / 2;
    let rk = R * k;
    let nLvl = level - 1;
    for(let i = 0; i < N; i++) {
        let p = polar(c, R, be);
        // [Draw]
        ctx.beginPath();
        ctx.moveTo(c.X, c.Y);
        ctx.lineTo(p.X, p.Y);
        ctx.stroke();
        // [Next]
        if(level > 1) {
            tree(p, rk, be, th, N, k, nLvl);
        }
        be += th;
    }
}