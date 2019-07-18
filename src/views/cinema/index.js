import React from "react";
import {
    Route,
    NavLink,
    withRouter
} from "react-router-dom";
class Cinema extends React.Component{
    render(){
        return (
            <div>
                <h4>影院</h4>
                {
                    this.props.child.map((v, i) => {
                        return (
                         
                            <NavLink key={i} to={v.path} exact={v.exact} activeStyle={{ color: "red" }}>{v.nameStr}</NavLink>
                       
                        )
                    })
                }
            </div>
        )
    }
}
export default withRouter(Cinema);;
