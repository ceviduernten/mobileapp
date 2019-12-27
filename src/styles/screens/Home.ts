import {Platform, StyleSheet} from "react-native";
import colors from "../colors";
import constants from "../constants"

export default StyleSheet.create({
    wrapper : {
        flex: 1,
        marginTop: constants.statusBarMargin
    },
    homeHeader: {
        marginVertical: 8,
        marginHorizontal: 16,
        marginBottom: 15,
        marginTop: 25
    },
    homeAction: {
        backgroundColor: colors.rizBlue,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
        marginBottom: 15,
    },
    welcomeMessage: {
        fontSize: 20,
    },
    welcomeUsername: {
        fontSize: 24,
        fontWeight: "700"
    },
    actionTitle: {
        fontSize: 24,
        color: colors.white,
        fontWeight: "700"
    }
});
