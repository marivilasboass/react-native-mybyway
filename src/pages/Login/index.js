import React, {useState} from 'react';
import {Alert, ActivityIndicator} from 'react-native';
import {
  Container,
  Logo,
  Form,
  Input,
  ForgotPassword,
  PasswordButton,
  SubmitButton,
  Submit,
  Wrapper,
  Line,
  Text,
  SubmitFacebook,
  Facebook,
  FacebookIcon,
} from './style';
import Axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const Login: () => React$Node = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [load, setLoad] = useState(false);

  function handlerLogin() {
    if (email === '') {
      Alert.alert('Atenção', 'Por favor preencha o campo email');
    } else if (password === '') {
      Alert.alert('Atenção', 'Por favor preencha o campo password');
    } else {
      setLoad(true);
      let payload = {
        email: email,
        password: password,
      };
      Axios.post('http://api-v2.mobilibike.net/v1/auth/login', payload)
        .then(function(response) {
          console.log(response);
          if (response.status === 200) {
            setLoad(false);
            let token = response.data.token;
            console.log(token);
            AsyncStorage.setItem('token', token);
            navigation.navigate('Home');
          } else if (response.status === 204) {
            setLoad(false);
            console.log('Username password do not match');
            Alert.alert('Atenção', 'Usuário ou senha incorreta');
          } else {
            setLoad(false);
            console.log('Username does not exists');
            Alert.alert('Atenção', 'Usuário não existe tente novamente');
          }
        })
        .catch(function(error) {
          setLoad(false);
          console.log(error);
          Alert.alert(
            'Atenção',
            'Erro ao realizar login tente novamente mais tarde!',
          );
        });
    }
  }

  return (
    <Container>
      <Form>
        <Logo
          source={require('~/assets/images/logo-white.png')}
          resizeMode="contain"
        />
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="E-mail"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          secureTextEntry={true}
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <ActivityIndicator size="large" color={'#007AFF'} animating={load} />
        <PasswordButton>
          <ForgotPassword>Esqueceu sua senha?</ForgotPassword>
        </PasswordButton>
        <SubmitButton onPress={handlerLogin}>
          <Submit>entrar</Submit>
        </SubmitButton>
        <Wrapper>
          <Line />
          <Text>ou</Text>
          <Line />
        </Wrapper>
        <SubmitFacebook>
          <FacebookIcon source={require('~/assets/images/facebook.png')} />
          <Facebook>Fazer login com Facebook</Facebook>
        </SubmitFacebook>
      </Form>
    </Container>
  );
};

export default Login;
