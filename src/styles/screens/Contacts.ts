import {StyleSheet} from "react-native";
import colors from "../colors";
import constants from "../constants"

export default StyleSheet.create({
    wrapper : {
        flex: 1,
        marginTop: constants.statusBarMargin
    },
    headerBox: {
        backgroundColor: colors.ceviRed,
        padding: 16,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10
    },
    mainHeaderBox: {
        backgroundColor: colors.ceviBlue,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
        marginBottom: 10,
        display: 'flex',
        flexDirection: 'row',
    },
    icon: {
        paddingRight: 16,
        color: colors.white
    },
    headerBoxTitle: {
        fontSize: 16,
        color: colors.white,
        textTransform: "uppercase"
    },
    mainHeaderTitle: {
        fontSize: 20,
        color: colors.white,
        fontWeight: "700",
        textTransform: "uppercase",
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 2
    },
    contactItem: {
        backgroundColor: colors.darkBackground,
        padding: 16,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
        marginBottom: 5
    },
    contactName: {
        fontSize: 12,
        fontWeight: "700",
        textTransform: "uppercase"
    },
    contactDetails: {
        fontSize: 12,
        fontWeight: "300"
    }
});
