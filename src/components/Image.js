import React from 'react';

let Image;

export default Image = (props) => {
    return (
        <div className="gallery-image">
            <img src={props.url} alt={props.description} />
            <p>{props.description}</p>
        </div>
    );
};
