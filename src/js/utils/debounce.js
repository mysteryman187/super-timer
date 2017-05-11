
// I implemented this because chrome was calling back after 2000ms to setTimeout(fn, 20)! Hours wasted...

export const debounce = (fn, time = 0) => {
    let timeout;
    return () => {
        console.log('called', count++);
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
            timeout = null;
            fn();
        }, time);
    };
}