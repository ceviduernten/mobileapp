import {Platform, StyleSheet} from "react-native";
import colors from "../colors";

export default StyleSheet.create({
    wrapper : {
        flex: 1,
        backgroundColor: colors.darkBackground,
    },
    scrollView: {
        marginLeft: 30,
        marginRight: 30,
        ...Platform.select({
            ios: {
                paddingTop: 80,
            },
            android: {
                paddingTop: 20,
            },
        }),
    },
    logo: {
        flex: 1,
        height: undefined,
        aspectRatio: 1,
        width: "100%"
    },
    logoWrapper: {
        marginLeft: 32,
        marginRight: 32,
        marginBottom: 40
    },
    textWrapper: {
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        color: colors.ceviRed,
        fontSize: 32,
        width: "100%",
        fontWeight: "700",
        textTransform: "uppercase",
        textAlign: 'center',
        marginBottom: 24,
        marginTop: 8
    },
    info: {
        color: colors.black,
        fontSize: 16,
        width: "100%",
        fontWeight: "300",
        textAlign: 'center'
    },
    credoHeader: {
        color: colors.black,
        fontSize: 12,
        width: "100%",
        fontWeight: "500",
        textAlign: 'center',
        marginTop: 40,
        textTransform: "uppercase",
    },
    credoText: {
        color: colors.black,
        fontSize: 12,
        width: "100%",
        fontWeight: "300",
        textAlign: 'center'
    }
});
