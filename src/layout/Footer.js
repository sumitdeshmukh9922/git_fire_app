import React from 'react';
import { Container } from 'reactstrap';

const Footer = () => {
  return (
    <Container
      fluid
      tag='footer'
      className='text-center bg-info text-white text-uppercase fixed-bottom p-3'
    >
      git_info app with Firebase
    </Container>
  );
};

export default Footer;
