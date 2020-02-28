import React from 'react';
import Loginpage from './Loginpage'
import Navigation from './Navigation'

const Home = () => {
    return (
        <div>
            <Navigation />
            <div className="container">
                <Loginpage />
            </div>

        </div>

    )
}


export default Home;