const extend = (objDest: object , objSource: object): void => {
    for(let i in objSource)
        objDest[i] = objSource[i];
};

export {extend};