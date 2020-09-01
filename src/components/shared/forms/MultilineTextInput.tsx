import React from "react";
import {withNextInputAutoFocusInput, handleTextInput} from "react-native-formik";
import { compose } from "recompose";
// @ts-ignore
import {TextField} from "@ubaids/react-native-material-textfield";
import styles from "../../../styles/shared/forms/CustomTextInput";
import colors from "../../../styles/colors";

class CustomMultilineInput extends React.PureComponent {
    // Implement a focus function that focused whatever needs to be focused
    focus = () => { this.input.focus(); }

    render() {
        return (
            <TextField multiline={true} labelTextStyle={styles.labelStyle} errorColor={colors.ceviRed}  ref={input => this.input = input} {...this.props} />
        );
    }
}


export const MultilineTextInput = compose(
    handleTextInput,
    withNextInputAutoFocusInput
)(CustomMultilineInput);