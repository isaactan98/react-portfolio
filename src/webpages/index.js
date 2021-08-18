import React from 'react';
import logo from '../assets/IZ-LOGO.png';

const Home = () => {
    return (
        <div className="">
            <section className="home-header section-container">
                <h1 className="home-header__title heading--prime">Isaac</h1>
                <div className="home-header__content">
                    <div>
                        <div className="home-header__email">
                        <a href="mailto:iztan98@gmail.com">
                            <span className="">iztan98@gmail.com</span>
                            </a>
                        </div>
                        <div className="home-header__position">
                            <span>/Photographer</span>
                        </div>
                        <div className="home-header__position">
                            <span>/Web Developer</span>
                        </div>
                    </div>
                    <div className>
                        <img className="App-logo" src={logo} alt="Logo" />
                        </div>
                </div>
            </section>
            <section>
                <div>
                    
                </div>
            </section>
        </div>
    );
};
export default Home;