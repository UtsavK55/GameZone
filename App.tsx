import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import Toast from 'react-native-toast-message';

import ErrorBoundary from '@components/errorBoundary';
import Navigator from '@navigation/Navigator';
import store from '@store';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <NavigationContainer>
          <Navigator />
          <Toast />
        </NavigationContainer>
      </ErrorBoundary>
    </Provider>
  );
}

export default App;
