import React, { Fragment } from 'react';
// import { Paper } from '@material-ui/core';
import Navbar from './Navbar';
import Carousal from 'react-material-ui-carousel';

const api = "http://www.omdbapi.com/?s=Thor&apikey=a7cbad6e&type=movie";

const Slider = () => {
    let items = [
        {
            image: 'extraction.jpg',
            image_path: '/images/extraction.jpg',
        },
        {
            image: 'avenger-infinity-logo.jpg',
            image_path: '/images/aveng-infinwar-logo.jpg',
        },
        {
            image: 'avenger-endgame.jpg',
            image_path: '/images/avenger-endgame.jpg',
        }
    ]
    return (
        <Fragment>
            <div>
                <Navbar />
                <div style={{ marginTop: '50px' }}>
                    <Carousal
                        autoPlay={true}
                        animation="slide"
                        navButtonsAlwaysInvisible={true}
                    >
                        {
                            items.map(d => (
                                <img
                                    style={{ marginLeft: '200px'}}
                                    height={300}
                                    width={1000}
                                    src={process.env.PUBLIC_URL + d.image_path}
                                    alt={d.image}
                                />
                            ))
                        }
                    </Carousal>
                </div>
            </div>
        </Fragment>
    )
};

export default Slider;
