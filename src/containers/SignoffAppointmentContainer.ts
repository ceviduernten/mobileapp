import {connect} from "react-redux";
import SignoffAppointment from "../screens/appointments/SignoffAppointment";

function mapStateToProps(store : any) {
    return {
        group: store.groups.selectedObject,
        appointment: store.appointments.data,
        store: store.appointments
    }
}

const SignoffAppointmentContainer = connect(mapStateToProps)(SignoffAppointment);
export default SignoffAppointmentContainer;