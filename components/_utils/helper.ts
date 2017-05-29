
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
