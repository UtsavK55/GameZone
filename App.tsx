import {useEffect} from 'react';
import {LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {QueryClientProvider} from 'react-query';

import ErrorBoundary from '@components/errorBoundary';
import {CustomToast} from '@components/showToast/ShowToast';
import queryClient from '@network/queryClient';
import Navigator from '@navigation/Navigator';
import store from '@store';

function App(): React.JSX.Element {
  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ErrorBoundary>
          <NavigationContainer>
            <Navigator />
            <CustomToast />
          </NavigationContainer>
        </ErrorBoundary>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
