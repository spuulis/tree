function polar(c, R, th) {
    return {"X": c.X + R * Math.cos(th), "Y": c.Y - R * Math.sin(th)};
}

function regPoly(c, R, N, al) {
    let th = 2 * Math.PI / N;
    let p = polar(c, R, al);
    ctx.moveTo(p.X, p.Y);
    for(let i = 1; i < N; i++) {
        p = polar(c, R, al + i * th);
        ctx.lineTo(p.X, p.Y);
    }
    p = polar(c, R, al);
    ctx.lineTo(p.X, p.Y);
    ctx.stroke();
}

function regPolyVert(c, R, N, al) {
    let vertices = Array(N);
    let th = 2 * Math.PI / N;
    ctx.moveTo(p.X, p.Y);
    for(let i = 0; i < N; i++) {
        vertices[i] = polar(c, R, al + i * th);
    }
    return vertices;
}