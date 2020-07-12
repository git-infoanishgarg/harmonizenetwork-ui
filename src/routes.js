import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './hoc/layout';
import Auth from "./hoc/auth";
import Home from "./components/Home/";
import Login from "./components/pages/Home/login";
import Register from "./components/pages/Home/register";
import ForgotPassword from "./components/pages/Home/ForgotPassword";




class Routes extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            primaryColor: "#3b3b40",
            secondryColor: "#0095d9",
            headingColor: "#662d91"
        }
    }

    componentDidMount(){
        // this.setState({
        //     primaryColor: "#ffffff"
        // })
    }

    render() {
     
        return (
            <div>
            <Layout theameColors={this.state}>
            <Switch>
                <Route path ="/" exact component={() => <Home theameColors={this.state}/>} />
                <Route path ="/login" exact component={Login}/>         
                <Route path ="/register" exact component={Register}/>    
                <Route path ="/ForgotPassword" exact component={ForgotPassword}/>
            </Switch>
        </Layout>        
            </div>
        );
    }
}

export default Routes;
