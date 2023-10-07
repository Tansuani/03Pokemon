
import {createContext, useState} from 'react';
import axios from 'axios';

export const PhotoGalery = createContext()

const URL = "./photos.json"
const PictureProvider = ({children}) => {
    const [picture, setPicture] = useState([])
    const gatherPicture = async () => {
        try{
            const response =await axios.get(URL)
            if(!response.status) {
                throw new Error("Error. Sin datos")
            }
            const {picture: spread} = response.data
            setPicture(spread.map((photo)=>({...photo, ifFavorite: false
            })))
    } catch (error) {
        console.log(error.message)
    }
}
useEffect(()=>{
    gatherPicture()
}, [])

return(
    <PhotoGalery.Provider
    value={{picture, setPicture,}}>
        {children}
    </PhotoGalery.Provider>
)
}