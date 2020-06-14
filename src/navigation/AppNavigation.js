import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import WelcomeScreen from "../screens/WelcomeScreen";
import GameScreen from "../screens/GameScreen";
import GameRulesScreen from "../screens/GameRulesScreen";
import GameHistoryScreen from "../screens/GameHistoryScreen";

import { colors } from "../constants/vars";

const AppNavigation = createStackNavigator({
    Welcome: WelcomeScreen,
    Game: createBottomTabNavigator({
        GameScreen,
        GameRules: {
            screen: GameRulesScreen,
            navigationOptions: {
                headerShown: true
            }
        },
        GameHistory: {
            screen: GameHistoryScreen,
            navigationOptions: {
                headerShown: true
            }
        },
    },{
        backBehavior: "history",
        tabBarOptions: {
                style: {
                    height: 55
                },
            activeTintColor: colors.primarySoft,
        }
    }),
}, {
    defaultNavigationOptions: {
        headerShown: false,
        headerStyle: {
            backgroundColor: Platform.OS === "android" ? colors.primary : "",
        },
        headerTintColor: Platform.OS === "android" ? "" : colors.primary,
    }
});

export default createAppContainer(AppNavigation);