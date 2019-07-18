import React from "react";
import {
    NavLink
} from "react-router-dom";
class Footer extends React.Component {
    render() {
        return (
            <div >
                <NavLink to={"/movie"}  activeStyle={{ color: "red" }}>电影</NavLink>
                <NavLink to={"/cinema"} activeStyle={{ color: "red" }}>影院</NavLink>
                <NavLink to={"/my"} activeStyle={{ color: "red" }}>我的</NavLink>
            </div>
        )
    }
}
export default Footer;
