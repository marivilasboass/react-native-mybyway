import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Main from '~/pages/Main';
import Login from '~/pages/Login';
import Home from '~/pages/Home';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main: {screen: Main},
      Login: {screen: Login},
      Home: {screen: Home},
    },
    {
      defaultNavigationOptions: {
        header: null,
      },
    },
  ),
);

export default Routes;
