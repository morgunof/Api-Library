import React from 'react';
import {Link} from 'react-router-dom';

import {Container, Row} from 'react-bootstrap';

import SearchTermForm from '../SearchForm';

const Header = () => {
    return (
        <Container fluid className='header shadow-lg'>
            <Row>
                <Link to={'/'} className='text-decoration-none text-reset'>
                    <h1 className='text-center text-white fw-bold mt-3'>Api Library React</h1>
                </Link>
            </Row>
            <SearchTermForm/>
        </Container>
    );
};

export default Header;
