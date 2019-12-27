import {connect} from "react-redux";
import Events from "../screens/events/Events";

function mapStateToProps(store : any) {
    return {
        events: store.events.data,
        store: store.events
    }
}

const EventsContainer = connect(mapStateToProps)(Events);
export default EventsContainer;
