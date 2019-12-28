import React from "react";
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import Home from "../../screens/home/Home";

const HomeNavigation = createStackNavigator({
        Home: {
            screen: Home,
            navigationOptions: {
                title: "Home",
                header: null,
            }
        }
    },{
        initialRouteName: 'Home'
    }
);

export default createAppContainer(HomeNavigation);
