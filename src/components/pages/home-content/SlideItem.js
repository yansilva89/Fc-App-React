import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SlideItem extends Component {
    render() {
        const item = this.props.images
        return (
            <div className="text-center home-item w-100">
                <a href="">
                    <img src={item.image} className="img-fluid" alt="" />
                    <p className="mb-0 pl-2 pt-2">{item.name}</p>
                    <p className="mb-0 pl-2">{item.xy}</p>
                </a>
            </div>    
        )
    }
}

SlideItem.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    xy: PropTypes.string,
};

export default SlideItem;