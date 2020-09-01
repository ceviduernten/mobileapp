import {Platform, TextStyle, ViewStyle} from "react-native";
import colors from "../colors";

export const headerTitleStyle = {
    color: colors.white,
    textTransform: "uppercase",
    fontSize: 16
};

export const headerBackTitleStyle : TextStyle = {
    color: colors.white,
    textTransform: 'uppercase',
    fontSize: 10,
    fontWeight: "bold"
};

export const headerTintColor = colors.white;

export const headerStyle = {
    backgroundColor: colors.ceviBlue
};

export const headerStyleRed = {
    backgroundColor: colors.ceviRed
};

export const icon = {
    color: colors.white,
    paddingRight: 8,
    marginLeft: 0,
};

export const headerBarTtile : TextStyle = {
    fontSize: 17,
    textTransform: "uppercase",
    fontWeight: "700",
    color: colors.white,
    justifyContent: "center",
    alignItems: "center",
};

export const headerContainer : ViewStyle = {
    flex: 1,
    flexDirection : "row",
    marginTop: Platform.OS === "android" ? 0 : 12
};
