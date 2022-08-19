import "./Preview.css";
function Preview(props) {
    return (
        <div className="preview-container">
            {props.images.map((image) => (
                <img src={image.image} alt={image.key} />
            ))}
        </div>
    );
}

export default Preview;
