import React from "react";
class My extends React.Component{
    render(){
        return (
            <div>
             我的<input type="button" value="返回" onClick={this.goback.bind(this)} />
            </div>
        )
    }
    goback(){
        console.log(1)
        this.props.history.go(-1)
    }
}
export default My;
