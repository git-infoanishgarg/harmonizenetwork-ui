import React from 'react';
import Header from '../components/common/header/header';
import Footer from '../components/common/footer/footer';




const Layout = (props) => {
    return(
        <div>
            <Header {...props.theameColors}/>
            <div>{props.children}</div>
            <Footer/>
        </div>
    )
}

export default Layout;