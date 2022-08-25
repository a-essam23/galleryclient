import "./GroupList.css";
import Group from "./Group";

function GroupList(props) {
    return (
        <div className="group-list">
            {props.groups.map((group) => (
                <div className="group-wraper">
                    <Group
                        title={group.title}
                        image={group.image}
                        key={group.key}
                    />
                </div>
            ))}
        </div>
    );
}

export default GroupList;
