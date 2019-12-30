import React from "react";
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import Info from "../../screens/info/Info";
import InfoJungschar from "../../screens/info/InfoJungschar";
import InfoFroeschli from "../../screens/info/InfoFroeschli";
import InfoCeviEh from "../../screens/info/InfoCeviEh";

const InfoNavigation = createStackNavigator({
        Info: {
            screen: Info,
            navigationOptions: {
                title: "Informationen",
                headerBackTitle: 'Zurück'
            }
        },
        Jungschar: {
            screen: InfoJungschar,
            navigationOptions: {
                title: "Jungschar",
            }
        },
        Froeschli: {
            screen: InfoFroeschli,
            navigationOptions: {
                title: "Arbeitsgebiet Fröschli",
            }
        },
        CeviEh: {
            screen: InfoCeviEh,
            navigationOptions: {
                title: "Arbeitsgebiet Cevi-Eh!",
            }
        },
    },{
        initialRouteName: 'Info'
    }
);

export default createAppContainer(InfoNavigation);
