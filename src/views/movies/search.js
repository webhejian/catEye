import React from "react";
class Search extends React.Component{
    componentDidMount(){
        console.log(this.props,22222)
    }
    render(){
        
        return (
            <div>
                <input type="button" value="返回" onClick={this.goback.bind(this)} />
               Search
            </div>
        )
    }
    goback(){
        console.log(1)
        this.props.history.go(-1)
    }
}
export default Search;
