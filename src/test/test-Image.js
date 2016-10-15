import React from 'react';
import TestUtils from 'react-addons-test-utils';
import {should} from 'chai';
should();
/* NOTE: With v4.0.0 of Chai this format will change to:
    import `chai/should`;
*/
import Image from '../components/Image';


describe('Image component', () => {
    it('Renders the image and description', () => {
        let url = "http://www.example.com/image.png";
        let description = "Example description";

        let renderer = TestUtils.createRenderer();
        renderer.render(<Image url={url} description={description} />);
        let result = renderer.getRenderOutput();
        result.props.className.should.equal('gallery-image');

        let img = result.props.children[0];
        img.type.should.equal('img');
        img.props.src.should.equal(url);
        img.props.alt.should.equal(description);

        let p = result.props.children[1];
        p.type.should.equal('p');
        p.props.children.should.equal(description);
    });
});
