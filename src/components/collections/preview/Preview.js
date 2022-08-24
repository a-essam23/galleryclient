import "./Preview.css";
function Preview(props) {
    return (
        <div className="preview-container">
            {props.images.map((image) => (
                <div className="preview-image">
                    <img src={image.image} alt={image.key} />
                </div>
            ))}
        </div>
    );
}

export default Preview;
