const drive = (kilometers?: number) => {
    if (kilometers) {
        console.log(`Drive the car for ${kilometers} kilometers`)
    } else {
        console.log(`Drive the car`)
    }
}

drive()
drive(3)