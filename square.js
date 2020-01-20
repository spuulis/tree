function square(cX = 256, cY = 256, size = 256, limit = 1) {
    ctx.fillRect(cX - size / 2, cY - size / 2, size, size);
    if(size > limit) {
        let d = size / 2 + size / 6;
        let s = size / 3;
        square(cX + d, cY, s, limit);
        square(cX - d, cY, s, limit);
        square(cX, cY + d, s, limit);
        square(cX, cY - d, s, limit);
    }
}