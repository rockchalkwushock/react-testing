import React from 'react';
import TestUtils from 'react-addons-test-utils';
import {should} from 'chai';
should();
/* NOTE: With v4.0.0 of Chai this format will change to:
    import `chai/should`;
*/

import Gallery from '../components/Gallery';

describe('Image component', () => {
    it('Renders the image and description', () => {
        let url = "http://www.example.com/image.png";
        let description = "Example description";

        let renderer = TestUtils.createRenderer();
        renderer.render(<Gallery />);
        let result = renderer.getRenderOutput();
        result.props.className.should.equal('gallery');

        let images = result.props.children[0];

    });
});


/*
1) correct className
2) correct number of images are rendered
3) each image has the correct props set.
*/
