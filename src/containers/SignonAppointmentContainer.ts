import {connect} from "react-redux";
import AppointmentDetail from "../screens/appointments/AppointmentDetail";

function mapStateToProps(store : any) {
    return {
        group: store.groups.selectedObject,
        appointment: store.appointments.data,
        store: store.appointments
    }
}

const SignoffAppointmentContainer = connect(mapStateToProps)(AppointmentDetail);
export default SignoffAppointmentContainer;