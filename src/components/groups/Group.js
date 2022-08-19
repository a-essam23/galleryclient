import { Link } from "react-router-dom";
import Card from "../ui/Card";
import "./Group.css";
function Group(props) {
    return (
        <Link to={"/" + props.title} className="group-wraper">
            <li className="group">
                <Card>
                    <div className="group-name">
                        <h3>{props.title}</h3>
                    </div>
                    <div className="group-image">
                        <img src={props.image} alt={props.title} />
                    </div>
                </Card>
            </li>
        </Link>
    );
}

export default Group;
