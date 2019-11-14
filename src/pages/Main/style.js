import styled from 'styled-components/native';
import {theme} from '~/theme/globalStyle';
import {Dimensions} from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.color.white};
  justify-content: center;
`;

export const Logo = styled.Image`
  width: ${Dimensions.get('window').height * 0.14 * (1950 / 662)};
  height: ${Dimensions.get('window').height * 0.14};
  align-self: center;
`;

export const Welcome = styled.Text`
  font-size: ${theme.fontSize.big};
  font-family: ${theme.fontFamily.bold};
  color: ${theme.color.primary};
  text-align: center;
  line-height: 21px;
  align-self: center;
  margin-top: 25px;
  margin-bottom: 5px;
`;

export const Description = styled.Text`
  font-size: ${theme.fontSize.regular};
  font-family: ${theme.fontFamily.bold};
  color: ${theme.color.primary};
  text-align: center;
  line-height: 21px;
  align-self: center;
`;

export const NextWrapper = styled.View`
  position: absolute;
  bottom: 0;
  height: 65px;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-width: 1.5px;
  border-top-color: ${theme.color.gray};
  border-bottom-color: transparent;
`;

export const Next = styled.Text`
  font-size: ${theme.fontSize.regular};
  font-family: ${theme.fontFamily.bold};
  color: ${theme.color.primary};
  text-align: center;
  line-height: 21px;
  align-items: center;
  text-transform: uppercase;
`;
