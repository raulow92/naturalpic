import Home from "../views/Home";
import Favorites from "../views/Favorites";
import Gallery from "../views/Gallery";
import NotFound from "../views/NotFound";
import { Routes, Route } from "react-router-dom";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default AppRouter