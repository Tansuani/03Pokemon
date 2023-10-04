


const Gallery = () => {

  const [picture, setPicture] = useState([])
    const gatherPicture = async () => {
      const url = <link rel="stylesheet" href=".../public/photos/" /> //está bien?
      const answer = await fetch (url)
      const data = await answer.json()
      const spread = data.docs.map((image) => {
        return {
          id: image._id,
          url: image._url,
        }
      })
    .sort((a, b) => a.id.localeCompare(b.id));
    setPicture(spread)
    }
    


  return <div className="gallery grid-columns-5 p-3"></div>;
};
export default Gallery;
