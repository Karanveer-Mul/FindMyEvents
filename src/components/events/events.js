import React, { Component } from "react";
import Event from "./event";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getEvents } from "../../actions/eventActions";

class Events extends Component {
  componentDidMount() {
    this.props.getEvents();
  }

  render() {
    const { events } = this.props;
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">Upcoming Events!!</h1>
        {events.map((event) => (
          <Event key={event.id} event={event} />
        ))}
      </React.Fragment>
    );
  }
}

Events.propTypes = {
  event: PropTypes.array.isRequired,
  getContacts: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  events: state.event.events,
});

export default connect(mapStateToProps, { getEvents })(Events);
