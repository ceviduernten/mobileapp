import React from "react";
import {withNextInputAutoFocusInput, handleTextInput} from "react-native-formik";
import { compose } from "recompose";
// @ts-ignore
import {TextField} from "@ubaids/react-native-material-textfield";

class CustomInput extends React.PureComponent {
    // Implement a focus function that focused whatever needs to be focused
    focus = () => { this.input.focus(); }

    render() {
        return (
            <TextField ref={input => this.input = input} {...this.props} />
        );
    }
}


export const CustomTextInput = compose(
    handleTextInput,
    withNextInputAutoFocusInput
)(CustomInput);