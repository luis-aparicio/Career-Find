
import React from 'react';
import Figure from 'react-bootstrap/Figure'

function page() {

    return (
    <Figure>
        <Figure.Image
            width={171}
            height={180}
            alt="171x180"
            src="holder.js/171x180"
        />
        <Figure.Caption>
            Career information
        </Figure.Caption>
    </Figure>
    );
}

export default page;