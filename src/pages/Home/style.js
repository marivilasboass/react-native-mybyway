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

export const Description = styled.Text`
  font-size: ${theme.fontSize.regular};
  font-family: ${theme.fontFamily.bold};
  color: ${theme.color.primary};
  text-align: center;
  line-height: 21px;
  align-self: center;
`;
