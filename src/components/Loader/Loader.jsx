import React from 'react';
import {Row} from 'react-bootstrap';

const Loader = () => {
    return (
        <Row className='justify-content-center mt-5'>
            <div className="spinner-border text-primary" role="status">
                <span className="sr-only"></span>
            </div>
        </Row>
    );
};

export default Loader;
