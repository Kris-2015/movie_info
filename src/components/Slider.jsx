import React, { Fragment, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import MediaCard from './MediaCard';
import MediaDetails from './MediaDetails';
import Carousal from 'react-material-ui-carousel';


const Slider = () => {
    let items = [
        {
            name: 'Extraction',
            year: '2020',
            image: 'extraction.jpg',
            image_path: '/images/extraction.jpg',
        },
        {
            name: 'Avengers: Infinity War',
            year: '2018',
            image: 'avenger-infinity-logo.jpg',
            image_path: '/images/aveng-infinwar-logo.jpg',
        },
        {
            name: 'Avengers: Endgame',
            year: '2019',
            image: 'avenger-endgame.jpg',
            image_path: '/images/avenger-endgame.jpg',
        }
    ];

    const [movie, setMovieName] = useState('');
    const [movieDetails, setMovieDetail] = useState('');

    const handleOnClick = (movieName, year) => {
        setMovieName(movieName);
        const api = `http://www.omdbapi.com/?t=${movieName}&apikey=a7cbad6e&type=movie&y=${year}`;
        const getMovieDetails = axios.get(api);
        getMovieDetails
            .then(res => {
                const movieData = res.data;
                setMovieDetail(movieData);
            })
            .catch(err => console.log('err', err));
    };

    return (
        <Fragment>
            <div>
                <Navbar />
                <div style={{ marginTop: '50px' }}>
                    <Carousal
                        autoPlay={false}
                        animation="slide"
                        navButtonsAlwaysInvisible={true}
                    >
                        {
                            items.map(d => {
                                return (
                                    <MediaCard
                                        movieObj={d}
                                        handleOnClick={handleOnClick}
                                    />
                                );
                            })
                        }
                    </Carousal>
                </div>
                {movieDetails !== ''
                    ? (
                        <MediaDetails details={movieDetails} />
                    )
                    :''
                }
            </div>
        </Fragment>
    )
};

export default Slider;
