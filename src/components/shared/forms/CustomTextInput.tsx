import React from "react";
import {handleTextInput, withNextInputAutoFocusInput} from "react-native-formik";
import {compose} from "recompose";
// @ts-ignore
import {TextField} from "@ubaids/react-native-material-textfield";
import colors from "../../../styles/colors";
import styles from "../../../styles/shared/forms/CustomTextInput";


class CustomInput extends React.PureComponent<any, any> {
    // Implement a focus function that focused whatever needs to be focused
    focus = () => { this.input.focus(); }
    input: any;

    render() {
        return (
            <TextField labelTextStyle={styles.labelStyle} disabledLineType="none" errorColor={colors.ceviRed} ref={input => this.input = input} {...this.props} />
        );
    }
}


export const CustomTextInput = compose(
    handleTextInput,
    withNextInputAutoFocusInput
)(CustomInput);