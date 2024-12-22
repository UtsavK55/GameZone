import {SafeAreaView} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import CustomStatusBar from '@components/customStatusBar';
import {layout} from '@theme';
import DrawerNavigator from './DrawerNavigator';

const Navigator = () => {
  return (
    <SafeAreaProvider>
      <CustomStatusBar />
      <SafeAreaView style={layout.flex_1}>
        <DrawerNavigator />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Navigator;
