import styled from 'styled-components/native';
import {RectButton, TouchableOpacity} from 'react-native-gesture-handler';
import {Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {theme} from '~/theme/globalStyle';

export const Container = styled(LinearGradient).attrs({
  colors:[theme.color.darkish_pink, theme.color.salmon, theme.color.pale_orange,]
})`
  flex: 1;
  padding: ${theme.defaultPadding};
  justify-content: center;
`;

export const Form = styled.View`
  padding-bottom: 20px;
`;

export const Logo = styled.Image`
  align-self: center;
  width: ${Dimensions.get('window').height * 0.19 * (1950 / 662)};
  height: ${Dimensions.get('window').height * 0.19};
  margin-bottom: 15px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: theme.color.white,
  underlineColorAndroid: 'transparent',
})`
  height: 40px;
  border-radius: 4px;
  padding: 0 15px;
  border: 1px solid #fff;
  font-size: ${theme.fontSize.regular};
  font-family: ${theme.fontFamily.regular};
  color: ${theme.color.white};
  margin-bottom: 15px;
`;

export const SubmitButton = styled(RectButton)`
  height: 50px;
  align-items: center;
  justify-content: center;
  background-color: ${theme.color.primary};
  border-radius: 25px;
  padding: 0 12px;
  margin-top: 20px;
  margin-bottom: 10px;
  opacity: ${props => (props.loading ? 0.7 : 1)};
`;

export const Submit = styled.Text`
  font-size: ${theme.fontSize.regular};
  font-family: ${theme.fontFamily.bold};
  color: ${theme.color.white};
  text-align: center;
  line-height: 21px;
  text-transform: uppercase;
`;

export const PasswordButton = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const ForgotPassword = styled.Text`
  font-size: ${theme.fontSize.regular};
  font-family: ${theme.fontFamily.bold};
  color: ${theme.color.white};
  text-align: center;
  line-height: 21px;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;

export const Line = styled.View`
  width: 35%;
  height: 1px;
  background-color: ${theme.color.white};
  margin-top: 10px;
`;

export const Text = styled.Text`
  font-size: ${theme.fontSize.regular};
  font-family: ${theme.fontFamily.bold};
  color: ${theme.color.white};
  text-align: center;
  text-transform: uppercase;
`;

export const SubmitFacebook = styled(RectButton)`
  flex-direction: row;
  height: 50px;
  align-items: center;
  justify-content: center;
  background-color: ${theme.color.white};
  border-radius: 4px;
  padding: 0 12px;
  margin-top: 20px;
`;

export const Facebook = styled.Text`
  font-size: ${theme.fontSize.regular};
  font-family: ${theme.fontFamily.bold};
  color: ${theme.color.facebook};
  text-align: center;
  margin-left: 10px;
`;

export const FacebookIcon = styled.Image`
  width: 30px;
  height: 30px;
`;
