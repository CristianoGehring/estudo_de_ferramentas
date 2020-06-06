import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Inicial from './pages/Inicial';
import HelloWorld from './pages/HelloWorld';

const Routes = createAppContainer(
  createSwitchNavigator({
    Inicial,
    HelloWorld
  })
);

export default Routes;