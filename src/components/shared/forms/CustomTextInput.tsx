import React from "react";
import {withNextInputAutoFocusInput, handleTextInput} from "react-native-formik";
import { compose } from "recompose";
import { TextField } from "react-native-material-textfield";

export const CustomTextInput = compose(
    handleTextInput,
    withNextInputAutoFocusInput
)(TextField);