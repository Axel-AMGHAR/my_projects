interface Backpack<Type> {
    add: (obj: Type) => void;
    get: () => Type;
}
const cl = (e: any) => console.log(e);

/* TODO see const declaration must be initialized */
/*const backpack: Backpack<string>;*/
declare const backpack: Backpack<string>;

/* TODO backpack is not defined*/
// object is a string
const object = backpack.get();
console.log(backpack.get())
// So you can't do that you have to add a string
backpack.add('aa');
console.log(object)
console.log(backpack.get())