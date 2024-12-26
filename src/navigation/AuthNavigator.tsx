import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {ROUTES} from '@constants';
import Login from '@screens/login/Login';
import Signup from '@screens/signup/Signup';

const AuthStack = createNativeStackNavigator<AuthScreenParamList>();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
        animation:'fade_from_bottom'
      }}>
      <AuthStack.Screen name={ROUTES.AUTH.LOGIN} component={Login} />
      <AuthStack.Screen name={ROUTES.AUTH.SIGNUP} component={Signup} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
