import React, {Component, ReactElement} from "react";
import {Button, SafeAreaView, Text, View} from "react-native";
import styles from "../../styles/screens/Appointments";
import {Formik} from "formik";
import * as Yup from "yup";
import {withNextInputAutoFocusForm} from "react-native-formik/index";
import {CustomTextInput} from "../../components/shared/forms/CustomTextInput";
import {MultilineTextInput} from "../../components/shared/forms/MultilineTextInput";
import moment from "moment";
import store from "../../../store";
import * as appointmentActions from "../../actions/appointmentActions";


export default class SignoffAppointment extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            idAppointment : "",
            name : "",
            message : "",
            type: 2,
            groupName : "",
            updatedInfos: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    renderLoadingMessage() : ReactElement {
        return (
            <>
                <View style={styles.detailInfoItem}>
                    <Text>Die Daten werden abgerufen.</Text>
                </View>
            </>
        )
    }

    renderWaitMessage() : ReactElement {
        return (
            <>
                <View style={styles.detailInfoItem}>
                    <Text>Dein Input wird verarbeitet. Sobald wird ein Resulat haben, melden wir uns ;-). Habe etwas Geduld.</Text>
                </View>
            </>
        )
    }

    renderSuccessSignoff() : ReactElement {
        return (
            <>
                <View style={styles.detailInfoItem}>
                    <Text>Danke für deine Abmeldung. Sie wurde an die Leiter weitergeleitet. Bis zum nächsten Mal.</Text>
                </View>
            </>
        )
    }

    validationSchema = Yup.object().shape({
        idAppointment: Yup.string().required("Appointment ist ein Pflichfeld."),
        name: Yup.string().required("Einen Geist können wir nicht brauchen in der Cevi. ;-)").min(2, "Dein Name kann nicht so kurz sein."),
        type: Yup.number().required("Type ist ein Pflichtfeld.")
    });

    componentDidMount() {
        const {group, store, appointment} = this.props;
        if (!this.state.updatedInfos && group !== undefined && appointment !== undefined) {
            let appointmentDate = moment(appointment.date).format("DD.MM.YYYY")
            this.setState({"groupName": group.name, "appointmentDate": appointmentDate, updatedInfos: true, idAppointment: appointment.idAppointment});
        }
    }

    handleSubmit(values : any) : void {
        store.dispatch(appointmentActions.signOff(values));
    }

    render() {
        const {store} = this.props;
        const InputsContainer = withNextInputAutoFocusForm(View);
        if (!this.state.updatedInfos) return this.renderLoadingMessage();
        if (store.state === "loading") return this.renderWaitMessage();
        if (store.state === "success_signoff") return this.renderSuccessSignoff();
        return (
            <SafeAreaView style={styles.wrapper}>
                <Formik onSubmit={values => this.handleSubmit(values)} validationSchema={this.validationSchema} initialValues={this.state} enableReinitialize={true}>
                        {(props : any) => {
                            return (
                                <InputsContainer style={{ paddingLeft: 24, paddingRight: 24 }}>
                                    <CustomTextInput label="Cevi-Gruppe" name="groupName" type="text" disabled={true} />
                                    <CustomTextInput label="Cevi-Programm" name="appointmentDate" type="text" disabled={true} />
                                    <CustomTextInput label="Dein Name (Ceviname)" name="name" type="text" />
                                    <MultilineTextInput label="Nachricht an Leiter" name="message" type="text" />

                                    <Button  onPress={props.handleSubmit} title="Abmeldung abschicken" />
                                </InputsContainer>
                            );
                        }}
                </Formik>
            </SafeAreaView>
        );
    }
}
