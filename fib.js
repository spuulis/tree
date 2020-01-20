function fibonacci(N) {
    if(N === 0) {
        return 0;
    } else if(N === 1) {
        return 1;
    } else if(N === 2) {
        return 1;
    } else {
        return fibonacci(N - 1) + fibonacci(N - 2);
    }
}