export function setTransformAnimation(element: any, position: any, durationMs = 0) {
    const prefixes = ['Webkit', 'Moz', 'ms', 'O', ''];

    for (const value of prefixes) {
        element.style[value + 'Transition'] = `transform ${durationMs}ms ease-out`;
        element.style[value + 'Transform'] = position ? `translate3d(${position}px, 0, 0)` : null;
    }
}

export function throttle(func: any, ms = 0) {
    let savedArgs: any;
    let savedThis: any;
    let isThrottled = false;

    function wrapper() {
        if (isThrottled) {
            savedArgs = arguments;
            savedThis = this;
            return;
        }

        func.apply(this, arguments);
        isThrottled = true;

        setTimeout(() => {
            isThrottled = false;

            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedArgs = savedThis = null;
            }
        }, ms);
    }
    return wrapper;
}