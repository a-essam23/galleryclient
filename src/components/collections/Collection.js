import { Link } from "react-router-dom";
import { useState } from "react";
import "./Collection.css";
import Preview from "../ui/Preview";

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

function Collection(props) {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };
    const handleHover = (isHover) => {
        if (isHover) {
            return (
                <div className="collection-preview">
                    <Preview images={images} />
                </div>
            );
        }
    };

    return (
        <Link className="collection-wraper" to={props.ref_id}>
            <li className="collection">
                <div
                    className="collection-image"
                    onMouseOver={handleMouseOver}
                    onMouseLeave={handleMouseOut}
                >
                    <img src={props.image} alt={props.code} />
                    {handleHover(isHovering)}
                </div>
            </li>
        </Link>
    );
}

export default Collection;
