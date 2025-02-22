import axios from 'axios'
export const MakeApiColor = (hex: string) : string =>{
    return `https://www.thecolorapi.com/id?hex=${hex.slice(1, hex.length)}`
}



export const GetColor = async (color : string , callback: (status: number , data: object) => void) : Promise<void> => {
    try {
        const {data , status} = await axios.get(MakeApiColor(color));

callback(status, data)
    } catch (error) {
        console.error(error);
        
    }
}