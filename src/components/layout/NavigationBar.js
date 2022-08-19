import logo from "../../imgs/logo.png";
import { Link } from "react-router-dom";
import "./NavigationBar.css";

function NavigationBar(props) {
    return (
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>

            <Link to="/">
                <div className="site-title">
                    <h3>GALLERY</h3>
                </div>
            </Link>
        </div>
    );
}

export default NavigationBar;
