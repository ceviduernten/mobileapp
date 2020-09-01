import {StyleSheet} from "react-native";
import colors from "../colors";
import constants from "../constants"

export default StyleSheet.create({
    wrapper : {
        flex: 1,
        marginTop: constants.statusBarMargin
    },
    item: {
        backgroundColor: colors.ceviRed,
        padding: 16,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10
    },
    infoItem: {
        backgroundColor: colors.darkBackground,
        padding: 16,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10
    },
    itemTitle: {
        backgroundColor: colors.ceviBlue,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
        marginBottom: 10,
        display: 'flex',
        flexDirection: 'row',
    },
    detailTitle: {
        backgroundColor: colors.ceviRed,
        padding: 20,
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
    title: {
        fontSize: 16,
        color: colors.white,
        textTransform: "uppercase"
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
        marginBottom: 5,
    },
    groupInfo: {
        backgroundColor: colors.darkBackground,
        padding: 16,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
        marginBottom: 15,
    },
    detailInfoTitleHeader: {
        fontSize: 20,
        fontWeight: "700",
        textTransform: "uppercase"
    },
    detailInfoTitle: {
        fontSize: 12,
        fontWeight: "700",
        textTransform: "uppercase"
    },
    groupInfoBox: {
        marginTop: 8
    },
    detailActions: {
        flex: 1,
        flexDirection: "row",
        marginVertical: 8,
        marginHorizontal: 16,
        marginBottom: 5,
    },
    signoff: {
        backgroundColor: colors.ceviBlue,
        borderRadius: 10,
        width: '48%',
        marginRight: 8,
        flexDirection: "row",
        padding: 16
    },
    signon: {
        marginLeft: 8,
        backgroundColor: colors.ceviBlue,
        width: '48%',
        borderRadius: 10,
        flexDirection: "row",
        padding: 16
    },
    icon: {
        marginRight: 12,
        color: colors.white
    },
    textAction: {
        fontSize: 14,
        textAlign: "left",
        color: colors.white,
        fontWeight: "700",
        textTransform: "uppercase",
    }
});
