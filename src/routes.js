import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Main from './pages/main';
import Product from './pages/product';

const AppNavigator = createStackNavigator({
  Main: {
    screen: Main,
    navigationOptions: {
      headerTitleStyle: {
        textAlign: 'center',
        flex: 1,
        fontWeight: 'bold',
      },
      headerStyle: {
        backgroundColor: '#DA552F',
      },
      headerTintColor: '#FFF',
    },
  },
  Product,
});

export default createAppContainer(AppNavigator);
