import "./header.css";
import { Row } from "antd";
import logo from "./../../assets/logo.png";
function Header()
{
    return (
        <>
        <Row className="header">
            <div>
                <img className="hlogo" src={logo} />
            </div>
            <Row>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </Row>
        </Row>
        </>
    )
}export default Header;