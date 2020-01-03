import 'react-native-gesture-handler';
import {createStackNavigator, TransitionPresets} from 'react-navigation-stack';
import {
  createAppContainer,
  CreateNavigatorConfig,
  NavigationStackRouterConfig,
  NavigationRouteConfigMap,
} from 'react-navigation';

import Test from '../Test';
import {
  StackNavigationOptions,
  StackNavigationProp,
  StackNavigationConfig,
} from 'react-navigation-stack/lib/typescript/src/vendor/types';

import {Home, Profiles, Pay, PayDetails} from '../containers';

const screens: NavigationRouteConfigMap<
  StackNavigationOptions,
  StackNavigationProp
> = {
  Test,
  Home,
  Profiles,
  Pay,
  PayDetails,
};

// const txConfig = {
//   animation: 'spring',
//   config: {
//     stiffness: 1000,
//     damping: 500,
//     mass: 3,
//     overshootClamping: true,
//     restDisplacementThreshold: 0.01,
//     restSpeedThreshold: 0.01,
//   },
// };

// Stack Config
const config: CreateNavigatorConfig<
  StackNavigationConfig,
  NavigationStackRouterConfig,
  StackNavigationOptions,
  StackNavigationProp
> = {
  mode: 'card',
  headerMode: 'none',
  initialRouteName: 'Profiles',
  defaultNavigationOptions: {
    gestureEnabled: true,
    cardOverlayEnabled: true,
    ...TransitionPresets.SlideFromRightIOS,
  },
};

const stack = createStackNavigator(screens, config);
export default createAppContainer(stack);