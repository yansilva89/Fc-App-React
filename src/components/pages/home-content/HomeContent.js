import React, { Component } from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import SlideItem from './SlideItem';

class HomeContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                { name: 'Obra 1', image: 'img/works/1.jpg', xy: 'Dimensões 1x0.50' },
                { name: 'Obra 2', image: 'img/works/2.jpg', xy: 'Dimensões 1x0.50' },
                { name: 'Obra 3', image: 'img/works/3.jpg', xy: 'Dimensões 1x0.50' },
                { name: 'Obra 4', image: 'img/works/4.jpg', xy: 'Dimensões 1x0.50' },
                { name: 'Obra 5', image: 'img/works/5.jpg', xy: 'Dimensões 1x0.50' },
                { name: 'Obra 6', image: 'img/works/6.jpg', xy: 'Dimensões 1x0.50' }
            ]
        };
    }

    render() {
        const settings = {
            dots: false,
            autoplay: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div className="home pt-md-4">
                <div className="container">
                    <div className="row mx-1 mx-md-0">
                        <div className="home-gallery w-100">
                            <Slider {...settings}>
                                {this.state.images.map((items, index) => 
                                    <SlideItem images={items} key={index} />
                                )}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

HomeContent.propTypes = {
  images: PropTypes.object
};

export default HomeContent;