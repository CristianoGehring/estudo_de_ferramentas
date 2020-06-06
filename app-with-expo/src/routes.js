import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Inicial from './pages/Inicial';
import HelloWorld from './pages/HelloWorld';
import CameraAccess from './pages/CameraAccess';

const Routes = createAppContainer(
  createSwitchNavigator({
    Inicial,
    HelloWorld,
    CameraAccess
  })
);

export default Routes;