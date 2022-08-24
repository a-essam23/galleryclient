import "./CollectionList.css";
import Collection from "../collection/Collection";

function GroupList(props) {
    return (
        <div className="collection-list">
            {props.collections.map((collection) => (
                <div className="collection-wrapper">
                    <Collection
                        image={collection.image}
                        code={collection.code}
                        ref_id={collection.key}
                        key={collection.key}
                    />
                </div>
            ))}
        </div>
    );
}

export default GroupList;
