import {createAppContainer, createSwitchNavigator} from "react-navigation"
import TabNavigation from "./TabNavigation";

export default Navigation = createAppContainer(
    createSwitchNavigator(
        {
            Unsecured: {
                screen: TabNavigation,
            },
            Secured: {
                screen: TabNavigation
            }
        },
        {
            initialRouteName: 'Secured',
        }
    )
);
