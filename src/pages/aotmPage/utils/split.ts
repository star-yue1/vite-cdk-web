
export function splitArray<T = any>(target: Array<T>) {
    const count = 3;
    const res: Array<Array<T>> = []
    for (let i = 0; i < target.length;) {
        const limit = i+ count
        res.push(target.slice(i, limit))
        i = limit;
    }
    return res;    
}