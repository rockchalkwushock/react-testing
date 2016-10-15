import React from 'react';

import Image from './Image';

let Gallery;

export default Gallery = (props) => {
    var images = props.images.map((image, index) => {
        return <Image url={image.url} description={image.description} key={index}/>;
    });

    return (
        <div className="gallery">{images}</div>
    );
};
