
export const arrayHasDupes = (array: any[]): boolean => {
    const n = array.length;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (array[i] === array[j]){
                return true;
            }
        }
    }

    return false;
};

export const debounce = (func: (...args: any[]) => any, wait: number, immediate: boolean) => {

    let timeout: number | null;

    return function() {
        const args = arguments;
        const later = () => {
            timeout = null;

            if (!immediate){
                func.apply(this, args);
            }
        };

        const callNow = immediate && !timeout;

        timeout && clearTimeout(timeout);
        timeout = setTimeout(later, wait);

        if (callNow) {
            func.apply(this, args);
        }
    };
};
