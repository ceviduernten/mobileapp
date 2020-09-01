import {connect} from "react-redux";
import SignonAppointment from "../screens/appointments/SignonAppointment";

function mapStateToProps(store : any) {
    return {
        group: store.groups.selectedObject,
        appointment: store.appointments.data,
        store: store.appointments
    }
}

const SignonAppointmentContainer = connect(mapStateToProps)(SignonAppointment);
export default SignonAppointmentContainer;