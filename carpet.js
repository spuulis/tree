function carpet(x = 256, y = 256, size = 512, limit = 9) {
    let s = size / 3;
    if(size > limit) {
        carpet(x + s, y + s, s, limit);
        carpet(x + s, y, s, limit);
        carpet(x + s, y - s, s, limit);
        carpet(x, y + s, s, limit);
        carpet(x, y - s, s, limit);
        carpet(x - s, y + s, s, limit);
        carpet(x - s, y, s, limit);
        carpet(x - s, y - s, s, limit);
    } else {
        ctx.fillRect(x + s, y + s, s, s);
        ctx.fillRect(x + s, y, s, s);
        ctx.fillRect(x + s, y - s, s, s);
        ctx.fillRect(x, y + s, s, s);
        ctx.fillRect(x, y - s, s, s);
        ctx.fillRect(x - s, y + s, s, s);
        ctx.fillRect(x - s, y, s, s);
        ctx.fillRect(x - s, y - s, s, s);
    }
}