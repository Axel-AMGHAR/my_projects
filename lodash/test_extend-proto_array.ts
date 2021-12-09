const cl = (e: any) => console.log(e);

class MyArray<T> extends Array<T> {
    private constructor(items?: Array<T>) {
        super(...items)
    }
    static create<T>(): MyArray<T> {
        return Object.create(MyArray.prototype);
    }

    // TODO This condition will always return 'true' since the types 'T' and 'string' have no overlap. ???
    public compact (): Array<any> {
        return this.filter(element => element !== null && element !== '' && element !== false && element !== 0);
    }
}

// Works
const myArray = MyArray.create<any>();
cl(myArray)
myArray.push('aa', '', 0, 1);

cl(myArray)
cl(myArray.compact())
cl(myArray)
