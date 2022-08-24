import { Link } from "react-router-dom";
import { useState } from "react";
import "./Collection.css";
import Preview from "../preview/Preview";

const images = [
    {
        key: "123",
        image: "https://ichef.bbci.co.uk/news/976/cpsprodpb/17638/production/_124800859_gettyimages-817514614.jpg",
    },
    {
        key: "124",
        image: "https://ichef.bbci.co.uk/news/976/cpsprodpb/17638/production/_124800859_gettyimages-817514614.jpg",
    },
    {
        key: "125",
        image: "https://ichef.bbci.co.uk/news/976/cpsprodpb/17638/production/_124800859_gettyimages-817514614.jpg",
    },
    {
        key: "126",
        image: "https://ichef.bbci.co.uk/news/976/cpsprodpb/17638/production/_124800859_gettyimages-817514614.jpg",
    },
];

function Collection({ ref_id, image, code }) {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

    return (
        <Link to={ref_id}>
            <div
                className="collection"
                onMouseLeave={handleMouseOut}
                onMouseOver={handleMouseOver}
            >
                <div
                    className={`collection-image ${
                        isHovering ? "collection-image-hover" : ""
                    }`}
                >
                    <img src={image} alt={code} />
                </div>
                {isHovering && <Preview images={images} />}
            </div>
        </Link>
    );
}

export default Collection;
