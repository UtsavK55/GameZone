import {ROUTES} from '@constants';

declare global {
  type AuthScreenNames = keyof typeof ROUTES.AUTH;
  type AuthScreenParamList = Record<AuthScreenNames, undefined>;
  type AuthNavigationType = NavigationProp<AuthScreenParamList>;

  type DrawerScreenNames = keyof typeof ROUTES.DRAWER;
  type DrawerScreenParamList = Record<DrawerScreenNames, undefined>;
  type DrawerNavigationType = NavigationProp<DrawerScreenParamList>;

  type HomeScreenNames = keyof typeof ROUTES.HOME_STACK_SCREEN;
  type HomeScreenParamList = Record<HomeScreenNames, undefined>;
  type HomeNavigationType = NavigationProp<HomeScreenParamList>;


  interface DrawerItemProps {
    routeName: string;
    iconName: string;
    label: string;
    isActive: boolean;
    onPress: () => void;
    colors: Colors;
    styles: Record<string, any>;
    scaleSize: (size: number, factor?: number | undefined) => number;
  }
}
