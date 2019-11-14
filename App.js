import React from 'react';
import {StatusBar} from 'react-native';
import '~/config/ReactotronConfig';
import Routes from '~/routes';
import {theme} from '~/theme/globalStyle';

const App = () => (
  <>
    <StatusBar barStyle="dark-content" backgroundColor={theme.color.white} />
    <Routes />
  </>
);

export default App;
