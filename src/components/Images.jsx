import "../assets/css/images.css";
import Heart from "./Heart";
import { useContext } from "react";
import { MyContext } from "../context/MyContext";

const Images = () => {
    const { images, setImages } = useContext(MyContext);

    const handleClick = (id) => {
        const imageIndex = images.findIndex((image) => image.id === id);
        images[imageIndex].favorite = !images[imageIndex].favorite;
        setImages([...images]);
    };

    return (
        <div className="images-container">
            <div className="images">
                {images.map((image) => (
                    <div
                        className="card"
                        key={image.id}
                        onClick={() => handleClick(image.id)}
                    >
                        <img src={image.src} alt={image.alt} />
                        <div className="heart-container">
                            <Heart filled={image.favorite} />
                        </div>
                        <div className="text">
                            <p>{image.alt}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Images;
