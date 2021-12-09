
Array.prototype.compact = function (): Array<any> {
    return this.filter(element => element !== null && element !== '' && element !== false && element !== 0);
};