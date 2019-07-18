import React from "react";
import {
    withRouter
} from "react-router-dom"
import Footer from '../views/footer'
class GuardRouter extends React.Component {
    componentWillMount() {
    
        console.log(this.props,123)
        // if(this.props.ifFooter){
        //     if(!localStorage.userName)
        //         this.props.history.push("/my")
        // }
    }
    render() {
            return (
                
                    <div>
                    {
                        this.props.ifFooter?<Footer></Footer>:null
                    }
                     <this.props.component {...this.props}></this.props.component>
                    </div>
                   )
        }

    
}
export default withRouter(GuardRouter);