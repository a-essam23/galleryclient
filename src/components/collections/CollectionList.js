import "./CollectionList.css";
import Collection from "./Collection";

function GroupList(props) {
    return (
        <ul className="collection-list">
            {props.collections.map((collection) => (
                <Collection
                    image={collection.image}
                    code={collection.code}
                    ref_id={collection.key}
                    key={collection.key}
                />
            ))}
        </ul>
    );
}

export default GroupList;
