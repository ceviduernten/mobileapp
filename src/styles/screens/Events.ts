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
        padding: 8,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
    },
    itemTitle: {
        backgroundColor: colors.ceviBlue,
        padding: 16,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
        marginBottom: 10,
        display: 'flex',
        flexDirection: 'row',
    },
    detailIcon: {
        paddingRight: 16,
        color: colors.white
    },
    icon: {
        color: colors.ceviRed
    },
    eventIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        paddingRight: 16,
        width: 55
    },
    eventTitle: {

    },
    title: {
        fontSize: 24,
        color: colors.ceviBlue,
        textTransform: "uppercase"
    },
    date: {
        fontSize: 16,
        fontWeight: "300",
        color: colors.black,
    },
    detailMainHeader: {
        fontSize: 20,
        color: colors.white,
        fontWeight: "700",
        textTransform: "uppercase",
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 2
    },
    detailInfoItem: {
        backgroundColor: colors.darkBackground,
        padding: 16,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
        marginBottom: 10,
    },
    detailInfoTitle: {
        fontSize: 20,
        fontWeight: "700",
        textTransform: "uppercase"
    },
});
