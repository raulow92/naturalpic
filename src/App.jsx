import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";
import { useEffect, useState } from "react";
import { MyContext } from "./context/MyContext";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
    const [images, setImages] = useState([]);

    const getPhotos = async () => {
        const res = await fetch("./src/data/data.json");
        let { photos } = await res.json();

        photos = photos.map((photo) => ({
            id: photo.id,
            src: photo.src.tiny,
            alt: photo.alt,
            favorite: photo.liked
        }));

        setImages(photos);
    };

    useEffect(() => {
        getPhotos();
    }, []);

    return (
        <div className="App">
            <MyContext.Provider value={{images, setImages}}>
                <Router>
                    <Navbar />
                    <AppRouter />
                    <Footer />
                </Router>
            </MyContext.Provider>
        </div>
    );
};

export default App;
