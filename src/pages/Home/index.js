import React from 'react';
import {Container, Logo, Description} from './style';

const Home = () => (
  <Container>
    <Logo source={require('~/assets/images/logo.png')} resizeMode="contain" />
    <Description>Login realizado com sucesso</Description>
  </Container>
);

export default Home;
