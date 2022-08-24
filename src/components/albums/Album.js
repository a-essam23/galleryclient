import { useState } from "react";
import "./Album.css";
import { Image } from "antd";

const images = [
    {
        key: "1234",
        image: "https://ichef.bbci.co.uk/news/976/cpsprodpb/17638/production/_124800859_gettyimages-817514614.jpg",
    },
    {
        key: "1244",
        image: "https://ichef.bbci.co.uk/news/976/cpsprodpb/17638/production/_124800859_gettyimages-817514614.jpg",
    },
    {
        key: "1254",
        image: "https://ichef.bbci.co.uk/news/976/cpsprodpb/17638/production/_124800859_gettyimages-817514614.jpg",
    },
    {
        key: "1264",
        image: "https://ichef.bbci.co.uk/news/976/cpsprodpb/17638/production/_124800859_gettyimages-817514614.jpg",
    },
];

function Album({ ref_id, image, code }) {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

    return (
        <div
            className="album"
            onClick={() => setIsVisible(true)}
            onMouseLeave={handleMouseOut}
            onMouseOver={handleMouseOver}
        >
            <div className={"album-image"}>
                <img src={image} alt={code} />
            </div>
            {isHovering && (
                <div className="album-preview">
                    <h3>{"#" + code}</h3>
                </div>
            )}
        </div>
    );
}

export default Album;
