import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  Container,
  Logo,
  Welcome,
  Description,
  NextWrapper,
  Next,
} from './style';

const Main: () => React$Node = ({navigation}) => {
  function openLogin() {
    navigation.navigate('Login');
  }
  return (
    <Container>
      <Logo source={require('~/assets/images/logo.png')} resizeMode="contain" />
      <Welcome>Bem-vindo,</Welcome>
      <Description>
        O seu novo jeito de se conectar {'\n'}com a beleza
      </Description>
      <NextWrapper>
        <TouchableOpacity onPress={openLogin}>
          <Next>próximo</Next>
        </TouchableOpacity>
      </NextWrapper>
    </Container>
  );
};

export default Main;
