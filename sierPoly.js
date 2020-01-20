function sierPoly(p = {"X": 256, "Y": 256}, R = 255, al = 0, k = 2, N = 3, lim = 6) {
    if(R > lim) {
        let d = R / k;
        let th = 2 * Math.PI / N;
        for(let i = 0; i < N; i++) {
            sierPoly(polar(p, R - d, i * th + al), d, al, k, N, lim);
        }
    } else {
        regPoly(p, R, N, al);
    }
}