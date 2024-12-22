import {createDrawerNavigator} from '@react-navigation/drawer';

import {ROUTES} from '@constants';
import Collections from '@screens/collections/Collections';
import Wishlist from '@screens/wishlist/Wishlist';
import MyGames from '@screens/myGames/MyGames';

import HomeStackScreen from './HomeStackScreen';

const Drawer = createDrawerNavigator<DrawerScreenParamList>();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      // drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen name={ROUTES.DRAWER.HOME} component={HomeStackScreen} />
      <Drawer.Screen name={ROUTES.DRAWER.COLLECTIONS} component={Collections} />
      <Drawer.Screen name={ROUTES.DRAWER.WISHLIST} component={Wishlist} />
      <Drawer.Screen name={ROUTES.DRAWER.MYGAMES} component={MyGames} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
