import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
// import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);
    
    // console.log(images)
    // console.log(isLoading)

    // const [images, setImages] = useState([]);

    // const getImages = async () => {
    //     const newImages = await getGifs(category);
    //     setImages(newImages)
    // }

    // useEffect(() => {
    //     getImages()
    // }, [ ])

    //[ ] => solo se ejecuta la primera vez que se renderiza


    return (
        <>
        <h3>{ category }</h3>
        {
            isLoading && <h2>CVargando...</h2>
        }

        <div className="card-grid">
            {
            images.map((image) => (
                <GifItem key={ image.id } { ...image } />
            )
            )}
        </div>
        </>
    )
}