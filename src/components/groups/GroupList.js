import "./GroupList.css";
import Group from "./Group";

function GroupList(props) {
    return (
        <ul className="list">
            {props.groups.map((group) => (
                <Group
                    title={group.title}
                    image={group.image}
                    key={group.key}
                />
            ))}
        </ul>
    );
}

export default GroupList;
