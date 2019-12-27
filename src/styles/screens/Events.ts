import {Platform, StyleSheet} from "react-native";
import colors from "../colors";
import constants from "../constants"

export default StyleSheet.create({
    wrapper : {
        flex: 1,
        marginTop: constants.statusBarMargin
    },
    item: {
        backgroundColor: colors.darkBackground,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
        marginBottom: 15,
    },
    itemTitle: {
        backgroundColor: colors.darkAccentColor,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
        marginBottom: 15,
    },
    title: {
        fontSize: 28,
        color: colors.rizBlue,
        textTransform: "uppercase"
    },
    subTitle: {
        fontSize: 20,
        fontWeight: "300"
    },
    detailMainHeader: {
        fontSize: 28,
        color: colors.white,
        fontWeight: "700",
        textTransform: "uppercase"
    },
    detailMainTitle: {
        fontSize: 20,
        color: colors.black,
        textTransform: "uppercase"
    }
});
