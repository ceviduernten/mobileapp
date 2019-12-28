import {connect} from "react-redux";
import Appointments from "../screens/appointments/Appointments";

function mapStateToProps(store : any) {
    return {
        groups: store.groups.data,
        store: store.groups
    }
}

const AppointmentsContainer = connect(mapStateToProps)(Appointments);
export default AppointmentsContainer;
