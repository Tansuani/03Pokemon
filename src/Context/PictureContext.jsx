
import {createContext, useState} from 'react';
import axios from 'axios';

export const PictureContext = createContext()

const URL = "./photos.json"
const PictureProvider = ({children}) => {
    const [picture, setPicture] = useState([]);
    const gatherPicture = async () => {
        try{
            const response =await axios.get(URL);
            if(!response.status) {
                throw new Error("Error. Sin datos");
            }
            const {picture: spread} = response.data;
            setPicture(spread.map((image)=>({...image, ifFavorite: false
            })));
    } catch (error) {
    }
};

useEffect(() => {
    gatherPicture();
}, []);

return(
    <PictureContext.Provider
    value={{picture, setPicture,}}>
        {children}
    </PictureContext.Provider>
);
}
export default PictureProvider;