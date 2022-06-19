import { Link } from "react-router-dom";
function SideBar() {
    return (
        <>
            <div className="sidebar">
                <div className="avt-box">
                    <img className="avt" src="https://profile.trug.cf/img/avt.jpg" alt="Avatar"/>
                </div>
                <Link to="./" style={{ fontWeight: "bold" }}>
                    Hi! Im Việt Trung
                </Link>
                <Link to="./about">About</Link>
                <Link to="./contact">Contact</Link>
            </div>
        </>
    );
}

export default SideBar;