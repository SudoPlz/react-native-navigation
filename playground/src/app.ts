import Navigation from './services/Navigation';
import { registerScreens } from './screens';
import addProcessors from './commons/Processors';
import { setDefaultOptions } from './commons/options/Options';
import testIDs from './testIDs';
import Screens from './screens/Screens';

// @ts-ignore
alert = (title, message) =>
  Navigation.showOverlay({
    component: {
      name: Screens.Alert,
      passProps: {
        title,
        message,
      },
    },
  });

function start() {
  registerScreens();
  addProcessors();
  setDefaultOptions();
  Navigation.events().registerAppLaunchedListener(async () => {
    Navigation.dismissAllModals();
    setRoot();
  });
}

function setRoot() {
  Navigation.setRoot({
    root: {
      stack: {
        id: 'WELCOMEstack',
        children: [
          {
            component: {
              name: 'Layouts',
            },
          },
        ],
      },
    },
  });
}

export { start };
