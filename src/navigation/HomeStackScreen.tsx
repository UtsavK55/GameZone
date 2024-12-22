import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {ROUTES} from '@constants';
import Games from '@screens/games/Games';
import GameDetails from '@screens/gameDetails/GameDetails';

const HomeStackScreen = () => {
  const HomeStack = createNativeStackNavigator<HomeScreenParamList>();

  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen
        name={ROUTES.HOME_STACK_SCREEN.GAMES_SCREEN}
        component={Games}
      />
      <HomeStack.Screen
        name={ROUTES.HOME_STACK_SCREEN.GAME_DETAILS_SCREEN}
        component={GameDetails}
      />
    </HomeStack.Navigator>
  );
};
export default HomeStackScreen;
