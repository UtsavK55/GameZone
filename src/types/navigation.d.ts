import {ROUTES} from '@constants';

declare global {
  type AuthScreenNames = keyof typeof ROUTES.AUTH;
  type AuthScreenParamList = Record<AuthScreenNames, undefined>;
  type AuthNavigationType = NavigationProp<AuthScreenParamList>;

  type DrawerScreenNames = keyof typeof ROUTES.DRAWER;
  type DrawerScreenParamList = Record<DrawerScreenNames, undefined>;
  type DrawerNavigationType = NavigationProp<DrawerScreenParamList>;

  type HomeScreenNames = keyof typeof ROUTES.HOME_STACK_SCREEN;
  type HomeScreenParamList = {
    GAMES_SCREEN: undefined;
    GAME_DETAILS_SCREEN: {gameId: number};
  };
  type HomeNavigationType = NavigationProp<HomeScreenParamList>;

  type CollectionScreenNames = keyof typeof ROUTES.COLLECTION_STACK_SCREEN;
  type CollectionScreenParamList = {
    COLLECTION_SCREEN: undefined;
    COLLECTION_DETAILS_SCREEN: {collectionId: number; collectionName: string};
  };
  type CollectionNavigationType = NavigationProp<CollectionScreenParamList>;

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
