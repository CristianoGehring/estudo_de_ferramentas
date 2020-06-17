import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Inicial from './pages/Inicial';
import HelloWorld from './pages/HelloWorld';
import UploadImagem from './pages/UploadImagem';

const Routes = createAppContainer(
  createSwitchNavigator({
    Inicial,
    UploadImagem,
    HelloWorld
  })
);

export default Routes;