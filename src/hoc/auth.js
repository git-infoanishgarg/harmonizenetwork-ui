import React from 'react';


const Auth = ComposedComponent => class extends React.Component {
    render() {
       return <ComposedComponent test="okok" />;
    }
 };

 export default Auth;