/* TODO what is declare global*/
/* TODO comments */
/* TODO make TDD foreach function */
declare global {
    interface Array<T> {
        chunk():  Array<T> | Array<Array<T>>
        compact(): Array<T>;
    }
}

/** Alias for .filter(e => e) */
Array.prototype.compact = function <T>(): Array<T> {
    return this.filter(element => element);
};
/*Array.prototype.compact = function <T>(): Array<T> {
    return this.filter(element => element !== null && element !== '' && element !== false && element !== 0);
};*/

export {};