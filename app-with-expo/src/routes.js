import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Inicial from './pages/Inicial';
import HelloWorld from './pages/HelloWorld';
import UploadImagem from './pages/UploadImagem';
import Calendar from './pages/Calendar';

const Routes = createAppContainer(
  createSwitchNavigator({
    Inicial,
    UploadImagem,
    Calendar,
    HelloWorld
  })
);

export default Routes;