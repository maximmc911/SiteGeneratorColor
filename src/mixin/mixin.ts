export const RandomGenerator = () : string =>{
        const hex : string = `123456798ABCDEF`;
    let color : string = `#`
    for (let index = 0; index < 6; index++) {
        color += hex[Math.floor(Math.random()*hex.length)]
    }
    return color
}


